import React, { useState } from "react";
import './Dictionary.css';
export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    /**
     * Handles the form submission event.
     * Triggers an alert with the message "Search".
     */
    function search() {
        // Trigger an alert with the message "Search"
        alert(`searching for ${keyword} definition`);
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