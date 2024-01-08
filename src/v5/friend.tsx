"use client";

import { User } from "../types";
import {
  NextUIProvider,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import React, { Suspense } from "react";

// @ts-expect-error "abc"
const UserDetailCard = React.lazy(() => import("./user-detail-card.tsx"));

function Brief({ user }: { user: User }) {
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

export const Friend = ({ user }: { user: User }) => {
  return (
    <NextUIProvider>
      <Popover placement="bottom" showArrow offset={10}>
        <PopoverTrigger>
          <button className="flex flex-col items-center" tabIndex={0}>
            <Brief user={user} />
          </button>
        </PopoverTrigger>
        <PopoverContent className="max-w-[240px] min-w-[200px] max-h-40 min-h-32">
          <Suspense fallback={<div>Loading...</div>}>
            <UserDetailCard id={user.id} />
          </Suspense>
        </PopoverContent>
      </Popover>
    </NextUIProvider>
  );
};
