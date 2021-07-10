/*
 * Created Date: Thu, 8th Jul 2021, 22:55:05 pm
*/

import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Translate from "./components/Translate";
import Route from "./components/Route"
import Header from "./components/Header"

const items = [
    { title: "How is it going?", content: "You know it." },
    { title: "What about tomorrow?", content: "You know it." },
    { title: "How is the best world in the world?", content: "The world of the worlds is the best place to be." }
]

const options = [
    { label: "Violet", value: "rgba(195, 180, 223, 1)" },
    { label: "Indigo", value: "rgba(34, 16, 75, 1)" },
    { label: "Emerald", value: "rgba(63, 83, 69, 1)" },
    { label: "Sands", value: "rgba(246, 245, 242, 1)" }
]

const App = () => {

    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <>
                    <Dropdown options={options} selected={selected} onSelectedChange={setSelected} />
                    <p style={{ margin: 15 }} >The selected color is {selected.label}</ p>
                    <div style={{ margin: 15, height: 100, width: 100, backgroundColor: selected.value }}>
                    </div>
                </>
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>

        </div>
    )
}

export default App;