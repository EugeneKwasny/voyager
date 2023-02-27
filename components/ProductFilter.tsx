export default function ProductFilter()
{
    return(
        <aside>

            <div>
                <h5>Department</h5>
                <ul>
                    <li>
                        <a href="#">Electronics</a>
                    </li>
                    <li>
                        <a href="#">Computers & Accessories</a>
                    </li>
                    <li>
                        <a href="#">Computers & Tablets</a>
                        <ul>
                            <li>
                                <a href="#">Desktops</a>
                            </li>
                            <li>
                                <a href="#">Laptops</a>
                            </li>
                            <li>
                                <a href="#">Tablets</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div>
                <h5>Filter by Brands</h5>
                <input type="text" placeholder="Find a Brand" />
                <ul>
                    <li>
                        <label>
                            <input type="checkbox"/>
                            <span>Apple</span>
                        </label>
                        <span>87</span>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox"/>
                            <span>Asus</span>
                        </label>
                        <span>87</span>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox"/>
                            <span>Acer</span>
                        </label>
                        <span>87</span>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox"/>
                            <span>Lenovo</span>
                        </label>
                        <span>87</span>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox"/>
                            <span>Dell</span>
                        </label>
                        <span>87</span>
                    </li>
                </ul>
                <a href="#">Show More</a>
            </div>
            <div>
                <h5>Price</h5>
                <div>
                    <label>
                        Min Price
                        <input type="number" value="0"/>
                    </label>
                    <label>
                        Max Price
                        <input type="number" value="100"/>
                    </label>
                </div>
                <input type="range" id="price" name="price" min="0" max="100" />
                <div>
                    $20 - $70987
                </div>
            </div>

            <div>
                <h5>CPU Manufacturer</h5>
                <input type="text" placeholder="Find a Brand" />
                <ul>
                    <li>
                        <label>
                            <input type="checkbox"/>
                            <span>AMD</span>
                        </label>
                        <span>87</span>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox"/>
                            <span>Apple</span>
                        </label>
                        <span>87</span>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox"/>
                            <span>Intel</span>
                        </label>
                        <span>87</span>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox"/>
                            <span>NVIDIA</span>
                        </label>
                        <span>87</span>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox"/>
                            <span>Qualcomm</span>
                        </label>
                        <span>87</span>
                    </li>
                </ul>
                <a href="#">Show More</a>
            </div>

            <div>
                <h5>Memory Capacity</h5>
                <ul>
                    <li>
                        <label>
                            <input type="checkbox"/>
                            <span>16 GB</span>
                        </label>
                        <span>87</span>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox"/>
                            <span>32 GB</span>
                        </label>
                        <span>87</span>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox"/>
                            <span>64 GB</span>
                        </label>
                        <span>87</span>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox"/>
                            <span>128 GB</span>
                        </label>
                        <span>87</span>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox"/>
                            <span>1 TB</span>
                        </label>
                        <span>87</span>
                    </li>
                </ul>
                <a href="#">Show More</a>
            </div>
        
            <div>
                <h5>Screen Size</h5>
                <ul>
                    <li>
                        <label>
                            <input type="checkbox"/>
                            <span>17 Inches & Above</span>
                        </label>
                        <span>87</span>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox"/>
                            <span>16 to 16.9 Inches</span>
                        </label>
                        <span>87</span>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox"/>
                            <span>15 to 15.9 Inches</span>
                        </label>
                        <span>87</span>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox"/>
                            <span>14 to 14.9 Inches</span>
                        </label>
                        <span>87</span>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox"/>
                            <span>13 to 13.9 Inches</span>
                        </label>
                        <span>87</span>
                    </li>
                </ul>
                <a href="#">Show More</a>
            </div>   


            
            <div>
                <h5>Display Resolution</h5>
                <ul>
                    <li>
                        <label>
                            <input type="checkbox"/>
                            <span>1024 x 600 pixel</span>
                        </label>
                        <span>87</span>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox"/>
                            <span>1024 x 768 pixel</span>
                        </label>
                        <span>87</span>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox"/>
                            <span>1280 x 720 pixel</span>
                        </label>
                        <span>87</span>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox"/>
                            <span>1280 x 800 pixel</span>
                        </label>
                        <span>87</span>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox"/>
                            <span>1366 x 768 pixel</span>
                        </label>
                        <span>87</span>
                    </li>
                </ul>
                <a href="#">Show More</a>
            </div>   


            <div>
                <h5>Color</h5>
                <ul>
                    <li>
                        <a href="#">#041E42</a>
                    </li>
                    <li>
                        <a href="#">#2B3467</a>
                    </li>
                    <li>
                        <a href="#">#4A70B1</a>
                    </li>
                    <li>
                        <a href="#">#F5C34B</a>
                    </li>
                    <li>
                        <a href="#">#626974</a>
                    </li>
                    <li>
                        <a href="#">#FFFFFF</a>
                    </li>
                </ul>
            </div>

            <div>
                <h5>Customer Rating</h5>
                <fieldset>       
                    <label>
                        <input type="radio" id="4up" name="4up" value="4" checked />
                        4 starts & up
                    </label>
                    <label>
                        <input type="radio" id="3up" name="3up" value="3"  />
                        3 starts & up
                    </label>
                    <label>
                        <input type="radio" id="2up" name="2up" value="2"  />
                        2 starts & up
                    </label>
                    <label>
                        <input type="radio" id="1up" name="1up" value="1"  />
                        1 starts & up
                    </label>
                </fieldset>
            </div>

            <div>
                <h5>Condition</h5>
                <ul>
                    <li>
                        <label>
                            <input type="checkbox" value="new"/>
                            <span>New</span>
                        </label>
                        <span>87</span>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" value="used"/>
                            <span>Used</span>
                        </label>
                        <span>87</span>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" value="renewed"/>
                            <span>Renewed</span>
                        </label>
                        <span>87</span>
                    </li>
                </ul>
                <a href="#">Show More</a>
            </div>   
        </aside>
    )
}