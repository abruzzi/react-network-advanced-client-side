import { Suspense, useEffect, useState } from "react";
import { Friends } from "./friends.tsx";
import { get } from "../utils.ts";
import { About } from "./about.tsx";
import { User } from "../types.ts";

const useUser = (id: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [user, setUser] = useState<User | undefined>();

  const fetchUser = async () => {
    try {
      setLoading(true);
      const data = await get<User>(`/users/${id}`);
      setUser(data);
    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    user,
    fetchUser,
  };
};

const Profile = ({ id }: { id: string }) => {
  const { loading, error, user, fetchUser } = useUser(id);

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong...</div>;
  }

  return (
    <>
      {user && <About user={user} />}
      <Suspense fallback={<div>Loading...</div>}>
        <Friends id={id} />
      </Suspense>
    </>
  );
};

export { Profile };
