import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import GifGrid from "./components/GifGrid"

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([ ])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
        // setCategories(cat=>[...cat, 'valorant'])
    }
    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                // setCategories={setCategories} 
                onNewCategory={(value) => onAddCategory(value)}
            />

            {
                categories.map(category => (
                    <GifGrid key={category}
                        category={category} />
                ))
            }
        </>

    )
}

// Api x3Yow1LKsCOOjOSqUmUNtHkIle7AFYxo