import { useEffect, useState } from "react";

type User = {
  id: string;
  name: string;
};

const Friends = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchFriends = async () => {
      setLoading(true);
      const response = await fetch(`http://localhost:1573/users/${id}/friends`);
      const data = await response.json();

      setLoading(false);
      setUsers(data);
    };

    fetchFriends();
  }, [id]);


  if(loading) {
    return <div>Loading...</div>
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
