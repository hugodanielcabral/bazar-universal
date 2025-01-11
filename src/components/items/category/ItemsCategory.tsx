import { Product } from "../../../types/items";

interface ItemsCategoryProps {
  items: Product[] | null;
}
const calculateCategoryTotals = (products: Product[]) => {
  return products.reduce<{ name: string; count: number }[]>((acc, product) => {
    const existingCategory = acc.find(
      (category) => category.name === product.category
    );

    if (existingCategory) {
      existingCategory.count += 1;
    } else {
      acc.push({ name: product.category, count: 1 });
    }

    return acc;
  }, []);
};
export const ItemsCategory = ({ items }: ItemsCategoryProps) => {
  if (!items) {
    return <p>No hay productos disponibles.</p>;
  }

  const categoryTotals = calculateCategoryTotals(items);

  return (
    <ul className="bg-yellow-600 flex flex-col p-2 rounded-md gap-2">
      {categoryTotals.map((category) => (
        <li key={category.name}>
          <span className="font-bold">{category.name}:</span>
          {category.count}
        </li>
      ))}
    </ul>
  );
};
