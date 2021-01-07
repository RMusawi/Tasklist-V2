import React, {useState, useEffect} from "react";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import CheckBox from "./CheckBox";

const Item: React.FunctionComponent<any> = ({activity, destroy, edit, check}) => {
    const [editActive, setEditActive] = useState(false);
    const [inputText, setInputText] = useState("");

    useEffect(() => {
        setInputText(activity.activity_name)
    },[activity])

    let style = "todo-item " + (activity.checked ? 'checkbox-done' : 'checkbox-null');
        return (
            <div className="item-container">
                <hr className="stripe"/>
                <div className="item" key={activity.id}>
                    {editActive ?
                        <form onSubmit={(e) => edit(e, inputText, activity.id)}>
                            <input className="edit-input"
                                   value={inputText}
                                   onChange={(e) => setInputText(e.target.value)}
                            />
                        </form>

                    : <p className={style}>{activity.activity_name}</p>}
                </div>
                <div className="buttons">
                    <CheckBox
                        onClick={() => check(activity.id)} checked={activity.checked}
                    />
                    <EditButton
                        onClick={() => setEditActive(true)}
                    />
                    <DeleteButton
                        onClick={() => destroy(activity.id)}
                    />
                </div>
            </div>
        )
}

export default Item
