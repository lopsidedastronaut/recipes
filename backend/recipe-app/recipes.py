from flask import Blueprint, jsonify, request


bp = Blueprint('recipes', __name__, url_prefix='/recipes')


@bp.route("/", methods=["GET", "POST"])
def recipes():
    if request.method == "GET":
        # show all the recipes
        recipes = [
            {'name': 'Momo', 'ingridients': ['this', 'that', 'blah']},
            {'name': 'Pulao'}
        ]
        return jsonify(recipes)
    elif request.method == "POST":
        # save a recipe
        print(request.is_json)
        content = request.get_json()
        print(content)
        return jsonify(content), 201, {'Access-Control-Allow-Origin': '*'}
