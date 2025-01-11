import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./components/home/Home";
import { Items } from "./components/items/Items";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="items">
          <Route index element={<Items />} />
          <Route path=":id" element={<h1>Detalles del producto</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
