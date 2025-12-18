import { useState } from 'react';
import questions from '../data/questions.json';
import Options from './Options.jsx';
import Feedback from './Feedback.jsx';

export default function Question({ characterScores, setCharacterScores }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [currentOption, setCurrentOption] = useState(-1);

    return (
        <div>
            <h2>{questions[currentQuestion].scenario}</h2>
            {currentOption < 0 ?
                <Options
                    options={questions[currentQuestion].options}
                    setOption={setCurrentOption}
                    characterScores={characterScores}
                    setCharacterScores={setCharacterScores}
                ></Options> :
                <Feedback
                    text={questions[currentQuestion].options[currentOption].feedback}
                    setOption={setCurrentOption}
                    question={currentQuestion}
                    setQuestion={setCurrentQuestion}
                ></Feedback>
            }
        </div>
    );
}