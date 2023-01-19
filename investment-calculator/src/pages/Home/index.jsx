import {useForm} from "react-hook-form";
import axios from "axios";
import { useMutation } from "react-query";
import "./style.css"

const Home = () => {
    const {register, handleSubmit} = useForm();
    
    const {isLoading, isError, data, mutate} = useMutation((dataForm) => {
        return axios.post("https://frontend-challenge-7bu3nxh76a-uc.a.run.app/", dataForm)
        .then(({data}) => data)
        
    })

    if (isLoading) {
        return <div className="loader">
            <span>Loading...</span>
        </div>;
    }

    if (isError) {
        return (
            <div>
                <h2 className='error'>Algo deu errado!!!</h2>
            </div>
    )}

    const onSubmit = (data) => {
        mutate(data)
    }   

    return (
        <div className="App">
            <div className="container">
                <div className="simulator">
                    <h2>Simule sua Antecipação</h2>
                    <form className="formSimulator">
                        <label className="label" htmlFor="amount">Informe o valor da venda *</label>
                        <input className="input" type="number" min="0.00" step="0.01" id="amount" {... register("amount")} />

                        <label className="label" htmlFor="installments">Em quantas parcelas *</label>
                        <input className="input" type="number" id="installments" {... register("installments")} />

                        <p>Máximo de 12 parcelas</p>

                        <label className="label" htmlFor="mdr">Informe o percentual de MDR *</label>
                        <input className="input" type="number" id="mdr" {... register("mdr")} />
                    </form>
                    <div className="divButton">
                        <button className="grow_spin" type="submit" onClick={handleSubmit(onSubmit)}>Enviar</button>
                    </div>
                </div>
                
                <div className="resultSimulator">
                    <div className="titleData">
                        <h3><i>VOCÊ RECEBERÁ:</i></h3>
                    </div>
                    <div className="dataSimulator">
                        <ul className="ulDaysAntecipation">
                            <li><i>Amanhã:</i></li>
                            <li><i>Em 15 dias:</i></li>
                            <li><i>Em 30 dias:</i></li>
                            <li><i>Em 90 dias:</i></li>
                        </ul>
                        <ul className="ulValuesAntecipation">
                            {!data ? (
                                <>
                                <li><i>R$ 0,00</i></li>
                                <li><i>R$ 0,00</i></li>
                                <li><i>R$ 0,00</i></li>
                                <li><i>R$ 0,00</i></li>
                                </>
                            )
                        : 
                        (
                            <>
                            <li><i>{data["1"].toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</i></li>
                            <li><i>{data["15"].toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</i></li>
                            <li><i>{data["30"].toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</i></li>
                            <li><i>{data["90"].toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</i></li>
                            </>
                        )
                        } 
                            
                        </ul>
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default Home;