export default function PickupLoading() {
  return (
    <div aria-busy="true" aria-label="Loading pickup page…">
      {/* Hero */}
      <div className="bg-gradient-to-br from-brand-dark to-brand py-20 md:py-28">
        <div className="container max-w-3xl animate-pulse space-y-4">
          <div className="h-4 w-32 rounded bg-white/20" />
          <div className="h-12 w-2/3 rounded bg-white/20" />
          <div className="h-6 w-1/2 rounded bg-white/20" />
          <div className="flex gap-3">
            <div className="h-12 w-36 rounded-xl bg-white/20" />
            <div className="h-12 w-36 rounded-xl bg-white/10" />
          </div>
        </div>
      </div>

      {/* Info cards */}
      <div className="section container">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 animate-pulse">
          {[1, 2, 3].map((n) => (
            <div key={n} className="rounded-2xl border border-edge bg-card p-6 space-y-3">
              <div className="h-8 w-8 rounded bg-edge" />
              <div className="h-5 w-3/4 rounded bg-edge" />
              <div className="space-y-2">
                {[1, 2].map((i) => <div key={i} className="h-4 w-full rounded bg-edge" />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
