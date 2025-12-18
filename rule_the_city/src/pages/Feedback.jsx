export default function Feedback({ text, setOption, question, setQuestion }) {
    return (
        <div>
            {text}
            <button onClick={() => {
                setOption(-1);
                setQuestion(question + 1);
            }}>Nästa</button>
        </div>
    );
}