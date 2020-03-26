# Roadmap
## Planning
- [x] Concrete description of main idea
- [x] Draft of concept
- [x] Draft of project structure
  - [x] Concrete list of used technologies
  - [x] Description of software architecture
- [x] Init git-repository
- [x] Setup raspberry pi with needed packages
- [x] Setup database
- [x] Create and setup React App
- [x] Installation instructions

## API (via PHP)
- [x] Create end point offering stored information
- [x] Create end point offering an interface to add new entries to the database
- [x] Create end point offering an interface to update entries in the database
- [x] Create end point offering an interface to delete entries from the database

## Basic styled Front-end
- [x] Create a stylesheet for the following views
- [x] Create a header view
- [x] Create main view showing a storage-selector on the left and the selected storage's entries on the right
- [x] Create a StorageSelector component
- [x] Create a StorageView component
- [x] Create components for general, item- and unit-settings

## StorageSelector component
- [x] Show existing storages
  - [x] Fetch existing storages via Axios
  - [x] Create a component based on list items showing the fetched storages
  - [x] Add on-click recognition to enable toggling StorageView's content
  - [x] Extend stylesheet to show hover and highlight actually chosen storage
- [x] Enable adding new storages
  - [x] Add component offering a textfield (for the name) and a button (for adding the new storage)
  - [x] Extend API to create new storages inside the database
  - [x] Use button to trigger API-request to add the new storage and clear the textfield afterwards
- [x] Enable editing and deleting storages
  - [x] Add modal for editing
  - [x] Extend API to alter and delete storages inside the database
  - [x] Trigger API-requests to alter or delete storages and update the view afterwards

## StorageView component
- [x] Show existing items
  - [x] Fetch all items in the storage selected in the StorageSelector component
  - [x] Create a component based on list items showing the fetched items
- [x] Enable adding new storages
  - [x] Add component offering two dropdown-menus (for name and unit), a textfield (for entity) and a button (for adding the new item)
  - [x] Extend API to create new items inside the database (related to the chosen storage)
  - [x] Use button to trigger API-request to add the new item and clear the input-fields afterwards
- [x] Enable editing and deleting items
  - [x] Extend view-cells as shown in the documentation
  - [x] Extend API to alter and delete items inside the database
  - [x] Trigger corresponding API-requests to alter or delete items and update the view afterwards

## SettingsView component
- [x] Add settings-buttons for general, item- and unit-settings to header
- [x] Show modal if active
- [x] Option for editing available item names
- [x] Option for editing available units
- [x] Add option to switch click-dummy on/off

## Ideas
- [ ] Load-animations
- [ ] Support of mobile-devices
- [ ] Several themes
- [ ] Reset button (restore factory settings)
- [ ] Filter to sort results
- [ ] Tags for items to mark classes like "Drinks" or "Vegetables"
- [ ] E-Mail-alerts on low quantities (maybe insecure)
- [ ] Add option to set href to backend (persistence maybe difficult)
