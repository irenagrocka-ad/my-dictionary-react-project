import React, { useState } from "react";
import axios from "axios";
import './Dictionary.css';
export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    function handleResponse(response) {
        console.log(response.data);
    }
    function search(event) {
        event.preventDefault(); // Prevent the form from submitting
        // Trigger an alert with the message "Search"
        alert(`searching for ${keyword} definition`);
        // Documentation https://www.shecodes.io/learn/apis/dictionary 
        let apiKey = "3doat099fbcfb24e74ea400f10f43b8a";
        let apiURL = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

        axios.get(apiURL).then(handleResponse)
    }

    function handleKeywordChange(event) {
        //console.log(event.target.value);
        setKeyword(event.target.value);
    }

    return (
        <form onSubmit={search}>
            <input type="search" autoFocus={true} placeholder="Enter a word..." onChange={handleKeywordChange} />
            <input type="submit" value="Search" />
        </form>
    );
}