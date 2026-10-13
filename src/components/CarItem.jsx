const STATUS_STYLES = {
  Available: "bg-emerald-500/15 text-emerald-300 ring-emerald-400/25",
  Service: "bg-amber-500/15 text-amber-300 ring-amber-400/25",
  Sold: "bg-slate-500/25 text-slate-400 ring-slate-500/30",
};

function CarItem({ car, onEdit, onDelete }) {
  const badgeClass = STATUS_STYLES[car.status] ?? STATUS_STYLES.Sold;

  return (
    <article className="group relative overflow-hidden rounded-xl border border-slate-700/80 bg-slate-800/50 p-5 transition duration-300 hover:border-amber-500/30 hover:bg-slate-800/80 hover:shadow-lg hover:shadow-amber-500/5">
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-amber-500/5 blur-2xl transition group-hover:bg-amber-500/10" />

      <div className="relative flex flex-wrap items-start justify-between gap-3">
        <div className="flex gap-4">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-700/80 text-xl ring-1 ring-slate-600/50"
            aria-hidden
          >
            🚗
          </div>
          <div>
            <h2 className="text-lg font-semibold tracking-tight text-white">
              {car.brand}{" "}
              <span className="font-normal text-slate-300">{car.model}</span>
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              <span className="text-slate-300">{car.year}</span>
              <span className="mx-2 text-slate-600">·</span>
              {Number(car.mileage).toLocaleString("en-US")} km
            </p>
          </div>
        </div>

        <span
          className={`inline-flex shrink-0 items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset ${badgeClass}`}
        >
          {car.status}
        </span>
      </div>

      <div className="relative mt-4 flex flex-wrap gap-2 border-t border-slate-700/60 pt-4">
        <button
          type="button"
          className="rounded-lg border border-slate-600 bg-slate-700/50 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-700 active:scale-[0.98]"
          onClick={() => onEdit(car)}
        >
          Edit
        </button>
        <button
          type="button"
          className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-300 transition hover:border-red-500/50 hover:bg-red-500/20 active:scale-[0.98]"
          onClick={() => onDelete(car)}
        >
          Delete
        </button>
      </div>
    </article>
  );
}

export default CarItem;
