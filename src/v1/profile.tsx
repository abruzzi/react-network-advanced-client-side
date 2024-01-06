import { useEffect, useState } from "react";
import { Friends } from "./friends.tsx";
import { get } from "../utils.ts";
import { About } from "./about.tsx";
import { User } from "../types.ts";

const Profile = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [user, setUser] = useState<User | undefined>();

  useEffect(() => {
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

    fetchUser();
  }, [id]);

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong...</div>;
  }

  console.log(loading);
  console.log(error);

  return (
    <>
      {user && <About user={user} />}
      <Friends id={id} />
    </>
  );
};

export { Profile };
