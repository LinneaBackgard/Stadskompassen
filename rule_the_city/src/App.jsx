import { useState } from 'react';
import './App.css';
import Question from './pages/Question.jsx';

export default function App() {
    const [characterScores, setCharacterScores] = useState({});

    return (
        <div>
            <Question
                characterScores={characterScores}
                setCharacterScores={setCharacterScores}
            ></Question>
            {Object.keys(characterScores).map(key => (<p>{key}: {characterScores[key]}</p>))}
        </div>
    );
}