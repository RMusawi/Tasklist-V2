import React, {useState, useEffect} from "react";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import CheckBox from "./CheckBox";

const Item: React.FunctionComponent<any> = ({activity, destroy, edit, check}) => {
    const [editActive, setEditActive] = useState(false);
    const [inputText, setInputText] = useState("");

    const buttonClickHandler = () => {
        setEditActive(!editActive);
    }

    const editFormHandler = (e) => {
        edit(e, inputText, activity.id);
        setEditActive(false);
    }
    useEffect(() => {
        setInputText(activity.activity_name)
    },[activity])

    let dateFormat = require("dateformat");

    let style = "todo-item " + (activity.checked ? 'checkbox-done' : 'checkbox-null');

    return (
        <div className="item-container">
            <hr className="stripe"/>
            <div className="item" key={activity.id}>
                {editActive
                    ? <form onSubmit={editFormHandler}>
                        <input className="edit-input"
                               value={inputText}
                               onChange={(e) => setInputText(e.target.value)}
                               ref={input => input && input.focus()}
                        />
                        <p className="tip">Press "Enter" to update the task.</p>
                     </form>
                    : <p className={style}>{activity.activity_name}</p>}
            </div>
            <div className="buttons">
                <CheckBox
                    onClick={() => check(activity.id)} checked={activity.checked}
                />
                <EditButton
                    onClick={buttonClickHandler} isEditing={editActive}
                />
                <DeleteButton
                    onClick={() => destroy(activity.id)}
                />
                <div className="tooltip">
                    <div className="tooltipText">
                        <p>Updated:  {dateFormat(activity.updated_at, "mmmm dS, yyyy")}</p>
                    </div>
                    <p className="tooltipLetter">i</p>
                </div>
            </div>
        </div>
    )
}

export default Item
