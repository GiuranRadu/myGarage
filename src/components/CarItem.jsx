function CarItem({ car, onEdit, onDelete }) {
  return (
    <div className="car-item">
      <h2>
        {car.brand} {car.model}
      </h2>
      <p>
        {car.year} | {Number(car.mileage).toLocaleString("en-US")} km
      </p>
      <p>Status: {car.status}</p>
      <div className="buttons">
        <button onClick={() => onEdit(car)}>Edit</button>
        <button onClick={() => onDelete(car)}>Delete</button>
      </div>
    </div>
  );
}

export default CarItem;
