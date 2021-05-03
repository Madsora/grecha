export const RecordType = {
  WILL: "Заповіт",
  COUPLE_WILL: "Заповіт подружжя",
  SECRET_WILL: "Секретний заповіт",
  AGREEMENT: "спадковий договір",
  COUPLE_AGREEMENT: "Спадковий договір з участю подружжя",
};

export const RecordPlaceOfStorage = {
  LAWYER: "У юриста -",
  WILLER: "В учасника -",
};

export const UserObligatoryField = {
  fullName: "fullName",
  taxNumber: "taxNumber",
  dateOfBirth: "dateOfBirth",
  // placeOfBirth: "placeOfBirth",
  placeOfLiving: "placeOfLiving",
  placeOfStorage: "placeOfStorage",
  recordType: "recordType",
  placeOfCertifying: "placeOfCertifying",
  dateOfCertifying: "dateOfCertifying",
};

export const UserOptionalField = {
  certifiedBy: "certifiedBy",
  specialBlankNumber: "specialBlankNumber",
  notarialActionRegisterNumber: "notarialActionRegisterNumber",
};

export const UserField = {
  ...UserObligatoryField,
  ...UserOptionalField,
};

export const UserFieldToLabel = {
  [UserField.fullName]: "ПІБ",
  [UserField.taxNumber]: "Подтаковий номер",
  [UserField.placeOfLiving]: "Місце реєстрації/проживання",
  [UserField.dateOfBirth]: "Дата народження",
  [UserField.placeOfBirth]: "Країна народження",
  [UserField.placeOfStorage]: "Місце зберігання",
  [UserField.recordType]: "Тип документу",
  [UserField.certifiedBy]: "Відомості про особу, яка посвідчила заповіт",
  [UserField.placeOfCertifying]: "Місце реєстрації",
  [UserField.dateOfCertifying]: "Дата реєстрації",

  // optional
  [UserField.specialBlankNumber]:
    "Номер у реєстрі для реєстрації нотаріальних дій",
  [UserField.notarialActionRegisterNumber]:
    "Серії та номери спеціальних бланків нотаріальних документів, на яких викладено текст заповіту",
};
