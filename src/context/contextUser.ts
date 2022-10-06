import { createContext, useState } from "react";

type PropsUserContext={
    state: string;
    setState: (state: string) => void;
}

const DEFAULT_VALUE:{
    state: string;
    setState: () => {};
}

const AuthContext = createContext<PropsUserContext>(DEFAULT_VALUE)

const AuthContextProvider = ({children} :any ) =>{
    const [state, setState] = useState(DEFAULT_VALUE.state);

    return(
        <AuthContext.Provider value={{state, setState}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContextProvider, AuthContext };
