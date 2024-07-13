import React, { useState, useEffect } from "react";
import axios from "axios";
import Results from "./Results";
import Phonetics from "./Phonetics";
import Photos from "./Photos";

import './Dictionary.css';

export default function Dictionary(props) {
    const [keyword, setKeyword] = useState(props.defaultKeyword);
    const [results, setResults] = useState(null);
    const [phonetics, setPhonetics] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [photos, setPhotos] = useState([]);
    const [backgroundImage, setBackgroundImage] = useState(null);

    useEffect(() => {
        if (!loaded) {
            search(props.defaultKeyword);
            setLoaded(true);
        }
    }, [loaded, props.defaultKeyword]);

    async function handleResponse(response) {
        setResults(response.data);
        const imagesApiKey = "3doat099fbcfb24e74ea400f10f43b8a";
        const imagesApiURL = `https://api.shecodes.io/images/v1/search?query=${response.data.word}&key=${imagesApiKey}`;
        const headers = { Authorization: `Bearer ${imagesApiKey}` };

        axios
            .get(imagesApiURL, { headers: headers })
            .then(handleImages);
    }

    async function handlePhonetics(response) {
        const phoneticData = response.data[0]?.phonetics || [];
        const filteredPhonetics = phoneticData.filter(phonetic => phonetic.audio && phonetic.text);
        setPhonetics(filteredPhonetics);
    }

    function handleImages(response) {
        const photosData = response.data.photos;
        setPhotos(photosData);
        if (photosData.length > 0) {
            setBackgroundImage(photosData[0].src.landscape);
        }
    }

    async function search(searchKeyword) {
        setPhonetics(null); // Clear previous phonetics
        const apiKey = "3doat099fbcfb24e74ea400f10f43b8a";
        const apiURL = `https://api.shecodes.io/dictionary/v1/define?word=${searchKeyword}&key=${apiKey}`;

        try {
            const response = await axios.get(apiURL);
            await handleResponse(response);

            const apiURL2 = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchKeyword}`;
            const phoneticsResponse = await axios.get(apiURL2);
            await handlePhonetics(phoneticsResponse);
        } catch (error) {
            console.error("Error fetching data from APIs:", error);
        }

    }

    function handleSubmit(event) {
        event.preventDefault();
        search(keyword);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    if (!loaded) {
        return "Loading...";
    }

    return (
        <div className="Dictionary" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
            <section>
                <header className="App-header">
                    <h1>Dictionary</h1>
                </header>
                <form onSubmit={handleSubmit}>
                    <h4>What word do you want to look up?</h4>
                    <div className="row">
                        <div className="col-md-9">
                            <input type="search" className="form-control Input" autoFocus={true} placeholder="Enter a word..." value={keyword} onChange={handleKeywordChange} />
                            <div className="hint">Suggests words: sunset, book, water, chocolate....</div>
                        </div>
                        <div className="col-md-3">
                            <input className="btn btn-primary Button" type="submit" value="Search" />
                        </div>
                    </div>
                </form>
            </section>
            {results && <Results results={results} />}

            {phonetics && phonetics.map((phonetic, index) => (
                <Phonetics key={index} phonetic={phonetic} />
            ))}
            <Photos photos={photos} />
        </div>
    );
}
