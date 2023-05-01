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