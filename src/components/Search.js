/*
 * Created Date: Thu, 8th Jul 2021, 23:37:34 pm
*/

import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

const Search = (props) => {
    // MARK: - Initial values static & local state
    const debounceSeconds = 1;
    const wikipediaBaseUrl = "https://en.wikipedia.org";

    const [inputValue, setInputValue] = useState("");
    const [results, setResults] = useState([]);

    // MARK: - Request Logic 
    const makeSearchRequest = useCallback((query) => {
        if (!query) {
            return
        }
        const url = `${wikipediaBaseUrl}/w/api.php`;
        axios.get(url, {
            params: {
                action: "query",
                list: "search",
                origin: "*",
                format: "json",
                srsearch: query
            }
        }).then(res => {
            const data = res.data.query.search || [];
            setResults(data)
        }).catch(err => { }).finally(() => {
        })
    }, []);

    useEffect(() => {
        if (!inputValue) {
            setResults([]);
        }
        const timerId = setTimeout(makeSearchRequest(inputValue), debounceSeconds * 1000)
        return () => {
            clearTimeout(timerId);

        }
    }, [inputValue, makeSearchRequest])


    // MARK: - User Actions
    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    // MARK: - Rendering
    const renderedResults = results.map((item, index) => {
        return (
            <div className="item" key={item.pageid}>
                <div className="right floated content">
                    <a className="ui button" href={`{${wikipediaBaseUrl}?curid=${item.pageid}`}>Go!</a>
                </div>
                <div className="content">
                    <div className="header">
                        {item.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: item.snippet }}>

                    </span>
                </div>
            </div>
        )
    })

    return (
        <div className="ui form">
            <div className="field">
                <label>Edit Search Term</label>
                <input className="input" onChange={handleChange} value={inputValue}></input>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
}

export default Search;