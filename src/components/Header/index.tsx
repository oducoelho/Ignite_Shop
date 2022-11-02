import { HeaderContainer } from "./styled"

import logoImg from '../../assets/logo-ignite.svg'

import Image from 'next/image'
import { Cart } from "../Cart"
import Link from "next/link"
import { useRouter } from "next/router"


export const Header = () => {
  const { pathname } = useRouter()
  
  const showCartButton = pathname != '/success'

  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg} alt=""/>
      </Link>
      {showCartButton && <Cart />}
    </HeaderContainer>
  )
}

