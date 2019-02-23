# General
Application for creating, storing, and categorizing recipes. A cookbook.

# Story definitions
[View the trello board](https://trello.com/b/y9YRhAjb/bee-book)

*** Indicates MVP target feature

As a user, I want to be able to:
1. *** View my recipes
1. *** Tag my recipes with descriptive info so that I can find them easier later (e.g. hashtags)
1. *** Filter my recipes by a variety of info:
    * Recipe time (i.e. time it takes to prepare or cook)
    * Recipe tags (with some default tags, like breakfast, lunch, dinner, dessert, sauce, fast, easy, etc)
    * Recipe ingredients
1. *** Print out recipes (or, minimally, generate a PDF)
1. *** Create a new recipe
    * See [Recipe Format](#recipe-format)
    * I want this recipe to contain:
        * A Unique Identifier
        * Name
        * Description
        * Ingredients
        * Method
        * Date Created
        * Date last modified
        * Source (or name of creator)
        * Tags
        * Important or otherwise valuable links
1. Include an existing recipe within a recipe
1. Delete recipes
1. Source control my recipes 
1. Revert to an old version of a recipe
1. *** Log when I have made a recipe and include any comments, thoughts, or changes
1. Convert ingredient units into other common units
1. Import recipes from web links (lol)

# Design

Application will be a MEAN stack, most likely. Angular 6/7? will operate as the frontend application, with ExpressJS exposing a REST API to the NodeJS backend that provides access to a mongodb datastore (probably).

## Viewing recipes
At application startup, a GET REST request will be sent to the backend for retreiving summary data about all of the recipes from the datastore. Summary data should include only the name, description, and tags of each recipe.

Users will be provided with a view displaying a list of available recipes. This list will be in a tabular format and, on larger displays, occupy (roughly) 50% of the screen. This table will contain the high-level metadata of each recipe, e.g. Name, description, tags. On large screens, when a recipe is highlighted/selected, the other (right hand) 50% of the screen will display a preview of the recipe. 

The recipe list will be paginated.

The user will be able to filter the recipe by selecting the column headers or by entering search terms into a text field.

Common filtering options will be provided under the search bar, such as "dinner" or "fast". The user will be able to select these buttons and see the search field populated with the appropriate terms.

The far right hand side of the recipe list will contain an X field, which the user can click to [delete a recipe](#deleting-recipes).

---
## Viewing a single recipe

Clicking/selecting the recipe name will change the view to displaying the recipe on the full screen. This will send a GET REST request to the backend to query the database for the full data of the recipe.

When viewing a recipe, a back button in the top left side of the page will allow the user to navigate back to the recipe list.

Fields will contain a pencil icon which the user may click to edit that field. Once a field is edited, a button for [saving the recipe](#editing-recipes) will become enabled. Clicking the back button after editing one or more fields without saving will prompt the user to save or discard the changes.

A button at the top of the screen will allow the user to [delete the recipe](#deleting-recipes).

---
## Creating recipes
A global button will be provided at the top of the screen on all pages for creating a new recipe.

The create recipe screen will be a form that allows the user to fill in all of the fields of a recipe, detailed in [Recipe Format](#recipe-format).

To save the recipe to the datastore, the user will be able to press a button located at the top of the screen to save the recipe. This will POST a REST request to the backend, with the body containing 

---
## Editing recipes
When [viewing a single recipe](#viewing-a-single-recipe), a save button will exist at the top of the screen. The button will be disabled by default, but various fields will contain a pencil icon which the user may click to edit that field.

 Once a field is edited, the save button will become enabled. 

Clicking the back button after editing one or more fields without saving will prompt the user to save or discard the changes.

---
## Deleting recipes
The user can click on an X icon on the far right side of the [tabular recipe view](#viewing-recipes) in order to delete a recipe.

When [viewing a single recipe](#viewing-a-single-recipe), the user will also be afforded the option to delete the current recipe. 

---
# Recipe format

Recipes will be stored in a defined JSON schema.

```
{
  "definitions": {},
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "http://example.com/root.json",
  "type": "object",
  "title": "The Root Schema",
  "required": [
    "uid",
    "name",
    "description",
    "ingredients",
    "method",
    "created",
    "lastModified",
    "src",
    "tags",
    "links"
  ],
  "properties": {
    "uid": {
      "$id": "#/properties/uid",
      "type": "integer",
      "title": "The Uid Schema",
      "default": 0,
      "examples": [
        1
      ]
    },
    "name": {
      "$id": "#/properties/name",
      "type": "string",
      "title": "The Name Schema",
      "default": "",
      "examples": [
        "Recipe Name"
      ],
      "pattern": "^(.*)$"
    },
    "description": {
      "$id": "#/properties/description",
      "type": "string",
      "title": "The Description Schema",
      "default": "",
      "examples": [
        "This is a recipe description"
      ],
      "pattern": "^(.*)$"
    },
    "ingredients": {
      "$id": "#/properties/ingredients",
      "type": "array",
      "title": "The Ingredients Schema",
      "items": {
        "$id": "#/properties/ingredients/items",
        "type": "object",
        "title": "The Items Schema",
        "required": [
          "name",
          "qty",
          "unit"
        ],
        "properties": {
          "name": {
            "$id": "#/properties/ingredients/items/properties/name",
            "type": "string",
            "title": "The Name Schema",
            "default": "",
            "examples": [
              "Ingredient name"
            ],
            "pattern": "^(.*)$"
          },
          "qty": {
            "$id": "#/properties/ingredients/items/properties/qty",
            "type": "number",
            "title": "The Qty Schema",
            "default": 0.0,
            "examples": [
              1.25
            ]
          },
          "unit": {
            "$id": "#/properties/ingredients/items/properties/unit",
            "type": "object",
            "title": "The Unit Schema",
            "required": [
              "uid",
              "name",
              "type"
            ],
            "properties": {
              "uid": {
                "$id": "#/properties/ingredients/items/properties/unit/erties/uid",
                "type": "integer",
                "title": "The Uid Schema",
                "default": 0,
                "examples": [
                  2
                ]
              },
              "name": {
                "$id": "#/properties/ingredients/items/properties/unit/erties/name",
                "type": "string",
                "title": "The Name Schema",
                "default": "",
                "examples": [
                  "cup"
                ],
                "pattern": "^(.*)$"
              },
              "type": {
                "$id": "#/properties/ingredients/items/properties/unit/erties/type",
                "type": "string",
                "title": "The Type Schema",
                "default": "",
                "examples": [
                  "imp"
                ],
                "pattern": "^(.*)$"
              }
            }
          }
        }
      }
    },
    "method": {
      "$id": "#/properties/method",
      "type": "array",
      "title": "The Method Schema",
      "items": {
        "$id": "#/properties/method/items",
        "type": "object",
        "title": "The Items Schema",
        "required": [
          "step",
          "description"
        ],
        "properties": {
          "step": {
            "$id": "#/properties/method/items/properties/step",
            "type": "integer",
            "title": "The Step Schema",
            "default": 0,
            "examples": [
              1
            ]
          },
          "description": {
            "$id": "#/properties/method/items/properties/description",
            "type": "string",
            "title": "The Description Schema",
            "default": "",
            "examples": [
              "Lorem ipsum dolor"
            ],
            "pattern": "^(.*)$"
          }
        }
      }
    },
    "created": {
      "$id": "#/properties/created",
      "type": "string",
      "title": "The Created Schema",
      "default": "",
      "examples": [
        "2018-11-13T20:20:39+00:00"
      ],
      "pattern": "^(.*)$"
    },
    "lastModified": {
      "$id": "#/properties/lastModified",
      "type": "string",
      "title": "The Lastmodified Schema",
      "default": "",
      "examples": [
        "2018-11-13T20:20:39+00:00"
      ],
      "pattern": "^(.*)$"
    },
    "src": {
      "$id": "#/properties/src",
      "type": "string",
      "title": "The Src Schema",
      "default": "",
      "examples": [
        "https://foodwishes.blogspot.com/2019/02/my-cashew-chicken-curry-moooove.html"
      ],
      "pattern": "^(.*)$"
    },
    "tags": {
      "$id": "#/properties/tags",
      "type": "array",
      "title": "The Tags Schema",
      "items": {
        "$id": "#/properties/tags/items",
        "type": "string",
        "title": "The Items Schema",
        "default": "",
        "examples": [
          "tag1",
          "tag2",
          "tag3"
        ],
        "pattern": "^(.*)$"
      }
    },
    "links": {
      "$id": "#/properties/links",
      "type": "array",
      "title": "The Links Schema",
      "items": {
        "$id": "#/properties/links/items",
        "type": "string",
        "title": "The Items Schema",
        "default": "",
        "examples": [
          "link1",
          "link2",
          "link3"
        ],
        "pattern": "^(.*)$"
      }
    }
  }
}
```

Example:
```
{
    "uid": 1,
    "name": "Recipe Name",
    "description": "This is a recipe description",
    "ingredients": [
        {
            "name": "Ingredient name",
            "qty": 1.25,
            "unit": {
                "uid": 2,
                "name": "cup",
                "type": "imp"
            }
        },
        {
            "name": "Ingredient name",
            "qty": 25.0,
            "unit": {
                "uid": 12,
                "name": "gram",
                "type": "met"
            }
        },
    ],
    "method": [
        {
            "step": 1,
            "description": "Lorem ipsum dolor"
        },
        {
            "step": 2,
            "description": "Lorem ipsum dolor"
        },
    ],
    "created": "2018-11-13T20:20:39+00:00",
    "lastModified": "2018-11-13T20:20:39+00:00",
    "src": "https://foodwishes.blogspot.com/2019/02/creamy-cashew-chicken-curry-moooove.html",
    "tags": [
        "tag1",
        "tag2",
        "tag3",
    ],
    "links": [
        "link1",
        "link2",
        "link3",
    ]
}
```