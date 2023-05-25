import React, { useContext, createContext, useState } from "react";
import { Loader } from "../../components/loader";

export interface LoadingInfo {
  show(): void;
  hide(): void;
}

const loadingDefault: LoadingInfo = {
  show: () => {},
  hide: () => {},
};

const LoadingContext = createContext<LoadingInfo>(loadingDefault);

export function useLoading() {
  return useContext(LoadingContext);
}

interface Props {
  children: React.ReactNode;
}

export function LoadingProvider({ children }: Props) {
  const [open, setOpen] = useState(0);

  const show = () => {
    setOpen((prev) => prev + 1);
  };

  const hide = () => {
    setOpen((prev) => prev - 1);
  };

  return (
    <LoadingContext.Provider value={{ show, hide }}>
      {open > 0 && <Loader/>}
      {children}
    </LoadingContext.Provider>
  );
}
