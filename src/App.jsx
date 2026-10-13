import { useState, useEffect } from "react";
import CarForm from "./components/CarForm.jsx";
import CarList from "./components/CarList.jsx";

const STORAGE_KEY = "cars";

const DEMO_CARS = [
  { id: 1, brand: "BMW", model: "320d", year: 2020, mileage: 85000, status: "Available" },
  { id: 2, brand: "Audi", model: "A4", year: 2019, mileage: 120000, status: "Service" },
  { id: 3, brand: "Volkswagen", model: "Golf", year: 2017, mileage: 150000, status: "Sold" },
];

function loadCars() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const cars = JSON.parse(saved);
      if (Array.isArray(cars)) {
        return cars;
      }
    }
  } catch {
    // ignore invalid data and fall back to demo cars
  }
  return DEMO_CARS;
}

function App() {
  const [cars, setCars] = useState(loadCars);
  const [formCar, setFormCar] = useState(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cars));
  }, [cars]);

  function handleSave(car) {
    if (car.id) {
      setCars(cars.map((c) => (c.id === car.id ? car : c)));
    } else {
      setCars([...cars, { ...car, id: Date.now() }]);
    }
    setFormCar(null);
  }

  function handleDelete(car) {
    if (window.confirm(`Delete ${car.brand} ${car.model}?`)) {
      setCars(cars.filter((c) => c.id !== car.id));
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,_#80808012_1px,_transparent_1px),linear-gradient(to_bottom,_#80808012_1px,_transparent_1px)] bg-size-[24px_24px]" />

      <div className="relative mx-auto max-w-2xl px-4 py-10 sm:px-6">
        <header className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400/90">
            Inventory
          </p>
          <h1 className="mt-1 bg-linear-to-r from-white to-slate-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
            Car Garage
          </h1>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-400">
            Manage your fleet — add, edit, and track every vehicle in one place.
          </p>
        </header>

        <main className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-6 shadow-2xl shadow-black/40 backdrop-blur-sm sm:p-8">
          {formCar ? (
            <CarForm
              key={formCar.id || "new"}
              car={formCar}
              onSave={handleSave}
              onCancel={() => setFormCar(null)}
            />
          ) : (
            <button
              type="button"
              className="group inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-amber-500 to-orange-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/25 transition hover:from-amber-400 hover:to-orange-400 hover:shadow-amber-500/40 active:scale-[0.98]"
              onClick={() => setFormCar({})}
            >
              <span className="text-lg leading-none transition group-hover:rotate-90">+</span>
              Add Car
            </button>
          )}

          <CarList cars={cars} onEdit={setFormCar} onDelete={handleDelete} />
        </main>

        <p className="mt-6 text-center text-xs text-slate-600">
          {cars.length} {cars.length === 1 ? "vehicle" : "vehicles"} in garage
        </p>
      </div>
    </div>
  );
}

export default App;
