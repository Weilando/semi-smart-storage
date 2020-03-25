import { DummyItemList, DummyStorageContent, DummyStorageList, DummyUnitList } from '../constants/dummyData';

class DummyService {
  constructor() {
    this.itemList = DummyItemList;
    this.storageContents = [];
    this.storageList = DummyStorageList;
    this.unitList = DummyUnitList;
    this.lastContent = DummyStorageContent[DummyStorageContent.length-1].id;
    this.lastItem = DummyItemList[DummyItemList.length-1].id;
    this.lastStorage = DummyStorageList[DummyStorageList.length-1].id;
    this.lastUnit = DummyUnitList[DummyUnitList.length-1].id;

    this.storageContents.push(DummyStorageContent);
    for(let i=1; i<this.storageList.length; i++) {
      this.storageContents.push([]);
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
    this.deleteContent = this.deleteContent.bind(this);
    this.deleteStorage = this.deleteStorage.bind(this);
    this.deleteUnit = this.deleteUnit.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.updateStorage = this.updateStorage.bind(this);
    this.updateUnit = this.updateUnit.bind(this);
    this.updateQuantityForContent = this.updateQuantityForContent.bind(this);
    this.decrementQuantityForContent = this.decrementQuantityForContent.bind(this);
    this.incrementQuantityForContent = this.incrementQuantityForContent.bind(this);
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
    this.itemList.push({id: ++this.lastItem, name: name});
  }

  addItemToStorage(itemId, unitId, quantity, storageId) {
    console.log('Add item #'.concat(itemId, ' with quantity ', quantity, ' and unit #', unitId, ' to storage #', storageId, '.'));

    const corrStoInd = this.storageList.findIndex(x => x.id === storageId);
    const currSto = this.storageContents[corrStoInd].slice();

    const newContent = {
      id: ++this.lastContent,
      name: this.itemList.find(x => x.id === itemId).name,
      unit: this.unitList.find(x => x.id === unitId).name,
      quantity: quantity
    };

    currSto.push(newContent);
    this.storageContents[corrStoInd] = currSto;
  }

  addStorage(name) {
    console.log('Add new storage: '.concat(name));
    this.storageList.push({id: ++this.lastStorage, name: name});
    this.storageContents.push([]);
  }

  addUnit(name) {
    console.log('Add new unit: '.concat(name));
    this.unitList.push({id: ++this.lastUnit, name: name});
  }

  deleteItem(deleteId) {
    console.log('Delete item: #'.concat(deleteId));
    const deletedIndex = this.itemList.findIndex(x => x.id === deleteId);
    this.itemList.splice(deletedIndex, 1);
  }

  deleteContent(deleteId) {
    console.log('Delete content: #'.concat(deleteId));

    for(let i=0; i<this.storageContents.length; i++) {
      const currSto = this.storageContents[i].slice();
      const deletedIndex = currSto.findIndex(x => x.id === deleteId);
      if(deletedIndex !== -1) {
        currSto.splice(deletedIndex, 1);
        this.storageContents[i] = currSto;
        return;
      }
    }
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

  updateQuantityForContent(quantity, updateId) {
    console.log('Update quantity for content #'.concat(updateId, ' to', quantity, '.'));

    for(let i=0; i<this.storageContents.length; i++) {
      const currSto = this.storageContents[i].slice();
      const updatedIndex = currSto.findIndex(x => x.id === updateId);
      if(updatedIndex !== -1) {
        currSto[updatedIndex].quantity = quantity;
        this.storageContents[i] = currSto;
        return;
      }
    }
  }

  incrementQuantityForContent(updateId) {
    console.log('Increment quantity for item #'.concat(updateId, '.'));

    for(let i=0; i<this.storageContents.length; i++) {
      const currSto = this.storageContents[i].slice();
      const updatedIndex = currSto.findIndex(x => x.id === updateId);
      if(updatedIndex !== -1) {
        currSto[updatedIndex].quantity++;
        this.storageContents[i] = currSto;
        return;
      }
    }
  }

  decrementQuantityForContent(updateId) {
    console.log('Decrement quantity for item #'.concat(updateId, '.'));

    for(let i=0; i<this.storageContents.length; i++) {
      const currSto = this.storageContents[i].slice();
      const updatedIndex = currSto.findIndex(x => x.id === updateId);
      if(updatedIndex !== -1) {
        currSto[updatedIndex].quantity--;
        this.storageContents[i] = currSto;
        return;
      }
    }
  }

  updateUnit(updateId, newName) {
    console.log('Update unit #'.concat(updateId, ': new name is ', newName));
    let updatedIndex = this.unitList.findIndex(x => x.id === updateId);
    this.unitList[updatedIndex].name = newName;
  }
}

export default DummyService;
