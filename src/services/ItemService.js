import { APIConnector } from './APIConnector';
import { ADD, DELETE, GET, UPDATE } from '../constants/urlConstants';

async function addItem(name) {
  await APIConnector.post(ADD, null, {params: {type: "ITEM", name: name}})
    .catch(err => console.log("An error occured while adding new item \"".concat(name, "\":\n", err)));
}

async function deleteItem(id) {
  await APIConnector.delete(DELETE, {params: {type: "ITEM", id: id}})
    .catch(err => console.log("An error occured while deleting item #".concat(id, ":\n", err)));
}

async function getAllItems() {
  try {
    const { data } = await APIConnector.get(GET, {params: {type: "ALL_ITEMS", content: "json"}});

    if(data === null) {
      return [];
    }
    return data;
  } catch (e) {
    console.log("An error occured while fetching item-list.");
  }

  return [];
}

async function updateNameForItem(id, name) {
  await APIConnector.post(UPDATE, null, {params: {type: "NAME_FOR_ITEM", id: id, name: name}})
    .catch(err => console.log("An error occured while updating name for item #".concat(id, ":\n", err)));
}

export { addItem, deleteItem, getAllItems, updateNameForItem };
