import React, { useState, useEffect } from "react";
import AddButton from "./AddButton";
import Item from "./Item";
import {destroyDataAxios, editDataAxios, getDataAxios, postDataAxios, checkDataAxios} from "./services/todo";

const Container: React.FunctionComponent<any> = () => {

    const [inputText, setInputText] = useState("");
    const [activities, setActivities] = useState('');
    const [checked, setChecked] = useState(false);

    const handleSubmit: React.FunctionComponent<any> = e => {
        e.preventDefault();
        if (!inputText)
            alert("You didn't write anything :(");
        postDataAxios(inputText).then(() => {
            console.log(inputText)
            setInputText("");
            getDataAxios().then((todos) => setActivities(todos))
        })
    };

    const handleDelete = (id) => {
        destroyDataAxios(id).then(() => {
                getDataAxios().then((todos) => setActivities(todos))
            }
        )
    }

    const handleEdit = (e,inputText, id) => {
        e.preventDefault();
        // if (!inputText)
        //     alert("You can't edit your task to empty. There's a Delete button for that.");
        editDataAxios(inputText, id).then(() => {
            getDataAxios().then((todos) => setActivities(todos))
        })
    }

    const handleChecked = (id) => {
        const newValue = !checked;

        setChecked(newValue);

        checkDataAxios(id, newValue).then(() => {
            getDataAxios().then((todos) => setActivities(todos))
        })
    };

    useEffect(async () => {
        getDataAxios().then((todos) =>  setActivities(todos));
    }, []);

    return (
        <div className="root">
            <div className="container">
                <div className="top">
                    <h1 className="title">What do we need to do?</h1>
                    <form onSubmit={handleSubmit}><input type="text" className="inputArea" placeholder="Example: Empty the dishwasher" value={inputText}
                                 onChange={e => setInputText(e.target.value)}/></form>
                    <AddButton onClick={handleSubmit} />
                </div>
                <div className="middle">
                    <div className="checkAndItem">
                        {!activities.length && (<div className="item">
                            <p className="todo-item">Your activities will show up here.</p>
                        </div>)}
                        {activities.length > 0 && activities.map((activity, index) => (
                        <Item
                            key={index}
                            activity={activity}
                            destroy={handleDelete}
                            edit={handleEdit}
                            check={handleChecked}
                        />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Container;
