
import type { ObjectId } from "mongodb";

export type User = {
  email: string,
  _id: ObjectId,
  isAdmin: boolean
}



