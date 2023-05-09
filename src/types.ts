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
