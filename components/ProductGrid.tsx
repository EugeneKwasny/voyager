import ProductItem from "./ProductItem"
export default function ProductGrid()
{
    return (
        <section>
            <h1>Laptops and Accessories</h1>
            <div>Shop laptops, desktops, monitors, tablets, PC gaming, hard drives and storage, accessories and more</div>
            <div>
                <div>
                    Showing 1–20 of 175 results
                    <ul>
                        <li>
                            <a href="#">20</a>
                        </li>
                        <li>
                            <a href="#">40</a>
                        </li>
                        <li>
                            <a href="#">60</a>
                        </li>
                        <li>
                            <a href="#">All</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <div>
                        Default sorting 
                        <img src="./images/arrow.svg" />
                    </div>
                    <ul>
                        <li>
                            <a href="#">List</a>
                        </li>
                        <li>
                            <a href="#">Grid</a>
                        </li>
                    </ul>
                </div>
            </div>
            <section>
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </section>
            <div>
                <ul>
                    <li>
                        <a href="#">
                            <img src="./images/next.svg" />
                        </a>
                    </li>
                    <li>
                        <a href="#">1</a>
                    </li>
                    <li>
                        <a href="#">2</a>
                    </li>
                    <li>
                        <a href="#">3</a>
                    </li>
                    <li>
                        <a href="#">5</a>
                    </li>
                    <li>
                        <a href="#">...</a>
                    </li>
                    <li>
                        <a href="#">20</a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="./images/next.svg" />
                        </a>
                    </li>
                </ul>
                <div>1 – 20 of 300+ properties found</div>
            </div>
        </section>
    )
}