import { RecordPlaceOfStorage, RecordType, UserField } from "models";

export const recordsData = [
  {
    [UserField.fullName]: "Клименко Ярослав",
    [UserField.taxNumber]: "2863454",
    [UserField.placeOfLiving]: "Київ, провулок Ковальский 5",
    [UserField.dateOfBirth]: new Date(20, 12, 1977),
    [UserField.placeOfBirth]: "Ukraine", // if no time of birth
    [UserField.placeOfStorage]: `${RecordPlaceOfStorage.LAWYER} Клименко Ярослава`,
    [UserField.recordType]: RecordType.WILL,
    [UserField.certifiedBy]:
      "Нотаріальна контора Бондаренко Г.А, Рильский переулок, 10/3, тел. 0(66)901-43-13", // for type === (спадковий договір);
    [UserField.placeOfCertifying]: "Київ, провулок Ковальский 15",
    [UserField.dateOfCertifying]: new Date(),

    // optional
    [UserField.specialBlankNumber]: "АВ-5648564",
    [UserField.notarialActionRegisterNumber]: "4567895443",
  },
];
