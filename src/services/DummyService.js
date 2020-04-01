import { DummyItemList, DummyStorageContent, DummyStorageList, DummyUnitList } from '../constants/dummyData';

class DummyService {
  constructor() {
    this.debug = false;
    this.itemList = DummyItemList.slice();
    this.storageContents = [];
    this.storageList = DummyStorageList.slice();
    this.unitList = DummyUnitList.slice();
    this.lastContent = DummyStorageContent[DummyStorageContent.length-1].id;
    this.lastItem = DummyItemList[DummyItemList.length-1].id;
    this.lastStorage = DummyStorageList[DummyStorageList.length-1].id;
    this.lastUnit = DummyUnitList[DummyUnitList.length-1].id;

    this.storageContents.push(DummyStorageContent.slice());
    for(let i=1; i<this.storageList.length; i++) {
      this.storageContents.push([]);
    }

    this.addContent = this.addContent.bind(this);
    this.addItem = this.addItem.bind(this);
    this.addStorage = this.addStorage.bind(this);
    this.addUnit = this.addUnit.bind(this);
    this.decrementQuantityForContent = this.decrementQuantityForContent.bind(this);
    this.deleteContent = this.deleteContent.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.deleteStorage = this.deleteStorage.bind(this);
    this.deleteUnit = this.deleteUnit.bind(this);
    this.getAllItems = this.getAllItems.bind(this);
    this.getAllStorages = this.getAllStorages.bind(this);
    this.getAllUnits = this.getAllUnits.bind(this);
    this.getContentInStorage = this.getContentInStorage.bind(this);
    this.incrementQuantityForContent = this.incrementQuantityForContent.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.updateStorage = this.updateStorage.bind(this);
    this.updateUnit = this.updateUnit.bind(this);
    this.updateQuantityForContent = this.updateQuantityForContent.bind(this);

    this.getUpdateStorageAndIndex = this.getUpdateStorageAndIndex.bind(this);
  }

  // add-operations
  addContent(itemId, unitId, quantity, storageId) {
    if(this.debug) console.log('Add item #'.concat(itemId, ' with quantity ', quantity, ' and unit #', unitId, ' to storage #', storageId, '.'));

    const corrStoInd = this.storageList.findIndex(x => x.id === storageId);
    const currSto = this.storageContents[corrStoInd].slice();

    const newContent = {
      id: ++this.lastContent,
      item: this.itemList.find(x => x.id === itemId).name,
      unit: this.unitList.find(x => x.id === unitId).name,
      quantity: quantity
    };

    currSto.push(newContent);
    this.storageContents[corrStoInd] = currSto;
  }

  addItem(name) {
    if(this.debug) console.log('Add new item: '.concat(name));
    const newItemList = this.itemList.slice();
    newItemList.push({id: ++this.lastItem, name: name})
    this.itemList = newItemList;
  }

  addStorage(name) {
    if(this.debug) console.log('Add new storage: '.concat(name));
    const newStorageList = this.storageList.slice();
    const newStorageContents = this.storageContents.slice();
    newStorageList.push({id: ++this.lastStorage, name: name});
    newStorageContents.push([]);
    this.storageList = newStorageList;
    this.storageContents = newStorageContents;
  }

  addUnit(name) {
    if(this.debug) console.log('Add new unit: '.concat(name));
    const newUnitList = this.unitList.slice();
    newUnitList.push({id: ++this.lastUnit, name: name});
    this.unitList = newUnitList;
  }

  // delete-operations
  deleteContent(deleteId) {
    if(this.debug) console.log('Delete content: #'.concat(deleteId));
    const toDelete = this.getUpdateStorageAndIndex(deleteId);
    toDelete.storage.splice(toDelete.contentIndex, 1);
    this.storageContents[toDelete.storageIndex] = toDelete.storage;
  }

  deleteItem(deleteId) {
    if(this.debug) console.log('Delete item: #'.concat(deleteId));
    const deletedIndex = this.itemList.findIndex(x => x.id === deleteId);
    this.itemList.splice(deletedIndex, 1);
  }

  deleteStorage(deleteId) {
    if(this.debug) console.log('Delete storage: #'.concat(deleteId));
    const deletedIndex = this.storageList.findIndex(x => x.id === deleteId);
    this.storageList.splice(deletedIndex, 1);
    this.storageContents.splice(deletedIndex, 1);
  }

  deleteUnit(deleteId) {
    if(this.debug) console.log('Delete unit: #'.concat(deleteId));
    const deletedIndex = this.unitList.findIndex(x => x.id === deleteId);
    this.unitList.splice(deletedIndex, 1);
  }

  // get-operations
  getAllItems() {
    if(this.debug) console.log('Fetch item-list.');
    return this.itemList;
  }

  getAllStorages() {
    if(this.debug) console.log('Fetch storage-list.');
    return this.storageList;
  }

  getAllUnits() {
    if(this.debug) console.log('Fetch unit-list.');
    return this.unitList;
  }

  getContentInStorage(storageId) {
    if(this.debug) console.log('Fetch content of storage #'.concat(storageId, '.'));
    const index = this.storageList.findIndex(x => x.id === storageId);
    return this.storageContents[index];
  }

  // update-operations
  decrementQuantityForContent(updateId) {
    if(this.debug) console.log('Decrement quantity for item #'.concat(updateId, '.'));
    const toUpdate = this.getUpdateStorageAndIndex(updateId);
    toUpdate.storage[toUpdate.contentIndex].quantity--;
    this.storageContents[toUpdate.storageIndex] = toUpdate.storage;
  }

  incrementQuantityForContent(updateId) {
    if(this.debug) console.log('Increment quantity for item #'.concat(updateId, '.'));
    const toUpdate = this.getUpdateStorageAndIndex(updateId);
    toUpdate.storage[toUpdate.contentIndex].quantity++;
    this.storageContents[toUpdate.storageIndex] = toUpdate.storage;
  }

  updateItem(updateId, newName) {
    if(this.debug) console.log('Update item #'.concat(updateId, ': new name is ', newName));
    let updatedIndex = this.itemList.findIndex(x => x.id === updateId);
    this.itemList[updatedIndex].name = newName;
  }

  updateQuantityForContent(quantity, updateId) {
    if(this.debug) console.log('Update quantity for content #'.concat(updateId, ' to', quantity, '.'));
    const toUpdate = this.getUpdateStorageAndIndex(updateId);
    toUpdate.storage[toUpdate.contentIndex].quantity = quantity;
    this.storageContents[toUpdate.storageIndex] = toUpdate.storage;
  }

  updateStorage(updateId, newName) {
    if(this.debug) console.log('Update storage #'.concat(updateId, ': new name is ', newName));
    let updatedIndex = this.storageList.findIndex(x => x.id === updateId);
    this.storageList[updatedIndex].name = newName;
  }

  updateUnit(updateId, newName) {
    if(this.debug) console.log('Update unit #'.concat(updateId, ': new name is ', newName));
    const updatedIndex = this.unitList.findIndex(x => x.id === updateId);
    this.unitList[updatedIndex].name = newName;
  }

  // helpers
  getUpdateStorageAndIndex(updateId) {
    for(let currStoInd=0; currStoInd<this.storageContents.length; currStoInd++) {
      const currSto = this.storageContents[currStoInd].slice();
      const currConInd = currSto.findIndex(x => x.id === updateId);
      if(currConInd !== -1) {
        return {storage: currSto.slice(), storageIndex: currStoInd, contentIndex: currConInd};
      }
    }
  }
}

export default DummyService;
