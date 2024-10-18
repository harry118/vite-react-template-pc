import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ClickToComponent } from "click-to-react-component";
import NiceModal from "@ebay/nice-modal-react";

import App from "@pages/App";
import "./tailwind.css";
import { ImageProvider } from "@pages/EContract/context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ClickToComponent />
      <ImageProvider>
        <NiceModal.Provider>
          <App />
        </NiceModal.Provider>
      </ImageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
