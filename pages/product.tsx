import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import CategorySlider from '@/components/CategorySlider'
import Breadcrumbs from '@/components/Breadcrumbs'
import ProductTop from '@/components/ProductTop'
import ProductBottom from '@/components/ProductBottom'
import RelatedProducts from '@/components/RelatedProducts'
import YouMayAlsoLikeProducts from '@/components/RelatedProducts'

export default function ProductSingle()
{
    return (
        <>
            <SiteHeader />
            <CategorySlider />
            <Breadcrumbs />
                <main>
                    <ProductTop />
                    <ProductBottom />
                    <RelatedProducts /> 
                    <YouMayAlsoLikeProducts /> 
                </main>
            <SiteFooter />
        </>
    )
}