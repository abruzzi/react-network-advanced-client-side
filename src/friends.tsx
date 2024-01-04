import { useEffect, useState } from "react";

type User = {
  id: string;
  name: string;
};

const Friends = ({ id }: { id: string }) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchFriends = async () => {
      const response = await fetch(`http://localhost:1573/users/${id}/friends`);
      const data = await response.json();

      setUsers(data);
    };

    fetchFriends();
  }, [id]);

  return (
    <>
      <h2 className="text-lg text-slate-800">Friends</h2>
      <div className="flex flex-row py-4 gap-4">
        {users.map((user) => (
          <div className="flex flex-col items-center">
            <img
              src={`https://i.pravatar.cc/150?u=${user.id}`}
              alt={`User ${user.name} avatar`}
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm">{user.name}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export { Friends };
