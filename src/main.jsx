import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/Store.js";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header.jsx";
import Todo from "./pages/Todo.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import ProjectPage from "./pages/Project.jsx";
import Contact from "./pages/Contact.jsx";
import { PersistGate } from "redux-persist/integration/react";
import Loading from "./components/Loading.jsx";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/todo",
        element: <Todo />,
      },
      {
        path: "/projects",
        element: <ProjectPage />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
    </Provider>
  </React.StrictMode>
);
