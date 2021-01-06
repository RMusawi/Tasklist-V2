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

    const handleEdit = (id) => {
        editDataAxios(id).then(() => {
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
                        <Item activities={activities} destroy={handleDelete} edit={handleEdit} check={handleChecked}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Container;
