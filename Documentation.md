# SemiSmartStorage
SemiSmartStorage is an approach to implement a lightweight way to keep track of inventories, e.g. in a household's fridges, fridge-freezers and store rooms.
It is often hard to stay on top of things, thus lots of food and consumables are superfluously bought several times.
On the one hand it may waste space and energy to store them, on the other hand it can lead to several groceries going off.

However, it is easy to keep all the items in your different storages in mind, if you keep a list of them.
But honestly, this is an annoying job, especially because you need to update the list after each buying and every time you consume an item.
SemiSmartStorage should be a simple tool which makes this task more enjoyable.

## Concept
### Storage
Each storage is represented by a single list.

Storage |
---|
name: string |
items: array |

### Item
There are two possible ways to manage items.

On the one hand one could allow to type in arbitrary item names.
The main advantage is the flexibility, as literally any item can be described by a label chosen by the user.
But this may lead to inconsistent naming and and unwanted duplicates.
For example both "Water bottle" and "Bottle of water" perfectly describe a bottle filled with water.
Unfortunately the system would treat them as totally different items.
Furthermore quantities may be difficult do define.

On the other hand one could force the user to define an item first.
It is possible to add items from a list of all known items to a storage.
Of course it is annoying to create all the different items in the beginning.
But once most common items are known, adding and updating the entries becomes quicker.
Additionally quantities can be defined (and updated) once and used for all entries of this type.

As the advantages of the second approach weight harder, it is used in the application.
Unit describes the item's package size, whereas quantity counts those units.
Common units (e.g. g, Kg, L, package) are given by the system, but it is possible to alter them.

Item |
---|
name: string |
unit: enum |
quantity: float |

One could think of an optional field "boxing", which describes if the item is stored inside a bottle, bag, carton etc.. \
Saving barcodes may be a good idea if it comes to automatic product recognition.

### Unit
Units define the item's unions.
For example a package of flour weighs 500g, thus "500g" is a unit.
If one simply wants to keep track of more abstract items like steel cans with tomatoes, a unit can also be "tin".

Unit |
---|
name: string |

_Additional feature: conversion of units (relationships between units necessary)?_

## User Interface
The user interface is vertically separated into two sections.

#### Storage list
On the left side a list with all existing storages is offered.
At the bottom of the list a form for adding a new storage is offered.
It consists of a textfield for the new storage's name, and a button to add it to the list.

Storages |
--- |
Fridge |
Basement |
[textfield][Add] |

#### Storage content list
On the right side the selected storage's items are presented.
Each item is represented as a table row giving information on name, unit and quantity.
Each attribute is presented in an own column.
A forth column offers buttons to directly increase or decrease the quantity, and to edit or delete the entry.

New entries can be added using the last row as a form.
Item and unit need to be selected from a dropdown menu, and the entity is inserted by a textfield.

Name | Unit | Entity | Options
--- | --- | --- | ---
Milk | 1L | 1.8 | [-][+][Edit][Remove]
Egg | 1 piece | 7 | [-][+][Edit][Remove]
Yoghurt | 500g | 3.5 | [-][+][Edit][Remove]
[dropdown] | [dropdown] | [textfield] | [Add]

#### Unit list
A list with all available units can be seen as an extra view.
Units can directly be updated as all entries are presented as textfields.
The last entry is used to fill in a new unit.

Name | Options
--- | ---
1L | [Delete]
500g | [Delete]
tin | [Delete]
[textfield] | [Add]

#### Item list
A list with all known items is available as an extra view.
It works like the unit list, as textfields are used to update entries in place.
Units can be chosen from a dropdown menu.

Name | Unit | Options
--- | --- | ---
Milk | 1L | [Delete]
Yoghurt | 500g | [Delete]
Tomatoes | tin | [Delete]
[textfield] | [dropdown] | [Add]

## Project Structure
### Overview
The application is a *ReactApp*, so *React* and *Redux* will be used to offer a pleasant user interface.
Its build is hosted on a *raspberry pi* and served locally by an *apache2* server application.
This significantly lowers the need of complex safety mechanisms.

*Sqlite* database in combination with *PHP* is used as a lightweight API.
Both run on the same raspberry pi as the apache2, because the local application's traffic will be tiny.

Users can simply access the application by visiting a local URI and using the app inside their browser.

### Software Architecture
TODO

## Roadmap
- [x] Concrete description of main idea
- [x] Draft of concept
- [ ] Draft of project structure
  - [x] Concrete list of used technologies
  - [ ] Draft of software architecture
- [x] Init git-repository
- [x] Setup raspberry pi with needed packages
- [ ] Setup database
- [x] Create and setup React App
