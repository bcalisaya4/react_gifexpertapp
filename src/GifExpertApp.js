import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = ()=>{
    //const categories = ['Digimon', 'Dragon Ball', 'Pokemon'];
    const [categories, setCategories] = useState([
        'Spiderman'
     //,'Dragon Ball', 'Pokemon'
    ]);

    //const handleAdd = () => {
        //setCategories (['dota', ...categories]);
        // or
        //setCategories (cats => [...cats,'Dragon BallZ'])
    //}

    return(
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr/>
        <ol>
            {categories.map( category =>(
                <GifGrid 
                    key = {category}
                    category={category}
                    />
            ) 
            )}
        </ol>


    </>);
}
//export default GifExpertApp;