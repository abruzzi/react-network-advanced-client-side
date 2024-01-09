import {User} from "../types.ts";

export function Brief({user}: { user: User }) {
  return (
    <div className="flex flex-row gap-2 pb-2 items-center">
      <div>
        <img
          src={`https://i.pravatar.cc/150?u=${user.id}`}
          alt={`User ${user.name} avatar`}
          className="w-8 h-8 rounded-full"
          width={32}
          height={32}
        />
      </div>
      <div className="text-left">
        <div className="text-base font-bold">{user.name}</div>
        <p className="text-xs">{user.bio}</p>
      </div>
    </div>
  );
}