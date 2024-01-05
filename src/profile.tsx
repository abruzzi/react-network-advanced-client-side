import { useEffect, useState } from "react";
import { Friends } from "./friends.tsx";
import { Feeds } from "./feeds.tsx";

type User = {
  id: string;
  name: string;
  avatar?: string;
  bio: string;
  interests: string[];
};

const About = ({ user }: { user: User }) => {
  return (
    <div className="flex flex-row gap-2 pb-4 items-center">
      <div>
        <img
          src={user.avatar ?? "/juntao.qiu.avatar.png"}
          alt={`User ${user.name} Avatar`}
          className="w-12 h-12 rounded-full"
        />
      </div>
      <div>
        <div className="text-2xl font-bold">{user.name}</div>
        <p className="text-xs">{user.bio}</p>
      </div>
    </div>
  );
};

const Profile = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User | undefined>();

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const response = await fetch(`http://localhost:1573/users/${id}`);
      const data = await response.json();

      setLoading(false);
      setUser(data);
    };

    fetchUser();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {user && <About user={user} />}
      <Friends id={id} />
      {user && <Feeds category={user.interests[0]} />}
    </>
  );
};

export { Profile };
