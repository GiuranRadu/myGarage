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
  // null = form hidden, {} = adding a new car, car object = editing
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
    <div className="app">
      <h1>Car Garage</h1>

      {formCar ? (
        <CarForm
          key={formCar.id || "new"}
          car={formCar}
          onSave={handleSave}
          onCancel={() => setFormCar(null)}
        />
      ) : (
        <button onClick={() => setFormCar({})}>Add Car</button>
      )}

      <CarList cars={cars} onEdit={setFormCar} onDelete={handleDelete} />
    </div>
  );
}

export default App;
