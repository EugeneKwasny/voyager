import ProductItemMini from "./ProductItemMini"
export default function NewArrivals()
{
    return (
        <section>
            <div>
                <h3>Hot New Arrivals</h3>
                <div>
                    <ul>
                        <li>
                            <a href="#">Top 20</a>
                        </li>
                        <li>
                            <a href="#">Baby</a>
                        </li>
                        <li>
                            <a href="#">Furniture</a>
                        </li>
                        <li>
                            <a href="#">Electronic</a>
                        </li>
                        <li>
                            <a href="#">All</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <ProductItemMini />
                <ProductItemMini />
                <ProductItemMini />
                <ProductItemMini />
                <ProductItemMini />
                <ProductItemMini />
                <ProductItemMini />
                <ProductItemMini />
                <ProductItemMini />
                <ProductItemMini />
                <ProductItemMini />
                <ProductItemMini />
            </div>
        </section>
    )
}