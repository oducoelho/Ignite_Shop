import { HeaderContainer } from "./styled"

import logoImg from '../../assets/logo-ignite.svg'

import Image from 'next/image'
import { Cart } from "../Cart"


export const Header = () => {
  return (
    <HeaderContainer>
      <Image src={logoImg} alt="" />
      <Cart />
    </HeaderContainer>
  )
}

