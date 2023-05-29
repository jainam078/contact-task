import { Provider } from "react-redux";
import "leaflet/dist/leaflet.css";
import "./App.css";

import ModalProvider from "./hooks/useModal";
import Contacts from "./screens/Contacts";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./redux/store";
import Charts from "./screens/Charts";
import { QueryClient, QueryClientProvider } from "react-query";
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Contacts /> },
    { path: "/charts", element: <Charts /> },
  ]);
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ModalProvider>
          <div className="px-3 ">
            <RouterProvider router={router} />
          </div>
        </ModalProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
