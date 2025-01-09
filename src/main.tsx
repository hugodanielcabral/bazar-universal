import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { BrowserRouter, Route, Routes } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="items">
          <Route index element={<h1>Página de resultados de búsqueda</h1>} />
          <Route path=":id" element={<h1>Detalles del producto</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
