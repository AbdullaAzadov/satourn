export interface ITourCard {
  id: string;
  imgSrc: string;
  hotelName: string;
  rating: number;
  city: string;
  conveniences: string[];
  roomConveniences: string[];
  foodType: string;
  roomType: string;
  flights: {
    outbound: IFlightSegment;
    return: IFlightSegment;
  };
  price: number;
  currency: string;
}

export interface IFlightSegment {
  departureCity: string;
  arrivalCity: string;
  departureTime: string;
  arrivalTime: string;
  tariff: string;
  travelClass: string;
}
