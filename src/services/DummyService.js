import { DummyItemList, DummyStorageContent, DummyStorageList, DummyUnitList } from '../constants/dummyData';

class DummyService {
  constructor() {
    this.itemList = DummyItemList;
    this.storageContents = [];
    this.storageList = DummyStorageList;
    this.unitList = DummyUnitList;

    for(let i=0; i<this.storageList.length; i++) {
      this.storageContents.push(DummyStorageContent);
    }

    this.getAllItems = this.getAllItems.bind(this);
    this.getAllStorages = this.getAllStorages.bind(this);
    this.getAllItemsInStorage = this.getAllItemsInStorage.bind(this);
    this.getAllUnits = this.getAllUnits.bind(this);
    this.addItem = this.addItem.bind(this);
    this.addItemToStorage = this.addItemToStorage.bind(this);
    this.addStorage = this.addStorage.bind(this);
    this.addUnit = this.addUnit.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.deleteItemFromStorage = this.deleteItemFromStorage.bind(this);
    this.deleteStorage = this.deleteStorage.bind(this);
    this.deleteUnit = this.deleteUnit.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.updateStorage = this.updateStorage.bind(this);
    this.updateUnit = this.updateUnit.bind(this);
    this.updateQuantityForItemInStorage = this.updateQuantityForItemInStorage.bind(this);
    this.decrementQuantityForItemInStorage = this.decrementQuantityForItemInStorage.bind(this);
    this.incrementQuantityForItemInStorage = this.incrementQuantityForItemInStorage.bind(this);
  }

  getAllItems() {
    console.log('Fetch item-list.');
    return this.itemList;
  }

  getAllItemsInStorage(storageId) {
    console.log('Fetch content of storage #'.concat(storageId, '.'));
    const index = this.storageList.findIndex(x => x.id === storageId);
    return this.storageContents[index];
  }

  getAllStorages() {
    console.log('Fetch storage-list.');
    return this.storageList;
  }

  getAllUnits() {
    console.log('Fetch unit-list.');
    return this.unitList;
  }

  addItem(name) {
    console.log('Add new item: '.concat(name));
    this.itemList.push({id: this.itemList[this.itemList.length-1].id+1, name: name});
  }

  addItemToStorage(itemId, unitId, quantity, storageId) {
    console.log('Add item #'.concat(itemId, ' with quantity ', quantity, ' and unit #', unitId, ' to storage #', storageId, '.'));

    const corrStoInd = this.storageList.findIndex(x => x.id === storageId);
    const currSto = this.storageContents[corrStoInd].slice();

    const newItem = {
      id: currSto[currSto.length-1].id+1,
      name: this.itemList.find(x => x.id === itemId).name,
      unit: this.unitList.find(x => x.id === unitId).name,
      quantity: quantity
    };

    currSto.push(newItem);
    this.storageContents[corrStoInd] = currSto;
  }

  addStorage(name) {
    console.log('Add new storage: '.concat(name));
    this.storageList.push({id: this.storageList[this.storageList.length-1].id+1, name: name});
    this.storageContents.push([]);
  }

  addUnit(name) {
    console.log('Add new unit: '.concat(name));
    this.unitList.push({id: this.unitList[this.unitList.length-1].id+1, name: name});
  }

  deleteItem(deleteId) {
    console.log('Delete item: #'.concat(deleteId));
    const deletedIndex = this.itemList.findIndex(x => x.id === deleteId);
    this.itemList.splice(deletedIndex, 1);
  }

  deleteItemFromStorage(deleteId, storageId) {
    console.log('Delete item #'.concat(deleteId, ' from storage #', storageId, '.'));
    const currStoInd = this.storageList.findIndex(x => x.id === storageId);
    const currSto = this.storageContents[currStoInd].slice();

    const deletedIndex = currSto.findIndex(x => x.id === deleteId);
    currSto.splice(deletedIndex, 1);
    this.storageContents[currStoInd] = currSto;
  }

  deleteStorage(deleteId) {
    console.log('Delete storage: #'.concat(deleteId));
    const deletedIndex = this.storageList.findIndex(x => x.id === deleteId);
    this.storageList.splice(deletedIndex, 1);
    this.storageContents.splice(deletedIndex, 1);
  }

  deleteUnit(deleteId) {
    console.log('Delete unit: #'.concat(deleteId));
    const deletedIndex = this.unitList.findIndex(x => x.id === deleteId);
    this.unitList.splice(deletedIndex, 1);
  }

  updateItem(updateId, newName) {
    console.log('Update item #'.concat(updateId, ': new name is ', newName));
    let updatedIndex = this.itemList.findIndex(x => x.id === updateId);
    this.itemList[updatedIndex].name = newName;
  }

  updateStorage(updateId, newName) {
    console.log('Update storage #'.concat(updateId, ': new name is ', newName));
    let updatedIndex = this.storageList.findIndex(x => x.id === updateId);
    this.storageList[updatedIndex].name = newName;
  }

  updateQuantityForItemInStorage(updateId, quantity, storageId) {
    console.log('Update quantity for item #'.concat(updateId, ' from storage #', storageId, ' to', quantity, '.'));
    const currStoInd = this.storageList.findIndex(x => x.id === storageId);
    const currSto = this.storageContents[currStoInd].slice();

    const updatedIndex = currSto.findIndex(x => x.id === updateId);
    currSto[updatedIndex].quantity = quantity;
    this.storageContents[currStoInd] = currSto;
  }

  incrementQuantityForItemInStorage(updateId, storageId) {
    console.log('Increment quantity for item #'.concat(updateId, ' from storage #', storageId, '.'));
    const currStoInd = this.storageList.findIndex(x => x.id === storageId);
    const currSto = this.storageContents[currStoInd].slice();

    const updatedIndex = currSto.findIndex(x => x.id === updateId);
    currSto[updatedIndex].quantity++;
    this.storageContents[currStoInd] = currSto;
  }

  decrementQuantityForItemInStorage(updateId, storageId) {
    console.log('Increment quantity for item #'.concat(updateId, ' from storage #', storageId, '.'));
    const currStoInd = this.storageList.findIndex(x => x.id === storageId);
    const currSto = this.storageContents[currStoInd].slice();

    const updatedIndex = currSto.findIndex(x => x.id === updateId);
    currSto[updatedIndex].quantity--;
    this.storageContents[currStoInd] = currSto;
  }

  updateUnit(updateId, newName) {
    console.log('Update unit #'.concat(updateId, ': new name is ', newName));
    let updatedIndex = this.unitList.findIndex(x => x.id === updateId);
    this.unitList[updatedIndex].name = newName;
  }
}

export default DummyService;
