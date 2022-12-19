import * as Dialog from '@radix-ui/react-dialog';
import { Handbag } from "phosphor-react";
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { styled } from '../../styles';

const Badge = styled("div", {
    backgroundColor: "$green300",
    color: "$white",
    width: 10,
    height: 10,
    padding: 12,
    borderRadius: 8,
    position: "absolute",
    right: "-20px",
    top: "-20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});

const HandbagIcon = styled("div", {
   position: "relative",
});

export function CartButton() {
    const { totalItems } = useContext(CartContext)
    return (
        <>
        <Dialog.Trigger>
            <HandbagIcon>
                {totalItems > 0 && <Badge>{totalItems}</Badge>}
                <Handbag size={34} />
            </HandbagIcon>
        </Dialog.Trigger>   
        </>
    )
        
}