import { ReactNode, createContext, useReducer, Dispatch } from "react";

interface SelectedProviderProps {
  children: ReactNode;
}

interface selectedContext {
  ctr: string;
  ndl: string;
  meat: string;
  spc: string;
}

interface actionType {
  type: "add";
  payload: any;
}

export const SelectedContext = createContext({} as selectedContext);

export const DispatchContext = createContext<Dispatch<actionType> | null>(null);

const reducer = (
  state: selectedContext,
  action: actionType
): selectedContext => {
  const { type, payload } = action;
  switch (type) {
    case "add":
      const { value, label } = payload;
      return { ...state, [value]: label };
  }
};

const INITIAL_VALUE: selectedContext = {
  ctr: "",
  ndl: "",
  meat: "",
  spc: "",
};



export const SelectedProvider = ({ children }: SelectedProviderProps) => {
  const [{ ctr, ndl, meat, spc }, dispatch] = useReducer(
    reducer,
    INITIAL_VALUE
  );

  const value: selectedContext = { ctr, ndl, meat, spc };

  return (
    <DispatchContext.Provider value={dispatch}>
      <SelectedContext.Provider value={value}>
        {children}
      </SelectedContext.Provider>
    </DispatchContext.Provider>
  );
};
