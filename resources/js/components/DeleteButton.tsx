import React from "react";

const DeleteButton: React.FunctionComponent<any> = (props) => {
    return (
        <>
            <button type="button" className="deleteButton grow" onClick={props.onClick}>Delete</button>
        </>
    )
}

export default DeleteButton;
