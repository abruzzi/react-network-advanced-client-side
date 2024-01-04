import { useEffect, useState } from "react";
import { Friends } from "./friends.tsx";

type User = {
  id: string;
  name: string;
};
const Profile = ({ id }: { id: string }) => {
  const [user, setUser] = useState<User | undefined>();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`http://localhost:1573/users/${id}`);
      const data = await response.json();

      setUser(data);
    };

    fetchUser();
  }, [id]);

  return (
    <div className="rounded border p-4 border-slate-300">
      {user && <p className="text-2xl font-bold mb-4">{user.name}</p>}
      <Friends id={id} />
    </div>
  );
};

export { Profile };
