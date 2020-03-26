import { APIConnector } from './APIConnector';
import { ADD, DELETE, GET, UPDATE } from '../constants/urlConstants';

async function addContent(itemId, unitId, quantity, storageId) {
  await APIConnector.post(ADD, null, {params: {type: "CONTENT", itemId: itemId, unitId: unitId, quantity: quantity, storageId: storageId}})
    .catch(err => console.log("An error occured while adding new content with itemId=".concat(itemId, ", unitId=", unitId, ", quantity=", quantity, "and storageId=", storageId, ":\n", err)));
}

async function decrementQuantityForContent(contentId) {
  await APIConnector.post(UPDATE, null, {params: {type: "DECREMENT_QUANTITY_FOR_CONTENT", id: contentId}})
    .catch(err => console.log("An error occured while decremeting quantity for content #".concat(contentId, ":\n", err)));
}

async function deleteContent(contentId) {
  await APIConnector.delete(DELETE, {params: {type: "CONTENT", id: contentId}})
    .catch(err => console.log("An error occured while deleting content #".concat(contentId, ":\n", err)));
}

async function getContentInStorage(storageId) {
  try {
    const { data } = await APIConnector.get(GET, {params: {type: "CONTENT_IN_STORAGE", storageId: storageId, content: "json"}});

    if(data === null) {
      return [];
    }
    return data;
  } catch (e) {
    console.log("An error occured while fetching item-list for storage #".concat(storageId, ":\n", e));
  }

  return [];
}

async function incrementQuantityForContent(contentId) {
  await APIConnector.post(UPDATE, null, {params: {type: "INCREMENT_QUANTITY_FOR_CONTENT", id: contentId}})
    .catch(err => console.log("An error occured while incremeting quantity for content #".concat(contentId, ":\n", err)));
}

async function updateQuantityForContent(quantity, contentId) {
  await APIConnector.post(UPDATE, null, {params: {type: "QUANTITY_FOR_CONTENT", id: contentId, quantity: quantity}})
    .catch(err => console.log("An error occured while updating quantity for content #".concat(contentId, ":\n", err)));
}

export { addContent, decrementQuantityForContent, deleteContent, getContentInStorage, incrementQuantityForContent, updateQuantityForContent };
