# Senior Enrichment Project

:cocktail:Allison's Cocktail Mixer:cocktail:

## Frameworks Used

Sequelize, Express, React, Redux, React-Redux

### DB Design

- Cocktails
  * profile info (e.g. name and recipe URL)
  * assigned to a collection

- Collections
  * have info such as a name and image
  * can have many cocktails assigned (may have none)

### Views and Functionality

- Navigation: as a user I...
  * will land on **Home** by default
  * can navigate to **Collections** from **Home**
  * can navigate to **Cocktails** from **Home**
  * can navigate to view a **Single Collection** from **Collections**
  * can navigate to view a **Single Cocktail** from **Cocktails**
  * can navigate to view a **Single Cocktail** from **Single Collection** (for any cocktails in that collection)
  * can navigate to view that student's **Single Collection** from **Single Cocktail**

- Views: as a user I...
  * see a list of all collections on the **Collections** view
  * see a list of all cocktails on the **Cocktails** view
  * see details about a collection on the **Single Collection** view, including that collection's cocktails
  * see details about a cocktail on the **Single Cocktail** view, including that cocktail's collection

- Actions: as a user I...
  * can create a collection
  * can edit a collection's info, including adding/removing a cocktail to/from that collection
  * can delete a collection
  * can create a cocktail
  * can edit a cocktail's info, including the collection that cocktail is assigned to
  * can delete a cocktail



