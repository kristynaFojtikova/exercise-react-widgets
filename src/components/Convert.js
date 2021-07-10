/*
 * Created Date: Fri, 9th Jul 2021, 14:49:32 pm
*/

import axios from "axios";
import React, { useEffect, useState } from "react";

const Convert = ({ text, language }) => {
    // MARK: Initial values & state
    const translateUrl = "https://translation.googleapis.com/language/translate/v2"
    const debounceSeconds = 2;
    const [translatedText, setTranslatedText] = useState("")
    const [debounceText, setDebounceText] = useState(text)

    // MARK: Request logic
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebounceText(text);
        }, debounceSeconds * 1000);

        return () => {
            clearTimeout(timerId);
        }

    }, [text])

    useEffect(() => {
        const requestTranslation = () => {
            if (!debounceText) {
                setTranslatedText("")
                return;
            }
            axios.post(translateUrl, {}, {
                params: {
                    q: debounceText,
                    target: language.value,
                    key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"

                }
            }).then(res => {
                console.log(res)
                const { data } = res;
                const translation = data.data.translations[0].translatedText
                setTranslatedText(translation)
            }
            ).catch(err => { }).finally(() => {

            })
        }
        requestTranslation()
    }, [debounceText, language])

    // MARK: Render
    return (
        <div>
            <h1 className="ui header">
                {translatedText}
            </h1>
        </div>
    )

}

export default Convert;