import { useState } from "react";

const STATUSES = ["Available", "Service", "Sold"];

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
    <form className="car-form" onSubmit={handleSubmit}>
      <h2>{car.id ? "Edit Car" : "Add Car"}</h2>

      <label>
        Brand
        <input value={brand} onChange={(e) => setBrand(e.target.value)} required />
      </label>

      <label>
        Model
        <input value={model} onChange={(e) => setModel(e.target.value)} required />
      </label>

      <label>
        Year
        <input
          type="number"
          min="1900"
          max="2100"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        />
      </label>

      <label>
        Mileage
        <input
          type="number"
          min="0"
          value={mileage}
          onChange={(e) => setMileage(e.target.value)}
          required
        />
      </label>

      <label>
        Status
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          {STATUSES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </label>

      <div className="buttons">
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default CarForm;
