import React, { useEffect } from "react";
import Login from "./components/Login";
import Remu from "./components/Remu";
import { reducerCases } from "./utils/Constants";
import { useStateProvider } from "./utils/StateProvider";
export default function App() {
  const [{ token }, dispatch] = useStateProvider();
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      if (token) {
        dispatch({ type: reducerCases.SET_TOKEN, token });
      }
    }
    document.title = "Remu";
  }, [dispatch, token]);
  return <div>{token ? <Remu /> : <Login />}</div>;
}