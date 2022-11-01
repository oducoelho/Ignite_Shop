import { createContext, ReactNode, useState } from "react";
import Product from "../pages/product/[id]";

export interface IProduct {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  numberPrice: number;
  description: string;
  defaultPriceId: string;
}

interface CartContextData {
  cartItems: IProduct[];
  cartTotal: number;
  //addToCart: (product: IProduct) => void;
  //removeCartItem: (productId: string) => void;
  //checkIfItemAlreadyExists: (productId: string) => boolean;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);

  const cartTotal = cartItems.reduce((total, product) => {
    return total + product.numberPrice
  }, 0)

  const addToCart

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
}