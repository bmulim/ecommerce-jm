export default function ProductsLoading() {
  return (
    <div className="min-h-screen bg-black pt-20 pb-12 md:pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Skeleton */}
        <div className="mb-8 animate-pulse">
          <div className="mb-4 h-10 w-64 rounded-lg bg-zinc-800/50"></div>
          <div className="h-4 w-96 rounded-lg bg-zinc-800/30"></div>
        </div>

        {/* Filters and Products Grid */}
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Sidebar Filters Skeleton */}
          <div className="w-full animate-pulse lg:w-64">
            <div className="space-y-6 rounded-2xl border border-zinc-800/50 bg-zinc-900/30 p-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="space-y-3">
                  <div className="h-5 w-32 rounded bg-zinc-800/50"></div>
                  <div className="space-y-2">
                    {[...Array(3)].map((_, j) => (
                      <div
                        key={j}
                        className="h-4 w-full rounded bg-zinc-800/30"
                      ></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Products Grid Skeleton */}
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse overflow-hidden rounded-2xl border border-zinc-800/50 bg-zinc-900/30"
                >
                  {/* Image placeholder */}
                  <div className="h-64 bg-zinc-800/30"></div>

                  {/* Content placeholder */}
                  <div className="space-y-3 p-6">
                    <div className="h-4 w-20 rounded bg-zinc-800/50"></div>
                    <div className="h-6 w-full rounded bg-zinc-800/50"></div>
                    <div className="h-4 w-32 rounded bg-zinc-800/30"></div>
                    <div className="h-8 w-24 rounded bg-zinc-800/50"></div>
                    <div className="h-10 w-full rounded-lg bg-zinc-800/40"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
