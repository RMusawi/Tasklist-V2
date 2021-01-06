import React from "react";

const EditButton: React.FunctionComponent<any> = (edit) => {
    return (
        <div>
            <button type="button" className="editButton grow" onClick={() => edit(true)}>Edit</button>
        </div>
    )
}

export default EditButton;
