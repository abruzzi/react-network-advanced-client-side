import { get } from "./utils";
import { Feed, User, UserDetail } from "./types";

export async function getUserDetail(id: string) {
  return await get<UserDetail>(`/users/${id}/details`);
}

export async function getFriends(id: string) {
  return await get<User[]>(`/users/${id}/friends`);
}

export async function getUser(id: string) {
  return await get<User>(`/users/${id}`);
}

export async function getFeeds(category: string) {
  return await get<Feed[]>(`/articles/${category}`);
}
