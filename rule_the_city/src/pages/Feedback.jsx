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
        <Container className="min-vh-100 d-flex justify-content-center align-items-center">
            <Card style={{ width: "100%", maxWidth: "64rem" }}>
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
                            <Card.Text className="fs-5">
                                {feedbackText.split("\n").map((line, index) => {
                                    if (line.trim() === "") {
                                        return <div key={index} style={{ height: "0.75rem" }} />;
                                    }
                                    if (line.startsWith("Kärna:")) {
                                        const rest = line.replace("Kärna:", "").trim();
                                        return (
                                            <div key={index}>
                                                <strong>Kärna:</strong> {rest}
                                            </div>
                                        );
                                    }
                                    if (line.startsWith("Risk:")) {
                                        const rest = line.replace("Risk:", "").trim();
                                        return (
                                            <div key={index}>
                                                <strong>Risk:</strong> {rest}
                                            </div>
                                        );
                                    }
                                    return <div key={index}>{line}</div>;
                                })}
                            </Card.Text>

                            <div className="d-flex justify-content-end mt-3">
                                <Button variant="primary" onClick={handleNext}>
                                    Nästa
                                </Button>
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