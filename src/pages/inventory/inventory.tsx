import { useContext } from "react";
import { AppContext } from "../../services/context";
import { InventoryTable } from "./components/table";

export const Inventory = () => {
  const { data } = useContext(AppContext);
  return <InventoryTable data={data} />;
};
