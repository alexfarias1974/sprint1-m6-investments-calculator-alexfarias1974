// import Calculator from "./components/Calculator";
import {useForm} from "react-hook-form";


const Home = () => {
    const {register} = useForm();
    return (
        <div className="App">
            <div className="container">
                <div className="formSimulator">
                    <h2>Simule sua Antecipação</h2>
                    <form>
                        <label htmlFor="saleValue">Informe o valor da venda *</label>
                        <input type="number" id="saleValue" {... register("saleValue")} />

                        <label htmlFor="installments">Em quantas parcelas *</label>
                        <input type="number" id="installments" {... register("installments")} />

                        <p>Máximo de 12 parcelas</p>

                        <label htmlFor="mdrTax">Em quantas parcelas *</label>
                        <input type="number" id="mdrTax" {... register("mdrTax")} />
                    </form>
                </div>
                    <h3><i>VOCÊ RECEBERÁ:</i></h3>
                    <ul>
                        <li><i>Amanhã</i></li>
                        <li><i>Em 15 dias:</i></li>
                        <li><i>Em 30 dias:</i></li>
                        <li><i>Em 90 dias:</i></li>
                    </ul>
                    <ul>
                        <li><i>R$ 0,00</i></li>
                        <li><i>R$ 0,00</i></li>
                        <li><i>R$ 0,00</i></li>
                        <li><i>R$ 0,00</i></li>
                    </ul>
                <div className="resultSimulator"></div>
                {/* <Calculator /> */}
            </div>
        </div>
    )
}

export default Home;