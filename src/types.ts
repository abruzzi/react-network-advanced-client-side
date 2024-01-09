export type User = {
  id: string;
  name: string;
  avatar?: string;
  bio: string;
  interests: string[];
};
export type Feed = {
  id: string;
  title: string;
  description: string;
};
export type UserDetail = {
  id: string;
  name: string;
  bio: string;
  twitter: string;
  homepage: string;
};