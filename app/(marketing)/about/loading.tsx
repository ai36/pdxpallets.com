export default function AboutLoading() {
  return (
    <div aria-busy="true" aria-label="Loading about page…">
      {/* Hero */}
      <div className="bg-gradient-to-br from-brand-dark to-brand py-20 md:py-28">
        <div className="container max-w-2xl text-center animate-pulse space-y-4">
          <div className="h-12 w-1/2 mx-auto rounded bg-white/20" />
          <div className="h-6 w-3/4 mx-auto rounded bg-white/20" />
        </div>
      </div>

      {/* Story section */}
      <div className="section container max-w-3xl animate-pulse space-y-4">
        <div className="h-8 w-48 rounded bg-edge" />
        <div className="space-y-2">
          {[1, 2, 3].map((n) => <div key={n} className="h-4 w-full rounded bg-edge" />)}
        </div>
      </div>

      {/* Team cards */}
      <div className="section bg-subtle">
        <div className="container">
          <div className="h-8 w-40 rounded bg-edge mb-8 animate-pulse" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 animate-pulse">
            {[1, 2, 3].map((n) => (
              <div key={n} className="rounded-2xl border border-edge bg-card p-6 space-y-3">
                <div className="h-10 w-10 rounded-full bg-edge" />
                <div className="h-5 w-3/4 rounded bg-edge" />
                <div className="h-4 w-1/2 rounded bg-edge" />
                <div className="space-y-2">
                  {[1, 2].map((i) => <div key={i} className="h-4 w-full rounded bg-edge" />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Milestones */}
      <div className="section container max-w-3xl animate-pulse space-y-4">
        <div className="h-8 w-48 rounded bg-edge" />
        {[1, 2, 3, 4].map((n) => (
          <div key={n} className="flex gap-4">
            <div className="h-6 w-12 rounded bg-edge shrink-0" />
            <div className="h-6 w-full rounded bg-edge" />
          </div>
        ))}
      </div>
    </div>
  );
}
