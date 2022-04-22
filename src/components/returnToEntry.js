const ReturnToEntry = () => {

    //reloads the page to return to the add recipes form
    const returnToForm = () => { window.location.reload(); }

    //button on weekly plan page to return to recipe entry
    return (
        <button onClick={returnToForm}>Add/Edit Recipes</button>
    );
}

export default ReturnToEntry;