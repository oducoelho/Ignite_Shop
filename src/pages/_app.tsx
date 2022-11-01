import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"

import { CloseSideBar, Container, ContentContainer, FinishBuy, Header, MenuItens, PreviewPhoto, Product } from "../styles/pages/app"

import logoImg from '../assets/logo-ignite.svg'
import BagHeader from '../assets/BagHeader.svg'
import { X } from 'phosphor-react'
import camisa from '../assets/camisa.svg'

import Image from 'next/image'
import { useState } from "react"
import './teste.css'

globalStyles()

export default function App({ Component, pageProps }: AppProps) { 
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <Container>
        <Header>
          <Image src={logoImg} alt="" />
          <Image src={BagHeader} alt="" onClick={showSidebar} />
        </Header>

        <Component {...pageProps} />
      </Container>

      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <MenuItens>
          <CloseSideBar>
            <div onClick={showSidebar}>
              <X />
            </div>
          </CloseSideBar>
          <ContentContainer>
            <h1>Sacola de compras</h1>

            <Product>
              <PreviewPhoto>
                <Image src={camisa} width={80} height={70} alt=''/>
              </PreviewPhoto>
              <div>
                <span>Camiseta Beyoud the Limits</span>
                <strong>R$ 79,90</strong>
                <p>Remover</p>
              </div>
            </Product>

            <Product>
              <PreviewPhoto>
                <Image src={camisa} width={80} height={70} alt=''/>
              </PreviewPhoto>
              <div>
                <span>Camiseta Beyoud the Limits</span>
                <strong>R$ 79,90</strong>
                <p>Remover</p>
              </div>
            </Product>

            <Product>
              <PreviewPhoto>
                <Image src={camisa} width={80} height={70} alt=''/>
              </PreviewPhoto>
              <div>
                <span>Camiseta Beyoud the Limits</span>
                <strong>R$ 79,90</strong>
                <p>Remover</p>
              </div>
            </Product>

            <FinishBuy>
              <div>
                <span>Quantidade</span>
                <span>3 Itens</span>
              </div>

              <div>
                <span>Valor Total</span>
                <strong>R$ 270,00</strong>
              </div>

              <button>Finalizar Compra</button>
            </FinishBuy>
          </ContentContainer>

          
        </MenuItens>
      </nav>
    </>
  )
}
