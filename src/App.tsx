import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./components/home/Home";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="items">
          <Route index element={<h1>Página de resultados de búsqueda</h1>} />
          <Route path=":id" element={<h1>Detalles del producto</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
