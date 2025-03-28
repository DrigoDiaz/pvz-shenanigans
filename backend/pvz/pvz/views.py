from django.http import JsonResponse

def all_plants(request):
    if request.method == "GET":
        print("ALL PLANTS")
        return JsonResponse({"message": "Successfully retrieved all plant names!"}, status=200)