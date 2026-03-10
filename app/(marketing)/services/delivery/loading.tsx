export default function DeliveryLoading() {
  return (
    <div aria-busy="true" aria-label="Loading delivery page…">
      {/* Hero */}
      <div className="bg-gradient-to-br from-brand-dark to-brand py-20 md:py-28">
        <div className="container max-w-3xl animate-pulse space-y-4">
          <div className="h-4 w-32 rounded bg-white/20" />
          <div className="h-12 w-2/3 rounded bg-white/20" />
          <div className="h-6 w-1/2 rounded bg-white/20" />
        </div>
      </div>

      {/* Zone table */}
      <div className="section container animate-pulse">
        <div className="h-8 w-48 rounded bg-edge mb-6" />
        <div className="rounded-2xl border border-edge overflow-hidden">
          {[1, 2, 3, 4, 5].map((n) => (
            <div key={n} className="grid grid-cols-4 gap-4 p-4 border-b border-edge last:border-0">
              {[1, 2, 3, 4].map((c) => <div key={c} className="h-5 rounded bg-edge" />)}
            </div>
          ))}
        </div>
      </div>

      {/* Feature cards */}
      <div className="section bg-subtle">
        <div className="container">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 animate-pulse">
            {[1, 2, 3].map((n) => (
              <div key={n} className="rounded-2xl border border-edge bg-card p-6 space-y-3">
                <div className="h-8 w-8 rounded bg-edge" />
                <div className="h-5 w-3/4 rounded bg-edge" />
                <div className="h-4 w-full rounded bg-edge" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
