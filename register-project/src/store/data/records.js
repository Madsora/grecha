import { RecordPlaceOfStorage, RecordType } from "models";
import { usersData } from "./users";

export const recordsData = [
  {
    fullName: "Клименко Ярослав",
    taxNumber: "2863454",
    placeOfLiving: "Київ, провулок Ковальский 5",
    dateOfBirth: new Date(20, 12, 1977),
    placeOfBirth: "Ukraine", // if no time of birth
    placeOfStorage: `${RecordPlaceOfStorage.LAWYER} Клименко Ярослава`,
    recordType: RecordType.WILL,
    certifiedBy: usersData[0], // for type === (спадковий договір);
    placeOfCertifying: "Київ, провулок Ковальский 15",
    dateOfCertifying: new Date(),

    // optional
    specialBlankNumber: "АВ-5648564",
    notarialActionRegisterNumber: "4567895443",
  },
];
