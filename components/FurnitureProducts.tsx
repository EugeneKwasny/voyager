import ProductItem from './ProductItem'
export default function FurnitureProducts()
{
    return (
        <section>
            <div>
                <h3>Furniture products</h3>
                <div>
                    <ul>
                        <li>
                            <a href="#">New arrivals</a>
                        </li>
                        <li>
                            <a href="#">Best sellers</a>
                        </li>
                        <li>
                            <a href="#">Best rated</a>
                        </li>
                        <li>
                            <a href="#">All</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>
            <nav>
                <div><a href="#"><img src="./images/next.svg" /></a></div>
                <div><a href="#"><img src="./images/next.svg" /></a></div>
            </nav>
        </section>
    )
}