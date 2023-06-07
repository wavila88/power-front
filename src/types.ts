export type CountryType = {
 countryId: RegexValidation<number>,
 countryName: RegexValidation<string>
};

/**
 * Using Generics for validation
 */
export type RegexValidation<T> = {
  element: T
  isInvalid: boolean,
  feedBack: string
};

export type CountriesType = Array<{
  countryId: string,
  countryName: string
}>;


export type GrantersType = {
  index?: number
  fullName: RegexValidation<string>,
  documentType: RegexValidation<string>,
  documentNumber: RegexValidation<string>
};

export type EventTargetType = React.ChangeEvent<HTMLInputElement>

export type AditionalDetailsType = {
  city: RegexValidation<string>,
  singDate: RegexValidation<Date|null>
}

export type InfoPersonType = {
  name: string,
  idType: string,
  idNumber: string,
}

export type ReportType = {
  powerDetails: string,
  ubication: string,
  city: string,
  date:string,
  granters: Array<InfoPersonType>,
  lawRepresentatives: Array<InfoPersonType>,
}

export type  AppState = {
  PowerReducer: {
    country: string;
    // Otros campos de PowerReducer si los hay
  };
  // Otros reducers o campos de estado si los hay
}

export type DocumentType = {
  abreviatura: string;
  name: string;
}