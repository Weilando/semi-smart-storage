import { APIConnector } from './APIConnector';
import { ADD, DELETE, GET, UPDATE } from '../constants/urlConstants';

async function addUnit(name) {
  await APIConnector.post(ADD, null, {params: {type: "UNIT", name: name}})
    .catch(err => console.log("An error occured while adding new unit \"".concat(name, "\":\n", err)));
}

async function deleteUnit(id) {
  await APIConnector.delete(DELETE, {params: {type: "UNIT", id: id}})
    .catch(err => console.log("An error occured while deleting unit #".concat(id, ":\n", err)));
}

async function getAllUnits() {
  try {
    const { data } = await APIConnector.get(GET, {params: {type: "ALL_UNITS", content: "json"}});

    if(data === null) {
      return [];
    }
    return data;
  } catch (e) {
    console.log("An error occured while fetching unit-list.");
  }

  return [];
}

async function updateNameForUnit(id, name) {
  await APIConnector.post(UPDATE, null, {params: {type: "NAME_FOR_UNIT", id: id, name: name}})
    .catch(err => console.log("An error occured while updating name for unit #".concat(id, ":\n", err)));
}

export { addUnit, deleteUnit, getAllUnits, updateNameForUnit };
