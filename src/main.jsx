import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "/src/App.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import "/src/assets/scss/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/camping_D/">
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
