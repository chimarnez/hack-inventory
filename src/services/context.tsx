import { createContext, useState } from "react";
import fakeInventory from "./data.json";

export const AppContext = createContext<any>({
  data: [],
  setData: () => {},
});

export const AppContextProvider = (props: any) => {
  const [data, setData] = useState<any[]>(fakeInventory);
  return (
    <AppContext.Provider value={{ data, setData }}>
      {props.children}
    </AppContext.Provider>
  );
};
