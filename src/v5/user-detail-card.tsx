import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { UserDetail } from "../types.ts";
import { get } from "../utils.ts";

export function UserDetailCard({ id }: { id: string }) {
  const [loading, setLoading] = useState<boolean>(false);
  const [detail, setDetail] = useState<UserDetail | undefined>();

  useEffect(() => {
    const fetchFeeds = async () => {
      setLoading(true);
      const data = await get<UserDetail>(`/users/${id}/details`);

      setLoading(false);
      setDetail(data);
    };

    fetchFeeds();
  }, [id]);

  if (loading || !detail) {
    return <div>Loading...</div>;
  }

  return (
    <Card shadow="none" className="max-w-[300px] border-none bg-transparent">
      <CardHeader className="justify-between">
        <div className="flex gap-3">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src={`https://i.pravatar.cc/150?u=${detail.id}`}
          />
          <div className="flex flex-col items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {detail.name}
            </h4>
            <p className="text-small tracking-tight text-default-500">
              {detail.twitter}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0">
        <p className="text-small pl-px text-default-500">{detail.bio}</p>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-600 text-small">
            <a href={detail.homepage}>{detail.homepage}</a>
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}

export default UserDetailCard;
