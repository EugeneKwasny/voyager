import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Deals from '@/components/Deals'
import Categories from '@/components/Categories'
import Offers from '@/components/Banners'
import BestSellers from '@/components/BestSellers'
import InfoBar from '@/components/InfoBar'
import FurnitureProducts from '@/components/FurnitureProducts'
import ElectronicProducts from '@/components/ElectronicProducts'
import PopularSearchKeywords from '@/components/PopularSearchKeywords'
import Banners from '@/components/Banners'
import NewArrivals from '@/components/NewArrivals'
import Brands from '@/components/Brands'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <SiteHeader />
     <main>
        <Hero />
        <Features />
        <Deals /> 
        <Categories />
        <Banners />
        <BestSellers />
        <InfoBar />
        <FurnitureProducts />
        <ElectronicProducts />
        <PopularSearchKeywords /> 
        {/*  
        <Banner />
        <NewArrivals />
        <Brands /> */}
     </main>
     <SiteFooter />
    </>
  )
}
