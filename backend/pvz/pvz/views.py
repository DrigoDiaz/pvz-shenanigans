from django.http import JsonResponse
from .plants import plantdata

def all_plants(request):
    if request.method == "GET":
        print("Getting all plant names")
        plants = [
                "a.k.e.e.",
                "ail-mint",
                "aloe",
                "appease-mint",
                "apple mortar",
                "arma-mint",
                "banana launcher",
                "blastberry vine",
                "bloomerang",
                "blooming heart",
                "blover",
                "bombard-mint",
                "bonk choy",
                "boom balloon flower",
                "bowling bulb",
                "cabbage-pult",
                "caulipower",
                "celery stalker",
                "chard guard",
                "cherry bomb",
                "chili bean",
                "citron",
                "coconut cannon",
                "cold snapdragon",
                "conceal-mint",
                "contain-mint",
                "dartichoke",
                "dazey chain",
                "draftodil",
                "dusk lobber",
                "e.m.peach",
                "electrici-tea",
                "enchant-mint",
                "endurian",
                "enforce-mint",
                "enlighten-mint",
                "escape root",
                "explode-o-nut",
                "explode-o-vine",
                "fila-mint",
                "fume-shroom",
                "garlic",
                "ghost pepper",
                "gloom vine",
                "gold bloom",
                "gold leaf",
                "grapeshot",
                "grave buster",
                "grimrose",
                "gumnut",
                "headbutter lettuce",
                "heath seeker",
                "hocus crocus",
                "holly barrier",
                "homing thistle",
                "hot potato",
                "iceberg lettuce",
                "imp pear",
                "infi-nut",
                "intensive carrot",
                "jack o' lantern",
                "jalapeno",
                "kernel-pult",
                "kiwibeast",
                "laser bean",
                "lava guava",
                "lightning reed",
                "lily pad",
                "magnet-shroom",
                "magnifying grass",
                "melon-pult",
                "missile toe",
                "moonflower",
                "murkadamia nut",
                "nightshade",
                "olive pit",
                "parsnip",
                "pea pod",
                "pea vine",
                "pea-nut",
                "peashooter",
                "pepper-mint",
                "pepper-pult",
                "perfume-shroom",
                "potato mine",
                "power lily",
                "power vine",
                "primal peashooter",
                "primal potato mine",
                "primal sunflower",
                "primal wall-nut",
                "puff-shroom",
                "puffball",
                "pumpkin",
                "pyre vine",
                "red stinger",
                "reinforce-mint",
                "repeater",
                "rotobaga",
                "sap-fling",
                "shadow peashooter",
                "shadow-shroom",
                "shine vine",
                "shrinking violet",
                "snapdragon",
                "solar sage",
                "solar tomato",
                "spear-mint",
                "spikerock",
                "spikeweed",
                "split pea",
                "spore-shroom",
                "spring bean",
                "squash",
                "stallia",
                "starfruit",
                "stickybomb rice",
                "stunion",
                "sun bean",
                "sun-shroom",
                "sunflower",
                "sweet potato",
                "tall-nut",
                "tangle kelp",
                "teleportato mine",
                "threepeater",
                "thyme warp",
                "tiger grass",
                "tile turnip",
                "toadstool",
                "tumbleweed",
                "twin sunflower",
                "wall-nut",
                "wasabi whip",
                "winter melon",
                "winter-mint",
                "witch hazel",
                "zoybean pod"
                ]
        return JsonResponse({"message": "Successfully retrieved all plant names!", "plants": plants}, status=200)
        
def plant_info(request):
    if request.method == "GET":
        print(request.GET["name"])
        try:
            return JsonResponse(plantdata[request.GET["name"]], status=200)
        except:
            return JsonResponse({"message": "Error finding plant in database"}, status=500)