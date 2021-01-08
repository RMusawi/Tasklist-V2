import React, {useState} from "react";

const EditButton: React.FunctionComponent<any> = (props) => {
    const buttonClick = (editing) => {
        props.onClick()
        setEditing(editing)
    }
    const [editing, setEditing] = useState(false);
    return (
        <div>
            {!editing
                ? <button type="button" className="editButton grow" onClick={() => buttonClick(true)}>Edit</button>
                : <button type="button" className="cancelButton grow" onClick={() => buttonClick(false)}>Cancel</button>
            }
        </div>
    )
}

export default EditButton;
