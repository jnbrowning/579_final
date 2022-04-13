import {useState} from 'react';

const AddRecipe = (props) => {
    const [recipeName, setRecipe] = useState('');
    const [recipePic, setPic] = useState('');

    const updateRecipes = (e) => {
        e.preventDefault();
        props.addRecipe((currentRecipes) => {
            return [
                ...currentRecipes,
                {
                    name: recipeName,
                    pic: recipePic,
                },
            ]
        })
        setRecipe('');
        setPic('');
    }

    return(
        <form>
            <label>Recipe Name:</label>
            <input
                type='text'
                value={recipeName}
                onChange={(e) => setRecipe(e.target.value)}
            />
            <label>Image Url:</label>
            <input
                type='url'
                value={recipePic}
                onChange={(e) => setPic(e.target.value)}
            />
            <button onClick={updateRecipes}>Submit</button>
        </form>
    )
}

export default AddRecipe;