import { Suspense } from "react";
import { Friends } from "./friends.tsx";
import { get } from "../utils.ts";
import { About } from "./about.tsx";
import { User } from "../types.ts";
import useSWR from "swr";
import { ErrorBoundary } from "react-error-boundary";

// type ProfileState = {
//   user: User;
//   friends: User[];
// };

const getProfileData = async (id: string) =>
  Promise.all([get<User>(`/users/${id}`), get<User[]>(`/users/${id}/friends`)]);

const ProfileInner = ({ id }: { id: string }) => {
  const { data } = useSWR("/api/profile", () => getProfileData(id), {
    suspense: true,
  });

  const [user, friends] = data || [{}, []];

  return (
    <>
      {user && <About user={user} />}
      <Friends users={friends ?? []} />
    </>
  );
};

const Profile = ({ id }: { id: string }) => {
  return (
    <ErrorBoundary fallback={<div>Something went wrong...</div>}>
      <Suspense fallback={<div>Loading...</div>}>
        <ProfileInner id={id} />
      </Suspense>
    </ErrorBoundary>
  );
};

export { Profile };
