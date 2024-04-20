import { useCallback, useEffect, useState } from "react";
import { Friends } from "./friends.tsx";
import { get } from "../utils.ts";
import { About } from "./about.tsx";

import type { User } from "../types.ts";

type ProfileData = {
  user: User;
  friends: User[];
};

const useProfileData = (id: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [profileState, setProfileState] = useState<ProfileData>();

  const fetchProfileState = useCallback(async () => {
    try {
      setLoading(true);
      const [user, friends] = await Promise.all([
        get<User>(`/users/${id}`),
        get<User[]>(`/users/${id}/friends`),
      ]);
      setProfileState({
        user,
        friends,
      });
    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  }, [id]);

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
  }, [fetchProfileState]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong...</div>;
  }

  return (
    <>
      {profileState && (
        <>
          <About user={profileState.user} />
          <Friends users={profileState.friends} />
        </>
      )}
    </>
  );
};

export { Profile };
