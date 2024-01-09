import { User } from "../types";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import { Brief } from "./brief.tsx";

import UserDetailCard from "./user-detail-card.tsx";

export const Friend = ({ user }: { user: User }) => {
  return (
    <Popover placement="bottom" showArrow offset={10}>
      <PopoverTrigger>
        <button className="flex flex-col items-center" tabIndex={0}>
          <Brief user={user} />
        </button>
      </PopoverTrigger>
      <PopoverContent className="max-w-[240px] min-w-[200px] max-h-40 min-h-32">
        <UserDetailCard id={user.id} />
      </PopoverContent>
    </Popover>
  );
};
