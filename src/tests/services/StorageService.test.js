import mockAxios from 'axios';
import { addStorage, deleteStorage, getAllStorages, updateNameForStorage } from "../../services/StorageService";
import { DummyStorageListShort } from '../../constants/dummyData';
import { ADD, DELETE, GET, UPDATE } from '../../constants/urlConstants';

const newName = "newUnitName";
const storageId = 42;

describe("StorageService api-tests", () => {
  beforeEach(() => {
    mockAxios.delete.mockClear();
    mockAxios.get.mockClear();
    mockAxios.post.mockClear();
    mockAxios.update.mockClear();
  });

  it("should trigger correct POST-request on add-action", async () => {
    await addStorage(newName);

    expect(mockAxios.post).toHaveBeenCalledTimes(1);
    expect(mockAxios.post).toHaveBeenCalledWith(ADD, null, {params: {type: "STORAGE", name: newName}});
  });

  it("should trigger correct DELETE-request on delete-action", async () => {
    await deleteStorage(storageId);

    expect(mockAxios.delete).toHaveBeenCalledTimes(1);
    expect(mockAxios.delete).toHaveBeenCalledWith(DELETE, {params: {type: "STORAGE", id: storageId}});
  });

  it("should trigger correct GET-request on get-action and receive data", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({data: DummyStorageListShort})
    );

    const result = await getAllStorages();

    expect(result).toEqual(DummyStorageListShort);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith(GET, {params: {type: 'ALL_STORAGES', content: 'json'}});
  });

  it("should trigger correct POST-request on update-action", async () => {
    await updateNameForStorage(storageId, newName);

    expect(mockAxios.post).toHaveBeenCalledTimes(1);
    expect(mockAxios.post).toHaveBeenCalledWith(UPDATE, null, {params: {type: "NAME_FOR_STORAGE", id: storageId, name: newName}});
  });
});
