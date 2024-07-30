import { PropsWithChildren } from "react";
import GlobalProvider from "./providers/global.provider";
import HomepageProvider from "./providers/homepage.provider";

const ContextsProvider = ({ children }: PropsWithChildren) => {
  return (
    <GlobalProvider>
      <HomepageProvider>{children}</HomepageProvider>
    </GlobalProvider>
  );
};

export default ContextsProvider;
