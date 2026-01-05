import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export default function Feedback({
    feedbackText,
    option,
    setOption,
    questionIndex,
    maxQuestionIndex,
    setQuestionIndex,
    setPage,
}) {
    const handleNext = () => {
        if (questionIndex >= maxQuestionIndex) {
            setPage("result");
            return; // viktigt så ni inte ökar index efter result
        }
        setOption(-1);
        setQuestionIndex(questionIndex + 1);
    };

    return (
        <Container className="g-0">
            <Card className="border border-secondary-subtle">
                <div className="row g-0">
                    <div className="col-md-6">
                        <Card.Img
                            src={import.meta.env.BASE_URL + "feedbackimages/" + option.image}
                            alt=""
                            style={{
                                width: "100%",
                                height: "100%",
                                minHeight: "320px",
                                objectFit: "cover",
                            }}
                        />
                    </div>

                    <div className="col-md-6">
                        <Card.Body className="p-4 text-start">
                            <div className="p-4 rounded-2 border mb-4" style={{backgroundColor: "#f0efefff"}}>
                                <Card.Title className="fs-6" style={{color: "#d09a1dff"}}>Ditt val: {option.button}</Card.Title>
                                <Card.Text className="fs-6">{option.text}</Card.Text>
                            </div>
                            <Card.Title className="fs-5 text-center" style={{color: "#23a5aaff"}}>Konsekvens</Card.Title>
                            <Card.Text className="fs-6">
                                {feedbackText.split("\n").map((line, index) => {
                                    if (line.trim() === "") {
                                        return <div key={index} style={{ height: "0.75rem" }} />;
                                    }
                                    if (line.startsWith("Kärna:")) {
                                        const rest = line.replace("Kärna:", "").trim();
                                        return (
                                            <div key={index}>
                                                <strong style={{color: "#23a5aaff"}}>Kärna:</strong> {rest}
                                            </div>
                                        );
                                    }
                                    if (line.startsWith("Risk:")) {
                                        const rest = line.replace("Risk:", "").trim();
                                        return (
                                            <div key={index}>
                                                <strong style={{color: "#23a5aaff"}}>Risk:</strong> {rest}
                                            </div>
                                        );
                                    }
                                    return <div key={index}>{line}</div>;
                                })}
                            </Card.Text>

                            <div className="d-flex justify-content-end mt-5">
                                <button className="btn" style={{backgroundColor: "#72cccf"}} onClick={handleNext}>
                                    Nästa
                                </button>
                            </div>
                        </Card.Body>
                    </div>
                </div>
            </Card>


        </Container>
    );
}




//export default function Feedback({ feedbackText, option, setOption, questionIndex, maxQuestionIndex, setQuestionIndex, setPage }) {
//    return (
//        <div>
//            <p>{option.button}</p>
/*//            <img src={import.meta.env.BASE_URL + "feedbackimages/" + option.image } />*/
//            <p><b>{feedbackText}</b></p>
//            <button onClick={() => {
//                if (questionIndex >= maxQuestionIndex) {
//                    setPage("result")
//                }
//                setOption(-1);
//                setQuestionIndex(questionIndex + 1);
//            }}>Nästa</button>
//        </div>
//    );
//}