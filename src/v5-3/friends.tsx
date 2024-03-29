import { User } from "../types.ts";
import React, { Suspense } from "react";
import { FriendSkeleton } from "../misc/friend-skeleton.tsx";

const Friend = React.lazy(() => import("./friend.tsx"));

const Friends = ({ users }: { users: User[] }) => {
  return (
    <div className="py-4">
      <h2 className="text-lg text-slate-900 tracking-wider">Friends</h2>
      <div className="flex flex-row pt-4 gap-4">
        {users.map((user) => (
          <Suspense fallback={<FriendSkeleton />} key={user.id}>
            <Friend user={user} />
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export { Friends };
