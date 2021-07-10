/*
 * Created Date: Fri, 9th Jul 2021, 19:43:42 pm
*/

import { useEffect, useState } from "react";

const Route = ({ path, children }) => {

    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname)
        };
        window.addEventListener("popstate", onLocationChange, { capture: true });

        return () => {
            window.removeEventListener("popstate", onLocationChange, { capture: true })
        }

    }, [])
    return currentPath === path ? children : null;
}

export default Route;