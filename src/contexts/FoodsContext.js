import { createContext, useState, useContext, useEffect } from "react";
import { foodServices } from "../services/foodServices";

export const FoodsContext = createContext({});

export function useFoods() {
  return useContext(FoodsContext);
}

export default function FoodsProvider(props) {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    foodServices.getAllFoods().then((data) => {
      setFoods(data.data.data);
    });
  }, []);
  return (
    <FoodsContext.Provider value={[foods, setFoods]}>
      {props.children}
    </FoodsContext.Provider>
  );
}
