import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { store } from "./store/store";
import { Provider } from "react-redux";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Suspense>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </Suspense>
);
