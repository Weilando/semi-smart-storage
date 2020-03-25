import { APIConnector } from './APIConnector';
import { ADD, DELETE, GET, UPDATE } from '../constants/urlConstants';

async function addStorage(name) {
  await APIConnector.post(ADD, null, {params: {type: "STORAGE", name: name}})
    .catch(err => console.log("An error occured while adding new storage \"".concat(name, "\":\n", err)));
}

async function deleteStorage(id) {
  await APIConnector.delete(DELETE, {params: {type: "STORAGE", id: id}})
    .catch(err => console.log("An error occured while deleting storage #".concat(id, ":\n", err)));
}

async function getAllStorages() {
  try {
    const { data } = await APIConnector.get(GET, {params: {type: "ALL_STORAGES", content: "json"}});

    if(data === null) {
      return [];
    }
    return data;
  } catch (e) {
    console.log("An error occured while fetching storage-list.");
  }

  return [];
}

async function updateNameForStorage(id, name) {
  await APIConnector.post(UPDATE, null, {params: {type: "NAME_FOR_STORAGE", id: id, name: name}})
    .catch(err => console.log("An error occured while updating name for storage #".concat(id, ":\n", err)));
}

export { addStorage, deleteStorage, getAllStorages, updateNameForStorage };
