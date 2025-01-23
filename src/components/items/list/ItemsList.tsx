import { Link } from "react-router";
import { Product } from "../../../types/items";
import { StarRating } from "../../star/StarRating";

interface ItemsListProps {
  items: Product[] | null;
}

interface ItemCardProps {
  thumbnail: string;
  title: string;
  description: string;
  price: number;
  rating: number;
}

const ItemCard = ({
  thumbnail,
  title,
  description,
  price,
  rating,
}: ItemCardProps) => {
  return (
    <Link
      to={"#"}
      className="card bg-gray-500 hover:bg-gray-600 transition-colors ease-in-out duration-200 p-2 shadow-xl"
    >
      <figure>
        <img
          src={thumbnail}
          alt={`Thumbnail de` + title}
          className="rounded-full"
        />
      </figure>
      <StarRating rating={rating} />
      <div className="card-body">
        <h2 className="card-title text-yellow-400">{title}</h2>
        <p>{description}</p>
        <div>
          <h3>{price}$</h3>
        </div>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </Link>
  );
};

export const ItemsList = ({ items }: ItemsListProps) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {items?.map((item) => (
        <ItemCard
          thumbnail={item?.thumbnail}
          title={item?.title}
          description={item?.description}
          price={item.price}
          rating={item.rating}
        />
      ))}
    </div>
  );
};
