# SemiSmartStorage
SemiSmartStorage is an approach to implement a lightweight way to keep track of inventories, e.g. in a household's fridges, fridge-freezers and store rooms.
It is often hard to stay on top of things, thus lots of food and consumables are superfluously bought several times.
On the one hand it may waste space and energy to store them, on the other hand it can lead to several groceries going off.

However, it is easy to keep all the items in your different storages in mind, if you keep a list of them.
But honestly, this is an annoying job, especially because you need to update the list after each buying and every time you consume an item.
SemiSmartStorage should be a simple tool which makes this task more enjoyable.


## Concept
### Storage
Each _storage_ can contain _content_.
The database stores the storages' ids and names in a separated table _Storage_, whereas the relation to their content is described in the table _Content_.

Storage |
---|
_id_: int |
_name_: string |

### Item
There are two possible ways to manage items.

On the one hand one could allow to type in arbitrary item names.
The main advantage is the flexibility, as literally any item can be described by a label chosen by the user.
But this may lead to inconsistent naming and and unwanted duplicates.
For example both "Water bottle" and "Bottle of water" perfectly describe a bottle filled with water, but unfortunately the system would treat them as totally different items.

On the other hand one could force the user to define items before usage.
It is possible to add items from a list of all known items to a storage.
Of course it is annoying to create all the different items in the beginning.
But once most common items are known, adding and updating the entries becomes quicker.

As the advantages of the second approach weight harder, it is used in the application.

Item |
---|
_id_: int |
_name_: string |

_Idea: Saving barcodes may be a good idea if it comes to automatic product recognition._

### Unit
Units define the item's unions.
For similar reasons like for items, units are represented as predefined names.
For example a package of flour weighs 500g, thus "500g" is a unit.
If one simply wants to keep track of more abstract items like steel cans with tomatoes, a unit can also be "tin".

Units are not directly connected with items, because several units may be used for one item in different storages.

Unit |
---|
_id_: int |
_name_: string |

### Content
Each _content_ is described by a unique _id_, the foreign keys _itemId_, _unitID_ and _storageId_, and a _quantity_.
This table describes the relationship between storages, items and units.
It can be read as: "item I with unit U and quantity Q is in storage S."

Content |
---|
_id_: int |
_itemId_: int |
_unitId_: int |
_quantity_: float |
_storageId_: int |


## User Interface
The user interface is vertically separated into two sections.
On top of the application one can see a header providing settings.

Ids are never explicitly shown to the user, names are fetched instead.

### Storage list
On the left side a list with all existing storages is offered.
It is possible to update the name or delete the storage via modal.

At the bottom of the list a form for adding a new storage is offered.
It consists of a textfield for the new storage's name, and a button to add it to the list.

Storages |
--- |
Fridge [Edit]|
Basement [Edit]|
[textfield][Add] |

### Storage content list
On the right side the selected storage's items are presented.
Each item is represented as a table row giving information on name, unit and quantity.
Each attribute is presented in an own column.
A forth column offers buttons to directly increase or decrease the quantity, and to edit or delete the entry.

New entries can be added using the last row as a form.
Item and unit need to be selected from a dropdown menu, and the quantity is inserted by a textfield.

Item | Unit | Quantity | Options
--- | --- | --- | ---
Milk | 1L | 1.8 | [-][+][Edit][Remove]
Egg | 1 piece | 7 | [-][+][Edit][Remove]
Yoghurt | 500g | 3.5 | [-][+][Edit][Remove]
[dropdown] | [dropdown] | [textfield] | [Add]

#### Unit list
A list with all available units can be seen as a modal.
Units can be renamed or deleted via modal.
The last entry is used to fill in a new unit.

One could have thought of a representation as list-items with textfields, but the rendering and updating several buffered textfield may become a problem for large lists.

Name | Options
--- | ---
1L [Edit] | [Delete]
500g [Edit] | [Delete]
tin [Edit] | [Delete]
[textfield] | [Add]

### Item list
A list with all known items is available as a modal.
It works like the unit list, modals are used to update or delete items.
Units can be chosen from a dropdown menu.

Name |  Options
--- | ---
Milk [Edit] | [Delete]
Yoghurt [Edit] | [Delete]
Tomatoes [Edit] | [Delete]
[textfield] | [Add]


## Project Structure
### Overview
The application is a *ReactApp*, so *React* is used to offer a pleasant user interface.
*Axios* is used to communicate with the backend.
Its build is hosted on a *Raspberry Pi* and served locally by an *Apache 2* server application.
This significantly lowers the need of complex safety mechanisms.

Tests for the frontend are written with *Jest*.
Components are tested via snapshot-testing, and services are called with a mock-version of axios.

An *SQLite 3* database in combination with *PHP 7* is used as a lightweight backend and api.
Both run on the same Raspberry Pi as the Apache server, because the local application's traffic will be tiny.

Users can simply access the application by visiting a local URI and using the app inside their browser.

### Software Architecture
`./api` contains the php-scripts which are called by the app's services.
Documentation and roadmap can be found in `./docs`.

The React-App itself is located in `./src`.
It contains the subfolders
- `/components`: holds components as described above and their subcomponents
- `/constants`: holds url-constants, enums and dummy-data
- `/services`: holds services, which offer functions triggering backend-calls
- `/styles`: holds stylesheets for components in `/components`
- `/tests`: holds snapshot-tests for components and integration-tests for services

 `help.html` is the api's self-disclosure and describes routes, parameters and possible results.

The creation-scripts and initial datasets for SQLite can be found in `./database`.


## Installation - further notice
It is assumed that both backend and frontend are installed at the server's document-root (typically `/var/www/html`).
Otherwise one needs to update the following constants:
- field `homepage` in `package.json` needs to be updated to new frontend-location
- constant `BASEURL` inside `./src/constants/urlConstants.js` needs to be set to the actual backend-url
- return value of function `getDatabaseRelativePath()` inside `./api/tools.php` may need to to be set to the relative path to the database
