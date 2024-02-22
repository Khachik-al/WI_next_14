export type InvitationPlacesCardType = {
  src: string;
  invitation_name: string;
  time: string;
  place_name: string;
  place_address: string;
  place_address_url: string;
};

export enum PlacesNames {
  wedding_ceremony = 'wedding_ceremony',
  wedding_party = 'wedding_party',
}

export type PlacesAddressUrlType = {
  [key in PlacesNames]: string;
};

export const placesNames: PlacesNames[] = [PlacesNames.wedding_ceremony, PlacesNames.wedding_party];
export const specialPlacesNames: PlacesNames[] = [
  PlacesNames.wedding_ceremony,
  PlacesNames.wedding_party,
] as const;

export const places_address_urls: Partial<PlacesAddressUrlType> = {
  wedding_ceremony: 'https://tigran-mariam.wedding/hy',
  wedding_party: 'https://tigran-mariam.wedding/hy',
};
