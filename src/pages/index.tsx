import { GetStaticProps } from "next";
import Head from 'next/head'
import Image from "next/image";
import Link from 'next/link'
import Bag from '../assets/Bag.svg'

import { useKeenSlider } from 'keen-slider/react'

import { stripe } from "../lib/stripe";
import { HomeContainer, Product } from "../styles/pages/home";


import 'keen-slider/keen-slider.min.css'
import Stripe from "stripe";
import { useCart } from "../hook/useCart";
import { IProduct } from "../context/CartContext";
import { MouseEvent } from "react";

interface HomeProps {
  products: IProduct[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  const { addToCart } = useCart();

  function handleAddToCart(
    e: MouseEvent<HTMLButtonElement>,
    product: IProduct
  ) {
    e.preventDefault();
    addToCart(product);
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className='keen-slider'>
        {products.map(product => {
          return (
            <Link 
              key={product.id}
              href={`/product/${product.id}`}
              prefetch={false}
              passHref 
            >
              <Product className="keen-slider__slide">
                <Image src={product.imageUrl} width={520} height={480} alt='' />

                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </div>
                  <Image 
                    src={Bag} 
                    alt=''
                    onClick={(e) => handleAddToCart(e, product)}
                  />
                </footer>
              </Product>
            </Link>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
  const price = product.default_price as Stripe.Price
    
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount / 100),
      numberPrice: price.unit_amount / 100,
      defaultPriceId: price.id,
      
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}