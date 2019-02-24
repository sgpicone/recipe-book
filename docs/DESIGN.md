# Recipe Book Design/Use Case Document

Recipe Book is an application for creating, storing, and categorizing recipes. A cookbook.

## Story definitions

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

## Design

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

## Logging recipes

Users will be afforded the option of logging when they have made a recipe, and can include comments about the cook time, taste, and/or changes and adaptations made to the recipe.

A control will exist on the [View Recipe](#viewing-a-single-recipe) for creating a recipe log, which will bring users to the [create log view](#creating-a-new-log).

Another, global control, will also exist for when the user simply wants to open the app and log a recipe.

### Creating a new log

When the user selects one of the controls to log a recipe, they will either be given the opportunity to select the recipe which they are logging or that option will already be populated. That is, in the case where the user accesses the create log page via an existing recipe, that recipe will already be selected on the recipe select control. If the user accesses the create log page from the global create log control, that field will be left blank for the user to select.

The user will be provided with options to log comments, date/time of creation (default to current day/time), amount of time used to prepare the recipe, and any adjustments or substitutions made. Of these fields, only the recipe being logged and the date/time of creation will be required.

## Recipe format

Recipes will be stored in a defined JSON schema detailed in [recipe_schema.json](./recipe_schema.json)

An example exists in [sample_recipe.json](./sample_recipe.json)

## Recipe Log Format

Recipe logs will also be stored in a defined JSON schema, detailed in [recipe_log_schema.json](./recipe_log_schema.json).

An example exists in [sample_recipe_log.json](./sample_recipe_log.json).