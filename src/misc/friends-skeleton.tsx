function FriendsSkeleton() {
  return (
    <div className="pt-6 animate-pulse">
      <h2 className="text-lg text-slate-900 tracking-wider w-12 h-3 bg-slate-200 rounded" />
      <div className="flex flex-row pt-4 gap-6">
        {[1, 2, 3].map((user) => (
          <div key={user} className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-slate-300" />
            <span className="text-xs w-12 h-2 text-slate-700 bg-slate-200 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}

export { FriendsSkeleton };
