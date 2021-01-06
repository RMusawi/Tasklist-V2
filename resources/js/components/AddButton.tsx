import React from "react";

const AddButton: React.FunctionComponent<{ onClick: () => void }> = (props) => {
    return (
        <>
            <button onClick={props.onClick} type="button" className="addButton grow">Add item</button>
        </>
    )
}

export default AddButton
