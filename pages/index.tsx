import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <header>
        <div>
          <img src="./images/logo.svg" />
          <div>
            <div>
              All Categories
              <span><img src="./images/arrow.svg"/></span>
            </div>
            <form>
              <input type="search" placeholder='Search products…' />
              <button><img src="./images/search.svg" /></button>  
            </form>  
          </div>
          <div>
            <span>
              <img src="./images/heart.svg"/>
            </span> 
            Wishlist My Items
          </div>
          <div>
            <span>
              <img src="./images/profile.svg"/>
            </span> 
            Sign In Account
          </div>
          <div>
            <span>
              <img src="./images/shopping-cart.svg"/>
              <span>2</span>
            </span> 
            $200.99 Total
          </div>
        </div>
        <nav>
          <ul>
            <li><a href="#"><span><img src="./images/menu-icon.svg"/></span>Browse Categories</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Pages</a></li>
          </ul>
          <ul>
            <li>
              <a href="#">Deal of the Day</a>
            </li>
            <li>
              <a href="#">Hot Deals</a>
            </li>
            <li>
              <a href="#">Best Sellers</a>
            </li>
            <li>
              <a href="#">New Arrivals</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
