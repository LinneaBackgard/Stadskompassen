export default function Options({ options, setOption, characterScores, setCharacterScores }) {
    return (
        <div>
            {options.map((option, index) => (
                <button onClick={() => {
                    setOption(index);
                    let scores = { ...characterScores };
                    for (let character of option.characters) {
                        if (scores[character]) {
                            scores[character]++;
                        } else {
                            scores[character] = 1;
                        }
                    }
                    setCharacterScores(scores);
                }}>{option.text}</button>
            ))}
        </div>
    );
}