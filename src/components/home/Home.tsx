import { Search } from "../search/Search";
import logo from "../../assets/logo.webp";

export const Home = () => {
  return (
    <div className="p-4 gap-4 flex flex-col min-h-screen items-center justify-center">
      <img src={logo} alt="Imagen de una bolsa con el texto Bazar" />
      <h1 className="text-4xl font-bold">Bazar Online</h1>
      <Search />
    </div>
  );
};
