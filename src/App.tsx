import { useRoutes } from "react-router-dom";
import HomepageProvider from "./context/providers/homepage.provider";
import Homepage from "./pages/homepage";
import NotFoundPage from "./pages/not_found";
import ProductPage from "./pages/product";
import AllProducts from "./pages/allProducts"; // Assuming the path to your AllProducts component
import Routes from "./routes";

function App() {
  return useRoutes([
    {
      path: Routes.HOME,
      element: (
        <HomepageProvider>
          <Homepage />
        </HomepageProvider>
      ),
    },
    {
      path: Routes.PRODUCTS, // Add a new path for the products page
      element: <AllProducts />,
    },
    {
      path: Routes.PRODUCT_DETAIL,
      element: <ProductPage />,
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);
}

export default App;
