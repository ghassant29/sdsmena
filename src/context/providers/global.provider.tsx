import { createContext, PropsWithChildren, useContext, useState } from "react";

type GlobalContextType = {
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
};

const GlobalContext = createContext<GlobalContextType>({
  activeSection: "#home",
  setActiveSection: () => {}
});

const GlobalProvider = ({ children }: PropsWithChildren) => {
  const [activeSection, setActiveSection] = useState("#home");

  return (
    <GlobalContext.Provider
      value={{
        activeSection,
        setActiveSection
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => useContext(GlobalContext);

export default GlobalProvider;
