/*
 * Created Date: Fri, 9th Jul 2021, 19:54:34 pm
*/

import React from "react";

const Link = ({ className, href, children }) => {

    const onClick = (e) => {
        if (e.metaKey || e.ctrlKey) {
            return;
        }
        e.preventDefault()
        window.history.pushState({}, "", href);
        const navEvent = new PopStateEvent("popstate");
        window.dispatchEvent(navEvent);
    }

    return (
        <a className={className} onClick={onClick} href={href}>
            {children}
        </a>
    )
}

export default Link;