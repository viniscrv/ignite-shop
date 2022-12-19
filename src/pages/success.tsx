import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { ImageContainer, ImagesProducts, SuccessContainter } from "../styles/pages/success";

interface SuccessProps {
    customerName: string;
    product: {
        name: string;
        imageUrl: string;
    }[];
    quantity: number;
}

export default function Success({ customerName, product, quantity }: SuccessProps) {
    return (
        <>
            <Head>
                <title>Compra efetuada | Ignite Shop</title>
                <meta name="robots" content="noindex"/>
            </Head>
                <ImagesProducts>
                    {product.map((item) => {
                        return (
                            <ImageContainer>
                                    <Image src={item.imageUrl} width={120} height={110} alt=""/>
                            </ImageContainer>
                        )
                    })}
                </ImagesProducts>
            <SuccessContainter>
                <h1>Compra efetuada!</h1>
                <p>Uhu <strong>{customerName}</strong>, sua compra de {quantity} camisetas já está a caminho da sua casa.</p>

                <Link href="/">
                    Voltar ao catálogo
                </Link>
            </SuccessContainter>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {

    if (!query.session_id) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            }
        }
    }

    const sessionId = String(query.session_id);

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ["line_items", "line_items.data.price.product"]
    });

    const customerName = session.customer_details.name;

    const data = session.line_items.data

    const product = data.map((item) => {
       return item.price.product as Stripe.Product
    });

    const productsList = product.map((item) => {
        return (
            {
                name: item.name,
                imageUrl: item.images[0],
            }
        )
    })

    console.log(product);

    return {
        props: {
            customerName,
            product: productsList,
            quantity: productsList.length,
        }
    }
}