import React from "react";

const CheckBox: React.FunctionComponent<any> = (props) => {
    return (
        <div>
            <form>
                <div className="CheckContainer">
                    <input id="check-1" type="checkbox" className="checkbox" checked={props.checked} onChange={props.onClick}/>
                </div>
            </form>
        </div>
    )
}

export default CheckBox;
