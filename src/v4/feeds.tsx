import { useEffect, useState } from "react";
import {FeedsSkeleton} from "../misc/feeds-skeleton.tsx";

type Feed = {
  id: string;
  title: string;
  description: string;
};

const Feeds = ({ category }: { category: string }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [feeds, setFeeds] = useState<Feed[]>([]);

  useEffect(() => {
    const fetchFeeds = async () => {
      setLoading(true);
      const response = await fetch(
        `http://localhost:1573/articles/${category}`
      );
      const data = await response.json();

      setLoading(false);
      setFeeds(data);
    };

    fetchFeeds();
  }, [category]);

  if (loading) {
    return <FeedsSkeleton />;
  }

  return (
    <div className="py-4">
      <h2 className="text-lg text-slate-900 tracking-wider">Your Feeds</h2>
      <div className="flex flex-col py-4 gap-2">
        {feeds.map((feed) => (
          <>
            <h3 className="">{feed.title}</h3>
            <p className="text-xs text-slate-600">{feed.description}</p>
          </>
        ))}
      </div>
    </div>
  );
};

export { Feeds };
