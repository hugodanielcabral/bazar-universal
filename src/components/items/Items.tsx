import { Link } from "react-router";
import { Search } from "../search/Search";
import { ItemsCategory } from "./category/ItemsCategory";
import { useProducts } from "../../hooks/useProducts";
import { filterItems } from "../../utils/filterItems";
import queryString from "query-string";
import logo from "../../assets/logo.webp";
import { ItemsList } from "./list/ItemsList";

export const Items = () => {
  const { items, isLoading } = useProducts();
  const searchTerm = queryString.parse(location.search);
  const filteredItems = filterItems(
    items,
    typeof searchTerm.search === "string" ? searchTerm.search : undefined
  );

  return (
    <div className="px-4 mt-8 space-y-2">
      <div className="flex items-center *:flex-grow gap-4">
        <Link to={"/"} className="w-10">
          <img src={logo} alt="Imagen de una bolsa con el texto Bazar" />
        </Link>
        <Search />
      </div>
      <h2 className="text-lg text-pretty">
        Resultados de la búsqueda de "{searchTerm.search}":{" "}
        {filteredItems.length}
      </h2>

      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <ItemsCategory items={filteredItems} />
          <ItemsList items={filteredItems} />
        </>
      )}
    </div>
  );
};
