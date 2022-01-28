import { User } from './user.model';

export interface Post {
  _id?: string;
  description?: string;
  imageURL?: string;
  createdDate?: string;
  userId?: string;
  categoryName?: string;
  user?: User;
}
