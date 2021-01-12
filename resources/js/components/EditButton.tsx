import React from "react";

const EditButton: React.FunctionComponent<any> = (props) => {
    return (
        <div>
            {props.isEditing
                ? <button type="submit" className="exitButton grow" onClick={props.onClick}>Exit</button>
                : <button type="submit" className="editButton grow" onClick={props.onClick}>Edit</button>
            }
        </div>
    )
}

export default EditButton;
