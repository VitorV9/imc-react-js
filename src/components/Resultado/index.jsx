const Resultado = ({ imc, classificacao }) => {
    return (
        <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
            <h2>Seu IMC: {imc}</h2>
            <h3>Classificação: {classificacao}</h3>
        </div>
    )
}

export default Resultado;