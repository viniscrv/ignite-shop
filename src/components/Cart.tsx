import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import { X } from 'phosphor-react';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { CartContainer, CloseButton, Content, ItemsList, Overlay, PurshaseInfo } from '../styles/cart';

export function Cart() {

    const { cartProducts, removeProductAtCart } = useContext(CartContext);

    function handleDeleteProduct(id: string) {
        removeProductAtCart(id);
    }

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
                            <p>{cartProducts.length} itens</p>
                        </div>
                        <div className='price'>
                            <p>Valor total</p>
                            <p>R$ 270,00</p>
                        </div>

                        <button>Finalizar Compra</button>
                    </PurshaseInfo>
                </Content>
            </CartContainer>
        </Dialog.Portal>
    )
}