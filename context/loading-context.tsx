import React, { useState, createContext, useContext, ReactNode } from "react";

type LoadingContextType = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const initialLoadingContext = {
  loading: true,
  setLoading: () => {},
};

const LoadingContext = createContext<LoadingContextType>(initialLoadingContext);

export const useLoadingContext = () => {
  return useContext(LoadingContext);
};

export const LoadingContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  return (
    <LoadingContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
