import { Product } from "../types/items";

export const filterItems = (
  items: Product[],
  searchTerm: string | undefined
): Product[] => {
  if (!items || !searchTerm) return items;

  return items.filter(
    (item) =>
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
