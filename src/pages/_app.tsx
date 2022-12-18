import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import logo from "../assets/logo.svg";
import { Container, Header } from "../styles/pages/app";
import Image from "next/image";
import Link from "next/link";
import { Handbag } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog';
import { Cart } from "../components/Cart";
import { CartProvider } from "../contexts/CartContext";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {

  return (
    <CartProvider>
      <Container>
            <Header>
            <Link href={"/"}>
                  <Image src={logo} alt="" />
              </Link>
              <Dialog.Root>
                <Dialog.Trigger>
                    <Handbag size={34} />
                </Dialog.Trigger>
                <Cart/>
              </Dialog.Root>
            </Header>
          <Component {...pageProps} />
        </Container>
      </CartProvider>
  );
}
