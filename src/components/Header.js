/*
 * Created Date: Fri, 9th Jul 2021, 19:49:10 pm
*/

import React from "react";
import Link from "./Link";

const Header = () => {
    return <div className="ui secondary pointing menu">
        <Link className="item" href="/">Accordion</Link>
        <Link className="item" href="/list">List</Link>
        <Link className="item" href="/dropdown">Dropdown</Link>
        <Link className="item" href="/translate">Translate</Link>
    </div>
}

export default Header;