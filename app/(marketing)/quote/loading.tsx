export default function QuoteLoading() {
  return (
    <div className="section container max-w-2xl" aria-busy="true" aria-label="Loading quote form…">
      <div className="animate-pulse space-y-6">
        {/* Step indicator skeleton */}
        <div className="flex justify-center gap-4 mb-8">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="flex flex-col items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-edge" />
              <div className="h-3 w-14 rounded bg-edge" />
            </div>
          ))}
        </div>
        {/* Form skeleton */}
        {[1, 2, 3].map((n) => (
          <div key={n} className="space-y-2">
            <div className="h-4 w-24 rounded bg-edge" />
            <div className="h-11 w-full rounded-xl bg-edge" />
          </div>
        ))}
        <div className="h-11 w-full rounded-xl bg-brand/20" />
      </div>
    </div>
  );
}
