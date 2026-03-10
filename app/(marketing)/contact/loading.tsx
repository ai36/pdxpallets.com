export default function ContactLoading() {
  return (
    <div aria-busy="true" aria-label="Loading contact page…">
      {/* Hero */}
      <div className="bg-gradient-to-br from-brand-dark via-brand to-brand-light py-16 md:py-20">
        <div className="container max-w-2xl text-center animate-pulse space-y-4">
          <div className="h-12 w-1/2 mx-auto rounded bg-white/20" />
          <div className="h-6 w-3/4 mx-auto rounded bg-white/20" />
        </div>
      </div>

      <div className="section bg-page">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Form skeleton */}
            <div className="animate-pulse space-y-5">
              <div className="grid grid-cols-2 gap-5">
                {[1, 2].map((n) => (
                  <div key={n} className="space-y-1.5">
                    <div className="h-4 w-24 rounded bg-edge" />
                    <div className="h-11 w-full rounded-xl bg-edge" />
                  </div>
                ))}
              </div>
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="space-y-1.5">
                  <div className="h-4 w-24 rounded bg-edge" />
                  <div className={`w-full rounded-xl bg-edge ${n === 4 ? 'h-28' : 'h-11'}`} />
                </div>
              ))}
              <div className="h-11 w-full rounded-xl bg-brand/20" />
            </div>

            {/* Contact info skeleton */}
            <div className="animate-pulse space-y-6">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="flex gap-4">
                  <div className="h-10 w-10 rounded-xl bg-edge shrink-0" />
                  <div className="space-y-2 flex-1">
                    <div className="h-4 w-24 rounded bg-edge" />
                    <div className="h-5 w-40 rounded bg-edge" />
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
