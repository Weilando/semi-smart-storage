// api-operations
const AddMode = {
  ITEM_LIST: 0, STORAGE_LIST: 1, STORAGE_CONTENT: 2, UNIT_LIST: 3
}

const DeleteMode = {
  ITEM_LIST: 0, STORAGE_LIST: 1, STORAGE_CONTENT: 2, UNIT_LIST: 3
}

const FetchMode = {
  ITEM_LIST: 0, STORAGE_LIST: 1, STORAGE_CONTENT: 2, UNIT_LIST: 3
}

const UpdateMode = {
  ITEM_LIST: 0,
  STORAGE_LIST: 1,
  STORAGE_CONTENT_DECREMENT: 2,
  STORAGE_CONTENT_INCREMENT: 3,
  STORAGE_CONTENT_EDIT: 4,
  UNIT_LIST: 5
}

// modal-modes
const ModalMode = {
  ITEM: "item",
  STORAGE: "storage",
  UNIT: "unit"
}

export { AddMode, DeleteMode, FetchMode, UpdateMode, ModalMode };
