import CategoryItem from './CategoryItem'

export default function Categories()
{
    return(
        <section>
            <div>
                <h3>Shop by Category</h3>
                <div>
                    <a href="#">View All Categories</a>
                </div>
            </div>
            <div>
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
            </div>
        </section>
    )
}