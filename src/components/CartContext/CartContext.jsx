import { createContext, useState, useContext } from "react";


const CartContext = createContext([])

export const useCartContext = () =>  useContext(CartContext)

export const CartContextProvider = ({children})=>{
  
    const [ cartList, setCartList ] = useState([])
    


    const agregarCarrito = (newProducto) =>{
   
        setCartList( [
            ...cartList,
            newProducto
        ] )

    }

 

  


    const vaciarCarrito = () => setCartList( [] )

    return (
        <CartContextProvider value={{
            cartList,
            agregarCarrito,
            vaciarCarrito
        }}>
            {children}
        </CartContextProvider>
    )
}