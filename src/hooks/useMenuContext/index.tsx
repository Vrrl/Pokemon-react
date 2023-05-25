import { useContext } from "react";
import MenuContext, { MenuContextProps } from "../../context/menu";

    const useMenuContext = (): MenuContextProps => {
    const menuContext = useContext<MenuContextProps>(MenuContext);
    return menuContext;
}

export default useMenuContext;