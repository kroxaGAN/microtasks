import React from 'react';
import './App.css';
import {Header} from "./Components/Header";
import {Body} from "./Components/Body";
import {Foter} from "./Components/Foter";

function App() {
    return (
        <div className="App">
            <Header title={"New header"}/>
            <Body title={"New body"}/>
            <Foter title={"New foter"}/>
        </div>
    );
}

export default App;
