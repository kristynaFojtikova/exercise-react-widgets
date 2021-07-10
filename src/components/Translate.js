/*
 * Created Date: Fri, 9th Jul 2021, 14:36:07 pm
*/

import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
    { label: "Afrikaans", value: "af" },
    { label: "Arabic", value: "ar" },
    { label: "Hindi", value: "hi" },

]

const Translate = () => {
    const [language, setLanguage] = useState(options[0])
    const [text, setText] = useState("")

    const handleTextChange = (event) => {
        setText(event.target.value)
    }
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label >Type:</label>
                    <input value={text} onChange={handleTextChange} />
                </div>
            </div>
            <Dropdown options={options} selected={language} onSelectedChange={setLanguage} label={"Choose language:"} />
            <hr />
            <h3 className="ui header">Output: </h3>
            <Convert text={text} language={language} />
        </div>
    )
}

export default Translate;