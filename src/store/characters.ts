import type { ObjectId } from 'mongodb';

export type User = {
  email: string;
  _id: ObjectId;
  isAdmin: boolean;
};

export type Character = {
  _id?: ObjectId;
  id: string;
  name: string;
  actor: string;
  description: string;
  total_episodes: number | string;
  photo: string;
  url: string;
};
