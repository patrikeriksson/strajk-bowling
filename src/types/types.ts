export type RequestData = {
  when: string;
  lanes: number;
  people: number;
  shoes: number[];
};

export type ResponseData = {
  when: string;
  lanes: number;
  people: number;
  shoes: number[];
  price: number;
  id: string;
  active: boolean;
};
