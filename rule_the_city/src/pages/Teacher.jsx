import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

export default function Teacher({ setPage }) {
    return (
        <Container className="py-5 mx-auto" style={{ maxWidth: "1000px" }}>
            <div className="p-4 rounded-2 border bg-body-tertiary mb-4 border border-secondary">
                <h1 className="text-center fs-3 mb-2" style={{ color: "#33b9bdff" }}>Introduktion</h1>
            </div>
            <Card className="border border-secondary-subtle p-4">
                <Card.Title className="text-start fs-4 mb-3" style={{color: "#23a5aaff" }}>Vad är samhällsquizet?</Card.Title>
                <Card.Text className="fs-5">
                    Samhällsquizet är ett reflektionsverktyg som visar hur människor prioriterar värden när samhällsbeslut kräver kompromisser.
                    Det finns inga rätt eller fel svar. Resultatet är en beslutsprofil, inte en åsikt eller ett provresultat.
                </Card.Text>
                <Card.Title className="text-start fs-4 mb-3" style={{ color: "#23a5aaff" }}>Hur fungerar det??</Card.Title>
                <Card.Text className="fs-5">
                    Deltagaren möter vardagsnära samhällsdilemman (t.ex. skola, trygghet, klimat).
                    Varje svarsalternativ innebär både vinster och kostnader och stärker flera värden samtidigt.
                    <ul>
                        <li>Två värden är dominerande (2 poäng)</li>
                        <li>Övriga är närvarande (1 poäng)</li>
                    </ul>
                    Resultatet byggs över flera frågor och visar mönster i hur man fattar beslut
                </Card.Text>
                <Card.Title className="text-start fs-4 mb-3" style={{ color: "#23a5aaff" }}>Vad tränas?</Card.Title>
                <Card.Text className="fs-5">
                    <ul>
                        <li>konsekvenstänkande</li>
                        <li>förståelse för värdekonflikter</li>
                        <li>demokratiskt resonemang</li>
                        <li>reflektion kring ansvar, makt och legitimitet</li>
                    </ul>
                </Card.Text>
                <Card.Title className="text-start fs-4 mb-3" style={{ color: "#23a5aaff" }}>Hur kan det användas?</Card.Title>
                <Card.Text className="fs-5">
                    <ul>
                        <li>som diskussionsunderlag</li>
                        <li>som reflektion före/efter undervisning</li>
                        <li>som grund för skrivuppgift eller seminarium</li>
                    </ul>
                    Fokus ligger på resonemang – inte på ”rätt svar”.
                </Card.Text>
                <Card.Title className="text-start fs-4 mb-3" style={{ color: "#23a5aaff" }}>Lärarmaterial (PDF)</Card.Title>
                <Card.Text className="fs-5 mb-5">
                    Här finns en nedladdningsbar handledarguide som fördjupar quizets syfte, metod och pedagogiska användning.
                    Guiden innehåller bakgrund, lärandemål, metodförklaring, karaktärsöversikt samt konkreta förslag på hur quizet kan användas i undervisning eller gruppsamtal.
                    <br /> <br /> Handledarguiden finns här (PDF): <a className="mb-4" href={import.meta.env.BASE_URL + "Handledarguide_Stadskompassen.pdf"} style={{ color: "#3465a4" }}>Lärarhandledning</a>
                </Card.Text>
                <button className="btn fs-5" style={{ backgroundColor: "#72cccf" }} onClick={() => setPage("start")}>Tillbaka till startsidan</button>
            </Card>
        </Container>
    )
}