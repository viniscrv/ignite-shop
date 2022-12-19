import { createContext, ReactNode, useState } from "react";

interface CartContextType {
    totalItems: number;
    cartProducts: productInCart[];
    addProductAtCart: (product: productInCart) => void;
    removeProductAtCart: (id: string) => void;
}

interface productInCart {
    id: string;
    imageUrl: string;
    name: string;
    price: string;
    priceId: string;
    priceCents: number;
}

interface CartProviderProps {
    children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartProvider({children}: CartProviderProps) {

    const [cartProducts, setCartProducts] = useState<productInCart[]>([]);

    const totalItems = cartProducts.length;

    function addProductAtCart(product: productInCart) {
        let index = cartProducts.findIndex(productInCart => productInCart.id == product.id);

        if (index < 0) {
            setCartProducts((state) => [...state, product]);
            console.log(cartProducts)
        }
    }

    function removeProductAtCart(id: string) {
        const CartWithoutRemovedProduct = cartProducts.filter((product) => product.id !== id);
        setCartProducts(CartWithoutRemovedProduct);
    }

    return (
        <CartContext.Provider value={{
            addProductAtCart,
            removeProductAtCart,
            cartProducts,
            totalItems,
            }}>
            {children}
        </CartContext.Provider>
    );
}