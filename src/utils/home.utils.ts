import { CountriesType } from "../types";

export const youtubeOpt = {
  height: '400',
  width: '100%',
  playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
  },
};

export const  countries : CountriesType = [
  {countryId: '1', countryName: 'Colombia'},
  {countryId: '2', countryName: 'Ecuador'},
  {countryId: '3', countryName: 'Perú'},
  {countryId: '4', countryName: 'Chile'},
  {countryId: '5', countryName: 'Argentina'},
  {countryId: '6', countryName: 'Bolivia'},
  {countryId: '7', countryName: 'Mexico'},
]

