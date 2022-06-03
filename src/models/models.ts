export type Task = {
  value: string;
  completed: boolean;
};

export type Service = {
  name: string;
  price: number;
  isChosen: boolean;
};

const services: Service[] = [
  {
    name: "Cleaning",
    price: 20,
    isChosen: false,
  },
  {
    name: "Dishwashing",
    price: 50,
    isChosen: false,
  },
  {
    name: "Cooking",
    price: 40,
    isChosen: false,
  },
  {
    name: "Greeting",
    price: 10,
    isChosen: false,
  },
];

export const getServices = () => [...services];

export default Task;
