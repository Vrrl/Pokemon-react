import React, { createContext, useState } from "react";

export type MenuContextProps = {
    isActiveState: boolean;
    setIsActiveState: React.Dispatch<React.SetStateAction<boolean>>;
    switchBoll: () => void;
}

type MenuContextProviderProps = {
    children: React.ReactNode;
}

const DEFAULT_VALUES = {
    isActiveState: false,
    setIsActiveState: () => false,
    switchBoll: () => undefined

}

const MenuContext = createContext<MenuContextProps>(DEFAULT_VALUES)

const MenuContextProvider = ({children}: MenuContextProviderProps) => {
    const [isActiveState, setIsActiveState] = useState<boolean>(false);
    
    const switchBoll = () => {
        setIsActiveState(!isActiveState);
    }

    return (
        <MenuContext.Provider value={{
            isActiveState,
            setIsActiveState,
            switchBoll
        }}>
            {children}
        </MenuContext.Provider>
    );
}

export default MenuContext;
export { MenuContextProvider };