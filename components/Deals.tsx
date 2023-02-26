import DealItem from "./DealItem"

export default function Deals()
{
    return(
        <section>
                <div>
                    <h3>Top Deals Of The Day</h3>
                    <div>
                        <div>178 <span>Days</span></div>
                        :<div>23 <span>Hours</span></div>
                        :<div>14 <span>Minutes</span></div>
                        :<div>39 <span>Seconds</span></div>
                    </div>
                    <div>
                        <a href="#">View All</a>
                    </div>
                </div>
            <div>
                <DealItem />
                <DealItem />
                <DealItem />
                <DealItem />
                <DealItem />
            </div>
            <nav>
                <div>
                    <img src="./images/arrow-right.svg" />
                </div>
                <div>
                    <ul>
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
                            <a href="#">4</a>
                        </li>
                        <li>
                            <a href="#">5</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <img src="./images/arrow-right.svg" />
                </div>
            </nav>
        </section>
    )
}