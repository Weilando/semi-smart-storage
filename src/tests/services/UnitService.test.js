import mockAxios from 'axios';
import { addUnit, deleteUnit, getAllUnits, updateNameForUnit } from "../../services/UnitService";
import { DummyUnitListShort } from '../../constants/dummyData';
import { ADD, DELETE, GET, UPDATE } from '../../constants/urlConstants';

const newName = "newUnitName";
const unitId = 42;

describe("UnitService api-tests", () => {
  beforeEach(() => {
    mockAxios.delete.mockClear();
    mockAxios.get.mockClear();
    mockAxios.post.mockClear();
    mockAxios.update.mockClear();
  });

  it("should trigger correct POST-request on add-action", async () => {
    await addUnit(newName);

    expect(mockAxios.post).toHaveBeenCalledTimes(1);
    expect(mockAxios.post).toHaveBeenCalledWith(ADD, null, {params: {type: "UNIT", name: newName}});
  });

  it("should trigger correct DELETE-request on delete-action", async () => {
    await deleteUnit(unitId);

    expect(mockAxios.delete).toHaveBeenCalledTimes(1);
    expect(mockAxios.delete).toHaveBeenCalledWith(DELETE, {params: {type: "UNIT", id: unitId}});
  });

  it("should trigger correct GET-request on get-action and receive data", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({data: DummyUnitListShort})
    );

    const result = await getAllUnits();

    expect(result).toEqual(DummyUnitListShort);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith(GET, {params: {type: 'ALL_UNITS', content: 'json'}});
  });

  it("should trigger correct POST-request on update-action", async () => {
    await updateNameForUnit(unitId, newName);

    expect(mockAxios.post).toHaveBeenCalledTimes(1);
    expect(mockAxios.post).toHaveBeenCalledWith(UPDATE, null, {params: {type: "NAME_FOR_UNIT", id: unitId, name: newName}});
  });
});
