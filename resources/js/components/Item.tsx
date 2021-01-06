import React, {useState} from "react";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import CheckBox from "./CheckBox";

const Item: React.FunctionComponent<any> = ({activities, destroy, edit, check,}) => {
    const [editActive, setEditActive] = useState(false);

    if (activities.length > 0) {
        return (
            activities.map((activity, index) => {
                let style = "todo-item " + (activity.checked ? 'checkbox-done' : 'checkbox-null')

                return (
                    <div className="item-container" key={index}>
                        <hr className="stripe"/>
                        <div className="item" key={activity.id}>
                            <p className={style}>{activity.activity_name}</p>
                        </div>
                        <div className="buttons">
                            <CheckBox
                                onClick={() => check(activity.id)} checked={activity.checked}
                            />
                            <EditButton
                                onClick={() => edit(activity.id)}
                                //() => edit(activity.activity_name)
                            />
                            <DeleteButton
                                onClick={() => destroy(activity.id)}
                            />
                        </div>
                    </div>
                )
            })
        )
    } else {
        return (
            <div className="item">
                <p className="todo-item">Your activities will show up here.</p>
            </div>
        )
    }
}

export default Item
