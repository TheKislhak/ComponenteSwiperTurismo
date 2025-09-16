import Btn from "../Btn/Btn";
import "./Hero.css"
export default function Hero() {
    return (
        <section className="section-hero">
            <h1>Venha conhecer novos Mundos nessa odisseia incrível!</h1>
            <p>Hospedagens exclusivas pacotes a partir de R$ 3.500,00</p>
            <Btn name="Quero conhecer!" />

        </section>
    );
}