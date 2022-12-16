import Image from "next/image";
import { ImageContainer, ProductContainer, ProductDatails } from "../../styles/pages/product";


export default function Product() {
    return (
        <ProductContainer>
            <ImageContainer>

            </ImageContainer>

            <ProductDatails>
                <h1>Camiseta X</h1>
                <span>R$ 70,00</span>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam deserunt atque porro at inventore animi eius quasi! Omnis recusandae laboriosam magnam deleniti perferendis rerum? Doloremque maiores ut nemo magnam tempore!</p>

                <button>Comprar agora</button>
            </ProductDatails>
        </ProductContainer>
    )
}