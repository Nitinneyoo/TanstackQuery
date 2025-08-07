// types.ts

export interface Task {
  id: number;
  task: string;
  status: string;
  due: string;
  notes: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

export interface Fruit {
  id: number;
  name: string;
}
