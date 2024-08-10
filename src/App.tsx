import { useRoutes } from "react-router-dom";
import HomepageProvider from "./context/providers/homepage.provider";
import AboutUsPage from "./pages/AboutUsPage"; // Import the About Us page
import ContactPage from "./pages/ContactPage";
import Homepage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFound";
import ProductPage from "./pages/ProductPage";
import AllProducts from "./pages/ProductsPage";
import Routes from "./routes";

function App() {
  return useRoutes([
    {
      path: Routes.HOME,
      element: (
        <HomepageProvider>
          <Homepage />
        </HomepageProvider>
      )
    },
    {
      path: Routes.PRODUCT_DETAIL,
      element: <ProductPage />
    },
    {
      path: Routes.PRODUCTS,
      element: <AllProducts />
    },
    {
      path: Routes.CONTACT,
      element: <ContactPage />
    },
    {
      path: Routes.ABOUT_US, // Add this route
      element: <AboutUsPage />
    },
    {
      path: "*",
      element: <NotFoundPage />
    }
  ]);
}

export default App;
