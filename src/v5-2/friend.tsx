"use client";

import { User } from "../types";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import React, { Suspense } from "react";
import { Brief } from "./brief.tsx";
import { preload } from "swr";
import { getUserDetail } from "../api.ts";

const UserDetailCard = React.lazy(() => import("./user-detail-card.tsx"));

export const Friend = ({ user }: { user: User }) => {
  const handleMouseEnter = () => {
    preload(`/user/${user.id}/details`, () => getUserDetail(user.id));
  };

  return (
    <Popover placement="bottom" showArrow offset={10}>
      <PopoverTrigger>
        <button
          className="flex flex-col items-center"
          tabIndex={0}
          onMouseEnter={handleMouseEnter}
        >
          <Brief user={user} />
        </button>
      </PopoverTrigger>
      <PopoverContent className="max-w-[240px] min-w-[200px] max-h-40 min-h-32">
        <Suspense fallback={<div>Loading...</div>}>
          <UserDetailCard id={user.id} />
        </Suspense>
      </PopoverContent>
    </Popover>
  );
};
