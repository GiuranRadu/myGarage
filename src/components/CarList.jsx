import CarItem from "./CarItem.jsx";

function CarList({ cars, onEdit, onDelete }) {
  if (cars.length === 0) {
    return <p>No cars in the garage.</p>;
  }

  return (
    <div className="car-list">
      {cars.map((car) => (
        <CarItem key={car.id} car={car} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default CarList;
