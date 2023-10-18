import { createContext } from "react";
import { useProduct } from "../../hooks/use-product";

export const AdminContext = createContext();  //create context

export default function AdminContextProvider({children}){

    // Get All Product
    const {getProduct} = useProduct();
    

    return (
        <AdminContext.Provider value={{getProduct}}>
            {children}
        </AdminContext.Provider>
    );
}