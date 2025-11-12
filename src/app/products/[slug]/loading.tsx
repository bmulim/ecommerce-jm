export default function ProductDetailLoading() {
  return (
    <div className="min-h-screen bg-black pt-20 pb-12 md:pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Skeleton */}
        <div className="mb-8 animate-pulse">
          <div className="h-4 w-64 rounded bg-zinc-800/30"></div>
        </div>

        {/* Product Detail Skeleton */}
        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Image Gallery Skeleton */}
          <div className="animate-pulse space-y-4">
            <div className="aspect-square w-full rounded-2xl border border-zinc-800/50 bg-zinc-900/30"></div>
            <div className="grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg border border-zinc-800/50 bg-zinc-800/30"
                ></div>
              ))}
            </div>
          </div>

          {/* Product Info Skeleton */}
          <div className="animate-pulse space-y-6">
            <div className="space-y-3">
              <div className="h-4 w-24 rounded bg-zinc-800/50"></div>
              <div className="h-8 w-full rounded bg-zinc-800/50"></div>
              <div className="h-6 w-32 rounded bg-zinc-800/30"></div>
            </div>

            <div className="h-12 w-48 rounded-lg bg-zinc-800/50"></div>

            <div className="space-y-3">
              <div className="h-4 w-full rounded bg-zinc-800/30"></div>
              <div className="h-4 w-full rounded bg-zinc-800/30"></div>
              <div className="h-4 w-3/4 rounded bg-zinc-800/30"></div>
            </div>

            <div className="flex gap-4">
              <div className="h-12 w-32 rounded-lg bg-zinc-800/40"></div>
              <div className="h-12 flex-1 rounded-lg bg-zinc-800/50"></div>
            </div>

            <div className="h-12 w-full rounded-lg bg-zinc-800/40"></div>
          </div>
        </div>

        {/* Tabs Skeleton */}
        <div className="mb-16 animate-pulse">
          <div className="mb-6 flex gap-4">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="h-10 w-32 rounded-lg bg-zinc-800/40"
              ></div>
            ))}
          </div>
          <div className="space-y-3">
            <div className="h-4 w-full rounded bg-zinc-800/30"></div>
            <div className="h-4 w-full rounded bg-zinc-800/30"></div>
            <div className="h-4 w-5/6 rounded bg-zinc-800/30"></div>
          </div>
        </div>

        {/* Related Products Skeleton */}
        <div className="animate-pulse">
          <div className="mb-8 h-8 w-64 rounded-lg bg-zinc-800/50"></div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border border-zinc-800/50 bg-zinc-900/30"
              >
                <div className="h-64 bg-zinc-800/30"></div>
                <div className="space-y-3 p-6">
                  <div className="h-4 w-20 rounded bg-zinc-800/50"></div>
                  <div className="h-6 w-full rounded bg-zinc-800/50"></div>
                  <div className="h-8 w-24 rounded bg-zinc-800/50"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
