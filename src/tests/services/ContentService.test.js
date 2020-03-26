import mockAxios from 'axios';
import { addContent, decrementQuantityForContent, deleteContent, getContentInStorage, incrementQuantityForContent, updateQuantityForContent } from "../../services/ContentService";
import { DummyStorageContentShort } from '../../constants/dummyData';
import { ADD, DELETE, GET, UPDATE } from '../../constants/urlConstants';

const contentId = 3;
const itemId = 7;
const newName = "newUnitName";
const newQuantity = 2.5;
const storageId = 42;
const unitId = 11;

describe("StorageService api-tests", () => {
  beforeEach(() => {
    mockAxios.delete.mockClear();
    mockAxios.get.mockClear();
    mockAxios.post.mockClear();
    mockAxios.update.mockClear();
  });

  it("should trigger correct POST-request on add-action", async () => {
    await addContent(itemId, unitId, newQuantity, storageId);

    expect(mockAxios.post).toHaveBeenCalledTimes(1);
    expect(mockAxios.post).toHaveBeenCalledWith(ADD, null, {params: {type: "CONTENT", itemId: itemId, unitId: unitId, quantity: newQuantity, storageId: storageId}});
  });

  it("should trigger correct POST-request on decrement-action", async () => {
    await decrementQuantityForContent(contentId);

    expect(mockAxios.post).toHaveBeenCalledTimes(1);
    expect(mockAxios.post).toHaveBeenCalledWith(UPDATE, null, {params: {type: "DECREMENT_QUANTITY_FOR_CONTENT", id: contentId}});
  });

  it("should trigger correct DELETE-request on delete-action", async () => {
    await deleteContent(contentId);

    expect(mockAxios.delete).toHaveBeenCalledTimes(1);
    expect(mockAxios.delete).toHaveBeenCalledWith(DELETE, {params: {type: "CONTENT", id: contentId}});
  });

  it("should trigger correct GET-request on get-action and receive data", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({data: DummyStorageContentShort})
    );

    const result = await getContentInStorage(storageId);

    expect(result).toEqual(DummyStorageContentShort);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith(GET, {params: {type: 'CONTENT_IN_STORAGE', storageId: storageId, content: 'json'}});
  });

  it("should trigger correct POST-request on increment-action", async () => {
    await incrementQuantityForContent(contentId);

    expect(mockAxios.post).toHaveBeenCalledTimes(1);
    expect(mockAxios.post).toHaveBeenCalledWith(UPDATE, null, {params: {type: "INCREMENT_QUANTITY_FOR_CONTENT", id: contentId}});
  });

  it("should trigger correct POST-request on update-action", async () => {
    await updateQuantityForContent(newQuantity, contentId);

    expect(mockAxios.post).toHaveBeenCalledTimes(1);
    expect(mockAxios.post).toHaveBeenCalledWith(UPDATE, null, {params: {type: "QUANTITY_FOR_CONTENT", id: contentId, quantity: newQuantity}});
  });
});
