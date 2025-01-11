import { useEffect, useState } from "react";
import { Product, Products } from "../types/items";

export const useProducts = () => {
  const [items, setItems] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await fetch("./src/db/products.json");

      if (response.status !== 200) {
        throw new Error("Ocurrió un error" + response.statusText);
      }

      const data: Products = await response.json();
      setItems(data.products);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { items, isLoading };
};
