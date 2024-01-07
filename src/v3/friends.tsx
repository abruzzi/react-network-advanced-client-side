import { User } from "../types.ts";

const Friends = ({ users }: { users: User[] }) => {
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
