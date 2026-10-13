import CarItem from "./CarItem.jsx";

function CarList({ cars, onEdit, onDelete }) {
  if (cars.length === 0) {
    return (
      <div className="mt-8 rounded-xl border border-dashed border-slate-600/80 bg-slate-800/30 px-6 py-12 text-center">
        <p className="text-3xl opacity-40" aria-hidden>
          🏁
        </p>
        <p className="mt-3 font-medium text-slate-300">No cars in the garage</p>
        <p className="mt-1 text-sm text-slate-500">Add your first vehicle to get started.</p>
      </div>
    );
  }

  return (
    <div className="mt-8 space-y-4">
      <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Fleet</h2>
      <ul className="space-y-3">
        {cars.map((car) => (
          <li key={car.id}>
            <CarItem car={car} onEdit={onEdit} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CarList;
