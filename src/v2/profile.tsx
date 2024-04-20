import { useEffect, useState } from "react";
import { Friends } from "./friends.tsx";
import { get } from "../utils.ts";
import { About } from "./about.tsx";
import { User } from "../types.ts";

type ProfileState = {
  user: User;
  friends: User[];
};

const getProfileData = async (id: string) =>
  Promise.all([
    get<User>(`/users/${id}`),
    get<User[]>(`/users/${id}/friends`),
  ]);

const useProfileData = (id: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [profileState, setProfileState] = useState<ProfileState | undefined>();
  const fetchProfileState = async () => {
    try {
      setLoading(true);
      const [user, friends] = await getProfileData(id);
      setProfileState({ user, friends });
    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    profileState,
    fetchProfileState,
  };
};

const Profile = ({ id }: { id: string }) => {
  const { loading, error, profileState, fetchProfileState } =
    useProfileData(id);

  useEffect(() => {
    fetchProfileState();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong...</div>;
  }

  return (
    <>
      {profileState?.user && <About user={profileState?.user} />}
      <Friends users={profileState?.friends ?? []} />
    </>
  );
};

export { Profile };
