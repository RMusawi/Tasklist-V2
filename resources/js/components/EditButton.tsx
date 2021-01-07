import React from "react";

const EditButton: React.FunctionComponent<any> = (props) => {
    return (
        <div>
            <button type="button" className="editButton grow" onClick={props.onClick}>Edit</button>
        </div>
    )
}

export default EditButton;
