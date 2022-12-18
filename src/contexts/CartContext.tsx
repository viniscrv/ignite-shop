import { createContext, ReactNode, useState } from "react";

interface CartContextType {
    totalQuantity: number;
    cartProducts: productInCart[];
    addProductAtCart: (product: productInCart) => void;
    removeProductAtCart: (id: string) => void;
}

interface productInCart {
    id: string;
    imageUrl: string;
    name: string;
    price: string;
}

interface CartProviderProps {
    children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartProvider({children}: CartProviderProps) {

    const [totalQuantity, setTotalQuantity] = useState(0);
    const [cartProducts, setCartProducts] = useState<productInCart[]>([]);

    function addProductAtCart(product: productInCart) {
        setTotalQuantity((state) => state + 1);
        setCartProducts((state) => [...state, product]);
    }

    function removeProductAtCart(id: string) {
        const CartWithoutRemovedProduct = cartProducts.filter((product) => product.id !== id);

        setTotalQuantity((state) => state - 1);

        setCartProducts(CartWithoutRemovedProduct);
    }

    return (
        <CartContext.Provider value={{
            addProductAtCart,
            removeProductAtCart,
            cartProducts,
            totalQuantity,
            }}>
            {children}
        </CartContext.Provider>
    );
}