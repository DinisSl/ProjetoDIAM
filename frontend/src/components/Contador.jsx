import { useState, useEffect } from "react";

const Contador = () => {

    const dataEvento = new Date("2026-12-31T23:59:59");

    const calcularTempoRestante = () => {
        const agora = new Date();
        const diferenca = dataEvento - agora;

        if (diferenca <= 0) {
            return {
                dias: 0,
                horas: 0,
                minutos: 0,
                segundos: 0
            };
        }

        return {
            dias: Math.floor(diferenca / (1000 * 60 * 60 * 24)),
            horas: Math.floor((diferenca / (1000 * 60 * 60)) % 24),
            minutos: Math.floor((diferenca / (1000 * 60)) % 60),
            segundos: Math.floor((diferenca / 1000) % 60)
        };
    };





    const [tempo, setTempo] = useState(calcularTempoRestante());

    useEffect(() => {
        const intervalo = setInterval(() => {
            setTempo(calcularTempoRestante());
        }, 1000);


        return () => clearInterval(intervalo);
    }, []);

    return (
        <div id="contador">
            Faltam {tempo.dias}d : {tempo.horas}h : {tempo.minutos}m : {tempo.segundos}s
        </div>
    );
};

export default Contador;