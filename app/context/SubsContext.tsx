// SubsContext.js
import React, { useContext, createContext } from "react";
import { useQuery, QueryResult } from "@apollo/client";
import { GET_USER_SUB_DATA } from "@/graphql/query";

interface ISubsContext {
  subsLoading: boolean;
  subsError: any;
  subsData: any;
}

const SubsContext = createContext<ISubsContext | null>(null);

interface Props {
  children: React.ReactNode;
}

export const SubsProvider = ({ children }: Props) => {
  const userId = localStorage.getItem("userId");
  const {
    loading: subsLoading,
    error: subsError,
    data: subsData,
  } = useQuery(GET_USER_SUB_DATA, {
    variables: { userId },
    skip: !userId,
  });
  const contextValue: ISubsContext = {
    subsData,
    subsLoading,
    subsError,
  };

  return (
    <SubsContext.Provider value={contextValue}>{children}</SubsContext.Provider>
  );
};

export const useSubs = (): ISubsContext => {
  const context = useContext<ISubsContext | null>(SubsContext);
  if (context === null) {
    throw new Error("useSubs must be used within a DataProvider");
  }
  return context;
};
