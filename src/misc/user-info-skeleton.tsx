import { AboutSkeleton } from "./about-skeleton";
import { FriendsSkeleton } from "./friends-skeleton.tsx";

const UserInfoSkeleton = () => {
  return (
    <>
      <AboutSkeleton />
      <FriendsSkeleton />
    </>
  );
};

export { UserInfoSkeleton };
