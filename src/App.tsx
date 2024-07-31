import { useRoutes } from "react-router-dom";
import HomepageProvider from "./context/providers/homepage.provider";
import AllProducts from "./pages/allProducts";
import Homepage from "./pages/homepage";
import NotFoundPage from "./pages/not_found";
import ProductPage from "./pages/product";
import AboutUsPage from "./pages/aboutus_page"; // Import the About Us page
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
      path: Routes.PRODUCT_DETAIL,
      element: <ProductPage />,
    },
    {
      path: Routes.PRODUCTS,
      element: <AllProducts />,
    },
    {
      path: Routes.ABOUT_US, // Add this route
      element: <AboutUsPage />,
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);
}

export default App;
