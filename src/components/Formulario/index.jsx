const Formulario = ({ altura, peso, setAltura, setPeso }) => {
    return (
        <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
            <div>
                <label>Altura (ex: 1.75): </label>
                <input 
                    type="number" 
                    step="0.01"
                    value={altura} 
                    onChange={(e) => setAltura(parseFloat(e.target.value) || '')} 
                />
            </div>
            
            <div>
                <label>Peso (kg): </label>
                <input 
                    type="number" 
                    step="0.1"
                    value={peso} 
                    onChange={(e) => setPeso(parseFloat(e.target.value) || '')} 
                />
            </div>
        </form>
    )
}

export default Formulario;