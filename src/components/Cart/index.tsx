import * as Dialog from '@radix-ui/react-dialog';
import axios from 'axios';
import Image from 'next/image';
import { X } from 'phosphor-react';
import { useContext, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { CartContainer, CloseButton, Content, ItemsList, Overlay, PurshaseInfo } from '../../styles/cart';

export function Cart() {

    const { cartProducts, totalItems, removeProductAtCart } = useContext(CartContext);

    function handleDeleteProduct(id: string) {
        removeProductAtCart(id);
    }

    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);

    async function handleBuyProduct(){

        const priceIdProducts = cartProducts.map((product) => {
            return {price: product.priceId, quantity: 1}
        });

        try {
            setIsCreatingCheckoutSession(true);

            const response = await axios.post("/api/checkout", {
                priceId: priceIdProducts,
            });
            const { checkoutUrl } = response.data;

            window.location.href = checkoutUrl;

        } catch(err) {
            setIsCreatingCheckoutSession(false);

            alert("Falha ao redirecionar ao checkout");
        }
    }

    const totalPrice = cartProducts.reduce((acc, currentValue) => acc + currentValue.priceCents, 0);

    const isButtonDisabled = isCreatingCheckoutSession || totalItems === 0;

    return (
        <Dialog.Portal>
            <Overlay/>
            <CartContainer>
                <Content>
                    <CloseButton >
                        <X size={24} color="#e1e1e6"/>
                    </CloseButton>
                    <ItemsList>
                        <Dialog.Title>Sacola de compras</Dialog.Title>
                        {cartProducts.map((product) => {
                            return (
                                <div key={product.id}>
                                    <div className='image-box'>
                                        <Image src={product.imageUrl} alt="" width={100} height={100}/> 
                                    </div>
                                    <div>
                                        <p>{product.name}</p>
                                        <span>{product.price}</span>
                                        <button onClick={() => handleDeleteProduct(product.id)}>Remover</button>
                                    </div>
                                </div>
                            )
                        })}
                    </ItemsList>

                    <PurshaseInfo>
                        <div className='quantity'>
                            <p>Quantidade</p>
                            <p>{totalItems} itens</p>
                        </div>
                        <div className='price'>
                            <p>Valor total</p>
                            <p>{new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"})
                            .format(totalPrice / 100)}
                            </p>
                        </div>

                        <button onClick={handleBuyProduct} disabled={isButtonDisabled}>Finalizar Compra</button>
                    </PurshaseInfo>
                </Content>
            </CartContainer>
        </Dialog.Portal>
    )
}