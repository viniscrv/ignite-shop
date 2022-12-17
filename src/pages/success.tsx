import Link from "next/link";
import { ImageContainer, SuccessContainter } from "../styles/pages/success";


export default function Success() {
    return (
        <SuccessContainter>
            <h1>Compra efetuada</h1>

            <ImageContainer>
                
            </ImageContainer>

            <p>Uhu <strong>Vinícius de Carvalho</strong>, sua <strong>Camiseta Beyond the Limits</strong> já está a caminho da sua casa.</p>

            <Link href="/">
                Voltar ao catálogo
            </Link>
        </SuccessContainter>
    )
}