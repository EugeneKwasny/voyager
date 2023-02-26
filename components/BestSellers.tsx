import ProductItem from "./ProductItem"

export default function BestSellers()
{
    return(
        <section>
            <div>
                <h3>Best seller in the last month</h3>
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
                            <a href="#">Electronic </a>
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