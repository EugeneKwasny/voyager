import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import CategorySlider from '@/components/CategorySlider'
import Breadcrumbs from '@/components/Breadcrumbs'
import ProductFilter from '@/components/ProductFilter'
import ProductGrid from '@/components/ProductGrid'
export default function Shop()
{
    return(
        <>
            <SiteHeader />
            <CategorySlider />
            <Breadcrumbs />
                <main>
                    <ProductFilter />
                    <ProductGrid />
                </main>
            <SiteFooter />
        </>
    )
}