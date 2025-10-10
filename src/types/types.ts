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


export interface Habit {
  id?: string
  title?: string
  description?: string
  completed?: boolean
  frequency?: 'daily' | 'weekly' | 'monthly'
  name?: string
  createdAt?: string
  completedDates?: string[]
}
