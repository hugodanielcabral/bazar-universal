interface StarRatingProps {
  rating: number;
}

const FullStar = () => {
  return <span className="text-yellow-500">★</span>;
};

const HalfStar = () => {
  return <span className="text-yellow-500">⯪</span>;
};

const EmptyStar = () => {
  return <span className="text-gray-100">☆</span>;
};

export const StarRating = ({ rating }: StarRatingProps) => {

    //! 1. Hacer un floor para saber cuantas estrellas completas son.
    //! 2. Debería obtener el valor decimal y verificar si es mayor o igual a .50, entonces colocar la half star.
    //! 3. Al final, debería hacer una resta? por ejemplo, si el rating es 3, debo hacer un 3 - 5 = 2 estrellas vacías, pero también si hubo una half-star, entonces debería restar -1 al 2, quedando 1 estrella vacía.
  return (
    <div className="mx-auto text-3xl">
        {Math.floor(rating)} - {rating}
      <FullStar />
      <FullStar />
      <FullStar />
      <HalfStar />
      <EmptyStar />
    </div>
  );
};
