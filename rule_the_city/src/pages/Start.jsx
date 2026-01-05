import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

export default function Start({ setPage }) {
    return (
        <Container className="py-5 mx-auto" style={{ maxWidth: "1000px" }}>
            <Card className="border border-secondary-subtle p-4">
                <p style={{textAlign: "right"}}>Svenska / <a href="https://linneabackgard.github.io/Stadskompassen_ENG" style={{ color: "#3465a4" }}>English</a></p>
                <Card.Title className="text-center fs-2 mt-1 mb-4" style={{color: "#33b9bdff"}}>Stadskompassen</Card.Title>
                <Card.Text className="fs-5 fw-bold">Välkommen!</Card.Text>
                <Card.Text className="fs-5">
                    Alla samhällen formas av beslut.
                    Vissa tas i mötesrum, andra i korridorer, på raster, i vardagen.
                    Det här är ett spel om hur val känns – inte bara hur de låter.
                    Du kommer att ställas inför situationer som på ytan kan verka enkla, men där varje vägval bär på konsekvenser. Det finns inga perfekta svar. Bara olika sätt att ta ansvar.
                </Card.Text>

                <details className="mb-3 mt-3">
                    <summary className="fs-4" style={{color: "#23a5aaff"}}>Vad är det här?</summary>
                    <Card.Text className="fs-5">
                        Detta är ett interaktivt samhällsspel med vardagsnära scenarier om
                        skola, trygghet, ansvar, makt och tillit. Efter varje val får du
                        feedback som visar hur beslutet kan landa i praktiken.
                    </Card.Text>

                    <Card.Text className="fs-5">
                        Valen kan ha både fördelar och nackdelar – och olika personer kan
                        uppleva dem på olika sätt. Spelet är gjort för reflektion och samtal,
                        inte för att hitta “rätt svar”.
                    </Card.Text>
                </details>

                <details className="mb-3">
                    <summary className="fs-4" style={{color: "#23a5aaff"}}>Karaktärer/ledartyper</summary>
                    <Card.Text className="fs-5">
                        I spelet finns flera ledartyper. De är inspirerade av psykologiska
                        arketyper och vanliga samhällsroller – alltså olika sätt människor
                        brukar leda, skydda, kontrollera, lyssna eller driva förändring.
                    </Card.Text>

                    <Card.Text className="fs-5">
                        Vilken typ som växer fram beror på dina val. Resultatet visar vilka
                        värden du oftast prioriterar när beslut blir svåra. Se det som ett
                        underlag för reflektion och diskussion, snarare än en etikett.
                    </Card.Text>
                </details>

                <details className="mb-3">
                    <summary className="fs-4" style={{color: "#23a5aaff"}}>Hur funkar det?</summary>
                    <Card.Text className="fs-5">
                        Du gör val i varje scenario och får se hur andra kan uppleva det.
                        Efter flera val får du ett resultat som visar vilken ledartyp du
                        mest liknar – och vilka konsekvenser den stilen ofta kan få över tid.
                    </Card.Text>
                </details>

                <Card.Text>
                    <a href="#" className="mb-3" style={{ color: "#3465a4" }} onClick={() => setPage("teacher")}>För lärare/handledare</a>
                </Card.Text>

                <Card.Img src={import.meta.env.BASE_URL + "startsida pic.png"} />

                <Card.Text className="text-center fs-3 mt-5" style={{color: "#23a5aaff"}}>Redo?</Card.Text>
                <Card.Text className="fs-5">
                    Spela som du faktiskt gör – inte som du borde.
                </Card.Text>
                <button className="btn fs-5" style={{backgroundColor: "#72cccf"}} onClick={() => setPage("question")}>Starta spelet</button>
            </Card>
        </Container>
    );
}