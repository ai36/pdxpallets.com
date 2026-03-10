export default function FaqLoading() {
  return (
    <div aria-busy="true" aria-label="Loading FAQ…">
      {/* Hero */}
      <div className="bg-gradient-to-br from-brand-dark to-brand py-16 md:py-20">
        <div className="container max-w-2xl text-center animate-pulse space-y-4">
          <div className="h-12 w-1/2 mx-auto rounded bg-white/20" />
          <div className="h-6 w-3/4 mx-auto rounded bg-white/20" />
        </div>
      </div>

      <div className="section container max-w-3xl">
        {[1, 2, 3].map((section) => (
          <div key={section} className="mb-12 animate-pulse">
            <div className="h-7 w-48 rounded bg-edge mb-6" />
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="rounded-2xl border border-edge bg-card p-6 space-y-3">
                  <div className="h-5 w-3/4 rounded bg-edge" />
                  <div className="space-y-2">
                    {[1, 2].map((l) => <div key={l} className="h-4 w-full rounded bg-edge" />)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
