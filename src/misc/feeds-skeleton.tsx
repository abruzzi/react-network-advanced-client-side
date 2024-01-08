function FeedsSkeleton() {
  return (
    <div className="py-4 animate-pulse">
      <h2 className="text-lg text-slate-900 tracking-wider w-16 h-4 bg-slate-100 rounded" />
      <div className="flex flex-col py-4 gap-2">
        {[1, 2].map((feed) => (
          <div key={feed} className="flex flex-col gap-4">
            <h3 className="text-xs max-w-[512px] h-2 bg-slate-200 rounded" />
            <div className="flex flex-col gap-2">
              <p className="text-xs bg-slate-100 max-w-[640px] h-2 rounded" />
              <p className="text-xs bg-slate-100 max-w-[600px] h-2 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { FeedsSkeleton };
