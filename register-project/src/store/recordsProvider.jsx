import React, { useContext, useState } from "react";
import { RecordPlaceOfStorage, RecordType, UserField } from "models";

export const initialRecordsData = [
  {
    [UserField.id]: 0,
    [UserField.fullName]: "Клименко Ярослав",
    [UserField.taxNumber]: "2863454",
    [UserField.placeOfLiving]: "Київ, провулок Ковальский 5",
    [UserField.dateOfBirth]: new Date(20, 12, 1977),
    [UserField.placeOfBirth]: "Ukraine",
    [UserField.placeOfStorage]: `${RecordPlaceOfStorage.LAWYER} Клименко Ярослава`,
    [UserField.recordType]: RecordType.WILL,
    [UserField.certifiedBy]:
      "Нотаріальна контора Бондаренко Г.А, Рильский переулок, 10/3, тел. 0(66)901-43-13",
    [UserField.placeOfCertifying]: "Київ, провулок Ковальский 15",
    [UserField.dateOfCertifying]: new Date(),

    // optional
    [UserField.specialBlankNumber]: "АВ-5648564",
    [UserField.notarialActionRegisterNumber]: "4567895443",
  },
  {
    [UserField.id]: 1,
    [UserField.fullName]: "Сватко Іван",
    [UserField.taxNumber]: "2863454",
    [UserField.placeOfLiving]: "Київ, провулок Ковальский 5",
    [UserField.dateOfBirth]: new Date(20, 12, 1977),
    [UserField.placeOfBirth]: "Ukraine",
    [UserField.placeOfStorage]: `${RecordPlaceOfStorage.LAWYER} Клименко Ярослава`,
    [UserField.recordType]: RecordType.WILL,
    [UserField.certifiedBy]:
      "Нотаріальна контора Бондаренко Г.А, Рильский переулок, 10/3, тел. 0(66)901-43-13",
    [UserField.placeOfCertifying]: "Київ, провулок Ковальский 15",
    [UserField.dateOfCertifying]: new Date(),

    // optional
    [UserField.specialBlankNumber]: "АВ-5648564",
    [UserField.notarialActionRegisterNumber]: "4567895443",
  },
  {
    [UserField.id]: 2,
    [UserField.fullName]: "Сидоренко Михайло",
    [UserField.taxNumber]: "3563346",
    [UserField.placeOfLiving]: "Київ, провулок Ковальский 5",
    [UserField.dateOfBirth]: new Date(20, 12, 1977),
    [UserField.placeOfBirth]: "Ukraine",
    [UserField.placeOfStorage]: `${RecordPlaceOfStorage.LAWYER} Клименко Ярослава`,
    [UserField.recordType]: RecordType.WILL,
    [UserField.certifiedBy]:
      "Нотаріальна контора Бондаренко Г.А, Рильский переулок, 10/3, тел. 0(66)901-43-13",
    [UserField.placeOfCertifying]: "Київ, провулок Ковальский 15",
    [UserField.dateOfCertifying]: new Date(),

    // optional
    [UserField.specialBlankNumber]: "АВ-5648564",
    [UserField.notarialActionRegisterNumber]: "4567895443",
  },
  {
    [UserField.id]: 3,
    [UserField.fullName]: "Петренко Петро",
    [UserField.taxNumber]: "1865554",
    [UserField.placeOfLiving]: "Київ, провулок Ковальский 5",
    [UserField.dateOfBirth]: new Date(11, 10, 1978),
    [UserField.placeOfBirth]: "Ukraine",
    [UserField.placeOfStorage]: `${RecordPlaceOfStorage.LAWYER} Клименко Ярослава`,
    [UserField.recordType]: RecordType.WILL,
    [UserField.certifiedBy]:
      "Нотаріальна контора Бондаренко Г.А, Рильский переулок, 10/3, тел. 0(66)901-43-13",
    [UserField.placeOfCertifying]: "Київ, провулок Ковальский 15",
    [UserField.dateOfCertifying]: new Date(),

    // optional
    [UserField.specialBlankNumber]: "АВ-5648564",
    [UserField.notarialActionRegisterNumber]: "4567895443",
  },
  {
    [UserField.id]: 4,
    [UserField.fullName]: "Іванов Іван",
    [UserField.taxNumber]: "4572454",
    [UserField.placeOfLiving]: "Київ, провулок Ковальский 5",
    [UserField.dateOfBirth]: new Date(13, 9, 1988),
    [UserField.placeOfBirth]: "Ukraine",
    [UserField.placeOfStorage]: `${RecordPlaceOfStorage.LAWYER} Клименко Ярослава`,
    [UserField.recordType]: RecordType.WILL,
    [UserField.certifiedBy]:
      "Нотаріальна контора Бондаренко Г.А, Рильский переулок, 10/3, тел. 0(66)901-43-13",
    [UserField.placeOfCertifying]: "Київ, провулок Ковальский 15",
    [UserField.dateOfCertifying]: new Date(),
    // optional
    [UserField.specialBlankNumber]: "АВ-5648564",
    [UserField.notarialActionRegisterNumber]: "4567895443",
  },
];

const RecordsContext = React.createContext({
  recordsData: initialRecordsData,
  setRecordsData: () => {},
});

const useRecordsContext = () => useContext(RecordsContext);

const useProvideRecordsContext = () => {
  const [recordsData, setRecordsData] = useState(initialRecordsData);

  return {
    recordsData,
    setRecordsData,
  };
};

const RecordsContextProvider = ({ children }) => {
  const authData = useProvideRecordsContext();

  return (
    <RecordsContext.Provider value={authData}>
      {children}
    </RecordsContext.Provider>
  );
};

export { RecordsContextProvider, useRecordsContext };
