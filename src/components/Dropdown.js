/*
 * Created Date: Fri, 9th Jul 2021, 12:56:01 pm
*/

import React, { useEffect, useState, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange, label = "Choose:" }) => {
    // MARK: - Initial values & state
    const [open, setOpen] = useState(false);
    const ref = useRef()

    // MARK: - Methods
    useEffect(() => {
        const onBodyClick = (event) => {
            if (ref.current.contains(event.target)) {
                return;
            }
            setOpen(false)
        }
        document.body.addEventListener("click", onBodyClick, { capture: true })
        return () => {
            document.body.removeEventListener("click", onBodyClick, { capture: true })
        }
    }, [])

    // MARK: - Render
    const renderedOptions = options.map(option => {
        if (option.value === selected.value) {
            return null
        }
        return (
            <div key={option.value} className="item" onClick={() => onSelectedChange(option)}>
                {option.label}
            </div>
        )
    })

    const selectionOpenClass = open ? "visible active" : "";
    const menuOpenClass = open ? "visible transition" : "";

    return (
        <div className="ui form" ref={ref}>
            <div className="field" onClick={() => setOpen(!open)}>
                <label className="label" >{label}</label>
                <div className={`ui selection dropdown ${selectionOpenClass}`}>
                    <i className="dropdown icon">
                    </i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${menuOpenClass}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown;