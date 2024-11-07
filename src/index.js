import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // assurez-vous d'importer BrowserRouter
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter basename="/react-sophie-github">  
      <App />
    </BrowserRouter>
  </StrictMode>
);
