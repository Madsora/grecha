import { RecordType, UserField } from "models";

const INITIAL_STATE = {};

Object.keys(UserField).forEach((fieldName) => {
  if (fieldName === UserField.recordType) {
    INITIAL_STATE[fieldName] = RecordType.WILL;
    return;
  }
  INITIAL_STATE[fieldName] = null;
});

export { INITIAL_STATE };
