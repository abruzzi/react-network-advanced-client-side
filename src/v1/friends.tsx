import { useEffect, useState } from "react";
import {get} from "../utils.ts";

type User = {
  id: string;
  name: string;
};

const Friends = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        setLoading(true);
        const data = await get<User[]>(`/users/${id}/friends`);
        setUsers(data);
      } catch (e) {
        setError(e as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchFriends();
  }, [id]);


  if(loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Something went wrong...</div>;
  }

  return (
    <div className="py-4">
      <h2 className="text-lg text-slate-900 tracking-wider">Friends</h2>
      <div className="flex flex-row pt-4 gap-4">
        {users.map((user) => (
          <div className="flex flex-col items-center">
            <img
              src={`https://i.pravatar.cc/150?u=${user.id}`}
              alt={`User ${user.name} avatar`}
              className="w-8 h-8 rounded-full"
            />
            <span className="text-xs text-slate-700">{user.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Friends };
