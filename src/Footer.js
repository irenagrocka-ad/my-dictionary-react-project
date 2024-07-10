import React from "react";
import "./Footer.css"

export default function Footer() {

    return (
        <div className="Footer mt-5">
            <p>
                This project was coded by {''}
                <a href="https://github.com/irenagrocka-ad" target="_blank" rel="noreferrer"
                >Irena Grocka</a
                >
                {''} and is {''}
                <a
                    href="https://github.com/irenagrocka-ad/my-dictionary-react-project"
                    target="_blank" rel="noreferrer"
                >
                    on GitHub</a
                >
                {''} and {''}
                <a href="https://ika-dictionary.netlify.app/" target="_blank" rel="noreferrer"
                >hosted on Netlify</a
                >
            </p>
        </div>
    );
}