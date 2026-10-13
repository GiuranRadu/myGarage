import { useState } from "react";

const STATUSES = ["Available", "Service", "Sold"];

const fieldClass =
  "mt-1.5 block w-full rounded-lg border border-slate-600 bg-slate-950/50 px-3 py-2.5 text-slate-100 placeholder:text-slate-500 transition focus:border-amber-500/50 box-border";

function CarForm({ car, onSave, onCancel }) {
  const [brand, setBrand] = useState(car.brand || "");
  const [model, setModel] = useState(car.model || "");
  const [year, setYear] = useState(car.year ?? "");
  const [mileage, setMileage] = useState(car.mileage ?? "");
  const [status, setStatus] = useState(car.status || "Available");

  function handleSubmit(e) {
    e.preventDefault();
    onSave({
      ...car,
      brand: brand.trim(),
      model: model.trim(),
      year: Number(year),
      mileage: Number(mileage),
      status,
    });
  }

  return (
    <form
      className="mb-8 rounded-xl border border-amber-500/20 bg-slate-800/40 p-5 shadow-inner shadow-black/20 sm:p-6"
      onSubmit={handleSubmit}
    >
      <h2 className="text-lg font-semibold text-white">
        {car.id ? "Edit vehicle" : "New vehicle"}
      </h2>
      <p className="mt-1 text-sm text-slate-400">Fill in the details below.</p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-300 sm:col-span-1">
          Brand
          <input
            className={fieldClass}
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            placeholder="e.g. BMW"
            required
          />
        </label>

        <label className="block text-sm font-medium text-slate-300 sm:col-span-1">
          Model
          <input
            className={fieldClass}
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="e.g. 320d"
            required
          />
        </label>

        <label className="block text-sm font-medium text-slate-300">
          Year
          <input
            className={fieldClass}
            type="number"
            min="1900"
            max="2100"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </label>

        <label className="block text-sm font-medium text-slate-300">
          Mileage (km)
          <input
            className={fieldClass}
            type="number"
            min="0"
            value={mileage}
            onChange={(e) => setMileage(e.target.value)}
            required
          />
        </label>

        <label className="block text-sm font-medium text-slate-300 sm:col-span-2">
          Status
          <select className={fieldClass} value={status} onChange={(e) => setStatus(e.target.value)}>
            {STATUSES.map((s) => (
              <option key={s} value={s} className="bg-slate-900">
                {s}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <button
          type="submit"
          className="rounded-lg bg-linear-to-r from-amber-500 to-orange-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-md shadow-amber-500/20 transition hover:from-amber-400 hover:to-orange-400 active:scale-[0.98]"
        >
          Save
        </button>
        <button
          type="button"
          className="rounded-lg border border-slate-600 px-5 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-slate-700/50 active:scale-[0.98]"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default CarForm;
