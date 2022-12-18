import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';
import { CartContainer, CloseButton, Content, ItemsList, PurshaseInfo } from '../styles/cart';

export function Cart() {
    return (
        <Dialog.Portal>
            <CartContainer>
                <Content>
                    <CloseButton >
                        <X size={24} color="#e1e1e6"/>
                    </CloseButton>
                    <ItemsList>
                        <Dialog.Title>Sacola de compras</Dialog.Title>
                        <div>
                            <div className='image-box'></div>
                            <div>
                                <p>Camiseta Beyond the Limits</p>
                                <span>R$ 79,90</span>
                                <button>Remover</button>
                            </div>
                        </div>
                    </ItemsList>

                    <PurshaseInfo>
                        <div className='quantity'>
                            <p>Quantidade</p>
                            <p>3 itens</p>
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