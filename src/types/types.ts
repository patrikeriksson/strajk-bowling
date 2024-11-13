export type BookingRequest = {
  when: string;
  lanes: number;
  people: number;
  shoes: number[];
};

export type BookingConfirmation = {
  when: string;
  lanes: number;
  people: number;
  shoes: number[];
  price: number;
  id: string;
  active: boolean;
};
