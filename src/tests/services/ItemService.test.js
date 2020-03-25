import mockAxios from 'axios';
import { addItem, deleteItem, getAllItems, updateNameForItem } from "../../services/ItemService";
import { DummyItemListShort } from '../../constants/dummyData';
import { ADD, DELETE, GET, UPDATE } from '../../constants/urlConstants';

const newName = "newItemName";
const itemId = 42;

describe("ItemService api-tests", () => {
  beforeEach(() => {
    mockAxios.delete.mockClear();
    mockAxios.get.mockClear();
    mockAxios.post.mockClear();
    mockAxios.update.mockClear();
  });

  it("should trigger correct POST-request on add-action", async () => {
    await addItem(newName);

    expect(mockAxios.post).toHaveBeenCalledTimes(1);
    expect(mockAxios.post).toHaveBeenCalledWith(ADD, null, {params: {type: "ITEM", name: newName}});
  });

  it("should trigger correct DELETE-request on delete-action", async () => {
    await deleteItem(itemId);

    expect(mockAxios.delete).toHaveBeenCalledTimes(1);
    expect(mockAxios.delete).toHaveBeenCalledWith(DELETE, {params: {type: "ITEM", id: itemId}});
  });

  it("should trigger correct GET-request on get-action and receive data", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({data: DummyItemListShort})
    );

    const result = await getAllItems();

    expect(result).toEqual(DummyItemListShort);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith(GET, {params: {type: 'ALL_ITEMS', content: 'json'}});
  });

  it("should trigger correct POST-request on update-action", async () => {
    await updateNameForItem(itemId, newName);

    expect(mockAxios.post).toHaveBeenCalledTimes(1);
    expect(mockAxios.post).toHaveBeenCalledWith(UPDATE, null, {params: {type: "NAME_FOR_ITEM", id: itemId, name: newName}});
  });
});
