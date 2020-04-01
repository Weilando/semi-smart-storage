import DummyService from "../../services/DummyService";
import { DummyItemList, DummyStorageContent, DummyStorageList, DummyUnitList } from '../../constants/dummyData';

let dummyService = new DummyService();
const newName = "newName";

describe("Dummy-Service add-tests", () => {
  beforeEach(() => {
    dummyService = new DummyService();
  });

  it("should add new item", async () => {
    await dummyService.addItem(newName);

    const expected = DummyItemList.slice();
    expected.push({id: 6, name: newName});

    const result = await dummyService.getAllItems();
    expect(result).toEqual(expected);
  });

  it("should add new content to storage #1", async () => {
    await dummyService.addContent(3, 3, 2, 1);

    const expected = [{id: 6, item: DummyItemList[3].name, unit: DummyUnitList[3].name, quantity: 2}];

    const result = await dummyService.getContentInStorage(1);
    expect(result).toEqual(expected);
  });

  it("should add new storage", async () => {
    await dummyService.addStorage(newName);

    const expectedStorageList = DummyStorageList.slice();
    expectedStorageList.push({id: 4, name: newName});

    const resultStorageList = await dummyService.getAllStorages();
    expect(resultStorageList).toEqual(expectedStorageList);
    const resultStorageContent = await dummyService.getContentInStorage(4);
    expect(resultStorageContent).toEqual([]);
  });

  it("should add new unit", async () => {
    await dummyService.addUnit(newName);

    const expected = DummyUnitList.slice();
    expected.push({id: 4, name: newName});

    const result = await dummyService.getAllUnits();
    expect(result).toEqual(expected);
  });
});


describe("Dummy-Service delete-tests", () => {
  beforeEach(() => {
    dummyService = new DummyService();
  });

  it("should delete item #0", async () => {
    await dummyService.deleteItem(0);

    const expected = DummyItemList.slice();
    expected.splice(0, 1);

    const result = await dummyService.getAllItems();
    expect(result).toEqual(expected);
  });

  it("should delete content #0", async () => {
    await dummyService.deleteContent(0);

    const expected = DummyStorageContent.slice();
    expected.splice(0, 1);

    const result = await dummyService.getContentInStorage(0);
    expect(result).toEqual(expected);
  });

  it("should delete storage #0", async () => {
    await dummyService.deleteStorage(0);

    const expected = DummyStorageList.slice();
    expected.splice(0, 1);

    const result = await dummyService.getAllStorages();
    expect(result).toEqual(expected);
  });

  it("should delete unit #0", async () => {
    await dummyService.deleteUnit(0);

    const expected = DummyUnitList.slice();
    expected.splice(0, 1);

    const result = await dummyService.getAllUnits();
    expect(result).toEqual(expected);
  });
});


describe("Dummy-Service get-tests", () => {
  beforeEach(() => {
    dummyService = new DummyService();
  });

  it("should return correct item-list", async () => {
    const result = await dummyService.getAllItems();
    expect(result).toEqual(DummyItemList);
  });

  it("should return correct content-list for storage #0", async () => {
    const result = await dummyService.getContentInStorage(0);
    expect(result).toEqual(DummyStorageContent);
  });

  it("should return correct content-list for storage #1", async () => {
    const result = await dummyService.getContentInStorage(1);
    expect(result).toEqual([]);
  });

  it("should return correct storage-list", async () => {
    const result = await dummyService.getAllStorages();
    expect(result).toEqual(DummyStorageList);
  });

  it("should return correct unit-list", async () => {
    const result = await dummyService.getAllUnits();
    expect(result).toEqual(DummyUnitList);
  });
});


describe("Dummy-Service update-tests", () => {
  beforeEach(() => {
    dummyService = new DummyService();
  });

  it("should update name for item #0", async () => {
    await dummyService.updateItem(0, newName);

    const expected = DummyItemList.slice();
    expected.splice(0, 1, {id: 0, name: newName});

    const result = await dummyService.getAllItems();
    expect(result).toEqual(expected);
  });

  it("should decrement quantity for content #1", async () => {
    await dummyService.incrementQuantityForContent(1);

    const expected = DummyStorageContent.slice();
    const updatedContent = DummyStorageContent[1];
    updatedContent.quantity--;
    expected.splice(1, 1, updatedContent);

    const result = await dummyService.getContentInStorage(0);
    expect(result).toEqual(expected);
  });

  it("should increment quantity for content #1", async () => {
    await dummyService.incrementQuantityForContent(1);

    const expected = DummyStorageContent.slice();
    const updatedContent = DummyStorageContent[1];
    updatedContent.quantity++;
    expected.splice(1, 1, updatedContent);

    const result = await dummyService.getContentInStorage(0);
    expect(result).toEqual(expected);
  });

  it("should update quantity for content #0", async () => {
    await dummyService.updateQuantityForContent(4, 0);

    const expected = DummyStorageContent.slice();
    const updatedContent = DummyStorageContent[0];
    updatedContent.quantity = 4;
    expected.splice(0, 1, updatedContent);

    const result = await dummyService.getContentInStorage(0);
    expect(result).toEqual(expected);
  });

  it("should update name for storage #0", async () => {
    await dummyService.updateStorage(0, newName);

    const expected = DummyStorageList.slice();
    expected.splice(0, 1, {id: 0, name: newName});

    const result = await dummyService.getAllStorages();
    expect(result).toEqual(expected);
  });

  it("should update name for unit #0", async () => {
    await dummyService.updateUnit(0, newName);

    const expected = DummyUnitList.slice();
    expected.splice(0, 1, {id: 0, name: newName});

    const result = await dummyService.getAllUnits();
    expect(result).toEqual(expected);
  });
});


describe("Dummy-Service integration test", () => {
  beforeEach(() => {
    dummyService = new DummyService();
  });

  it("should add item, update unit #1, addContent to storage #1, delete item #3, increment quantity for content #1 and delete storage #3", async () => {
    await dummyService.addItem(newName);
    await dummyService.updateUnit(1, newName);
    await dummyService.addContent(3, 3, 2, 1);
    await dummyService.deleteItem(2);
    await dummyService.incrementQuantityForContent(1);
    await dummyService.deleteStorage(3);

    const expectedContent0 = DummyStorageContent.slice();
    expectedContent0[1].quantity++;
    const expectedContent1 = [{id: 6, item: DummyItemList[3].name, unit: DummyUnitList[3].name, quantity: 2}];

    const expectedItemList = DummyItemList.slice();
    expectedItemList.push({id: 6, name: newName});
    expectedItemList.splice(2, 1);

    const expectedStorageList = DummyStorageList.slice();
    expectedStorageList.splice(2, 1);

    const expectedUnitList = DummyUnitList.slice();
    expectedUnitList.splice(1, 1, {id: 1, name: newName});

    const resultContent0 = await dummyService.getContentInStorage(0);
    const resultContent1 = await dummyService.getContentInStorage(1);
    const resultItemList = await dummyService.getAllItems();
    const resultStorageList = await dummyService.getAllStorages();
    const resultUnitList = await dummyService.getAllUnits();
    expect(resultContent0).toEqual(expectedContent0);
    expect(resultContent1).toEqual(expectedContent1);
    expect(resultItemList).toEqual(expectedItemList);
    expect(resultStorageList).toEqual(expectedStorageList);
    expect(resultUnitList).toEqual(expectedUnitList);
  });
});
