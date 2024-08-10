import { PropsWithChildren } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/hompage/Navbar";

type Props = {
  onlyHome?: boolean;
};

const DefaultLayout = ({ children }: PropsWithChildren<Props>) => {
  return (
    <div className="bg-white h-screen w-full overflow-x-hidden overflow-y-auto sm:pb-0 relative">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
