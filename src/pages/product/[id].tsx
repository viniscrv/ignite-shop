import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Head from "next/head"
import { useRouter } from "next/router";
import { useContext } from "react";
import Stripe from "stripe";
import { stripe } from "../../lib/stripe";
import { ImageContainer, ProductContainer, ProductDatails } from "../../styles/pages/product";
import { CartContext } from "../../contexts/CartContext";


interface ProductProps {
    product: {
        id: string,
        name: string,
        imageUrl: string,
        price: string,
        description: string,
        defaultPriceId: string,
        priceCents: number,
    }
}

export default function Product({ product }: ProductProps) {

    const { addProductAtCart } = useContext(CartContext);

    function handleAddProductAtCart() {
        addProductAtCart({
            id: product.id,
            imageUrl: product.imageUrl,
            name: product.name,
            price: product.price,
            priceId: product.defaultPriceId,
            priceCents: product.priceCents,
        });
    }

    

    const { isFallback } = useRouter();

    if (isFallback) {
        return <p>loading...</p>
    }

    return (
        <>
            <Head>
                <title>{product.name} | Ignite Shop</title>
            </Head>
            <ProductContainer>
                <ImageContainer>
                    <Image src={product.imageUrl} width={520} height={480} alt=""/>
                </ImageContainer>

                <ProductDatails>
                    <h1>{product.name}</h1>
                    <span>{product.price}</span>

                    <p>{product.description}</p>

                    <button 
                    onClick={handleAddProductAtCart}
                    >Colocar na sacola</button>
                </ProductDatails>
            </ProductContainer>
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: {id: "prod_MzTNgxh9fLPD98"} }
        ],
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {

    const productId = params.id; 

    const product = await stripe.products.retrieve(productId, {
        expand: ["default_price"],
    });

    const price = product.default_price as Stripe.Price

    return {
        props: {
            product: {
                id: product.id,
                name: product.name,
                imageUrl: product.images[0],
                price: new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                }).format(price.unit_amount! / 100),
                description: product.description,
                defaultPriceId: price.id,
                priceCents: price.unit_amount,
            }
        },
        revalidate: 60 * 60 * 1, // 1 hour
    }
} 