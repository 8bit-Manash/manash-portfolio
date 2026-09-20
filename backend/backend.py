"""
Django backend for Manash Madhukar's portfolio contact form.
Saves submissions to a local Excel file (openpyxl).

Setup:
  pip install django djangorestframework openpyxl django-cors-headers

Run:
  python manage.py runserver
"""

# ─── settings.py (single-file Django) ───────────────────────────────────────
import os, sys, json, pathlib
from datetime import datetime

# ─── Django imports ───────────────────────────────────────────────────────────
import django
from django.conf import settings

BASE_DIR = pathlib.Path(__file__).resolve().parent
EXCEL_FILE = BASE_DIR / "contact_submissions.xlsx"

if not settings.configured:
    settings.configure(
        DEBUG=True,
        SECRET_KEY="manash-portfolio-dev-key-change-in-prod",
        ALLOWED_HOSTS=["*"],
        INSTALLED_APPS=[
            "django.contrib.contenttypes",
            "django.contrib.auth",
            "corsheaders",
            "rest_framework",
        ],
        MIDDLEWARE=[
            "corsheaders.middleware.CorsMiddleware",
            "django.middleware.common.CommonMiddleware",
        ],
        CORS_ALLOW_ALL_ORIGINS=True,  # Restrict in production!
        ROOT_URLCONF=__name__,
        DATABASES={
            "default": {
                "ENGINE": "django.db.backends.sqlite3",
                "NAME": BASE_DIR / "db.sqlite3",
            }
        },
    )

django.setup()

# ─── Excel helper ─────────────────────────────────────────────────────────────
def get_or_create_workbook():
    """Load existing Excel file or create one with headers."""
    try:
        from openpyxl import load_workbook
        wb = load_workbook(EXCEL_FILE)
        ws = wb.active
    except FileNotFoundError:
        from openpyxl import Workbook
        from openpyxl.styles import Font, PatternFill, Alignment

        wb = Workbook()
        ws = wb.active
        ws.title = "Contact Submissions"

        headers = ["#", "Name", "Email", "Message", "Timestamp", "IP"]
        header_fill = PatternFill(start_color="0A0A12", end_color="0A0A12", fill_type="solid")
        header_font = Font(color="00F5FF", bold=True, name="Consolas")

        for col, header in enumerate(headers, 1):
            cell = ws.cell(row=1, column=col, value=header)
            cell.font = header_font
            cell.fill = header_fill
            cell.alignment = Alignment(horizontal="center")

        # Column widths
        ws.column_dimensions["A"].width = 5
        ws.column_dimensions["B"].width = 25
        ws.column_dimensions["C"].width = 35
        ws.column_dimensions["D"].width = 60
        ws.column_dimensions["E"].width = 22
        ws.column_dimensions["F"].width = 18

        wb.save(EXCEL_FILE)

    return wb, ws


def save_to_excel(name: str, email: str, message: str, ip: str = "") -> int:
    """Append a row to the Excel file. Returns the row number."""
    wb, ws = get_or_create_workbook()

    from openpyxl.styles import Font, Alignment

    next_row = ws.max_row + 1
    row_num = next_row - 1  # submission number

    data = [row_num, name, email, message, datetime.now().strftime("%Y-%m-%d %H:%M:%S"), ip]

    normal_font = Font(name="Calibri", size=11)
    for col, value in enumerate(data, 1):
        cell = ws.cell(row=next_row, column=col, value=value)
        cell.font = normal_font
        if col == 4:  # message column
            cell.alignment = Alignment(wrap_text=True)

    wb.save(EXCEL_FILE)
    print(f"[EXCEL] Saved row {next_row}: {name} <{email}>")
    return row_num


# ─── Views ────────────────────────────────────────────────────────────────────
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods


@csrf_exempt
@require_http_methods(["POST", "OPTIONS"])
def contact_view(request):
    """POST /api/contact/ — save form submission to Excel."""
    if request.method == "OPTIONS":
        response = JsonResponse({})
        response["Access-Control-Allow-Origin"] = "*"
        response["Access-Control-Allow-Methods"] = "POST, OPTIONS"
        response["Access-Control-Allow-Headers"] = "Content-Type"
        return response

    try:
        body = json.loads(request.body)
        name = body.get("name", "").strip()
        email = body.get("email", "").strip()
        message = body.get("message", "").strip()

        # Validation
        errors = {}
        if not name:
            errors["name"] = "Name is required"
        if not email or "@" not in email:
            errors["email"] = "Valid email is required"
        if not message:
            errors["message"] = "Message is required"
        if len(message) > 2000:
            errors["message"] = "Message too long (max 2000 chars)"

        if errors:
            return JsonResponse({"success": False, "errors": errors}, status=400)

        ip = request.META.get("HTTP_X_FORWARDED_FOR", request.META.get("REMOTE_ADDR", ""))
        row_num = save_to_excel(name, email, message, ip)

        return JsonResponse({
            "success": True,
            "message": f"Thanks {name}! Your message has been saved.",
            "submission_id": row_num,
        }, status=201)

    except json.JSONDecodeError:
        return JsonResponse({"success": False, "error": "Invalid JSON body"}, status=400)
    except Exception as e:
        print(f"[ERROR] contact_view: {e}")
        return JsonResponse({"success": False, "error": "Internal server error"}, status=500)


@csrf_exempt
@require_http_methods(["GET"])
def submissions_view(request):
    """GET /api/submissions/ — list all contact submissions (admin use)."""
    # Add auth in production!
    try:
        wb, ws = get_or_create_workbook()
        rows = []
        for row in ws.iter_rows(min_row=2, values_only=True):
            if row[0]:  # skip empty rows
                rows.append({
                    "id": row[0],
                    "name": row[1],
                    "email": row[2],
                    "message": row[3],
                    "timestamp": str(row[4]),
                    "ip": row[5],
                })
        return JsonResponse({"success": True, "count": len(rows), "submissions": rows})
    except Exception as e:
        return JsonResponse({"success": False, "error": str(e)}, status=500)


def health_view(request):
    """GET /api/health/ — simple health check."""
    return JsonResponse({
        "status": "ok",
        "service": "Manash Portfolio Backend",
        "excel_file": str(EXCEL_FILE),
        "submissions": (
            get_or_create_workbook()[1].max_row - 1
            if EXCEL_FILE.exists()
            else 0
        ),
    })


# ─── URL conf ─────────────────────────────────────────────────────────────────
from django.urls import path

urlpatterns = [
    path("api/contact/", contact_view),
    path("api/submissions/", submissions_view),
    path("api/health/", health_view),
    # Serve the frontend in development
    path("", lambda req: __import__("django.http", fromlist=["HttpResponse"]).HttpResponse(
        open(BASE_DIR / "frontend" / "index.html").read(),
        content_type="text/html"
    )),
]


# ─── Run server ───────────────────────────────────────────────────────────────
if __name__ == "__main__":
    from django.core.management import execute_from_command_line
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "__main__")
    args = sys.argv if len(sys.argv) > 1 else [__file__, "runserver", "0.0.0.0:8000"]
    execute_from_command_line(args)
