import { User } from "../types.ts";
import { Friend } from "./friend.tsx";

const Friends = ({ users }: { users: User[] }) => {
  return (
    <div className="py-4">
      <h2 className="text-lg text-slate-900 tracking-wider">Friends</h2>
      <div className="flex flex-row pt-4 gap-4">
        {users.map((user) => (
          <Friend user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export { Friends };
