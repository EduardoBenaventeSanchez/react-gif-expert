import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GitExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch' ]);

    const onAddCategory = (newCategory) => {
        if ( categories.includes(newCategory) ) return;

        // categories.push(newCategory);
        setCategories([ newCategory, ...categories ]);
        // setCategories( cat => [ ...cat, 'Valorant' ] );
    };

    return (
        <>

            <h1>GifExpertApp</h1>


            <AddCategory 
                OnNewCategory={ (value) => onAddCategory(value)}
            />



            { 
                categories.map( category => (
                        <GifGrid key={ category } category={ category }/>
                    ))
            }


        </>
    )

    
}
