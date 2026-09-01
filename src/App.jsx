import { useState } from 'react';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');

  const calcularIMC = () => {
    if (altura > 0 && peso > 0) {
      const alturaEmMetros = altura > 3 ? altura / 100 : altura;
      
      const imc = peso / (alturaEmMetros * alturaEmMetros);
      return imc.toFixed(2);
    }
    return null;
  };

  const classificarIMC = (imc) => {
    if (!imc) return '';
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc >= 18.5 && imc < 24.9) return 'Peso normal';
    if (imc >= 25 && imc < 29.9) return 'Sobrepeso';
    if (imc >= 30 && imc < 34.9) return 'Obesidade grau 1';
    if (imc >= 35 && imc < 39.9) return 'Obesidade grau 2';
    return 'Obesidade grau 3';
  };

  const valorIMC = calcularIMC();
  const classificacao = classificarIMC(valorIMC);

  return (
    <div className="container" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Calculadora de IMC</h1>
      
      <Formulario 
        altura={altura} 
        peso={peso} 
        setAltura={setAltura} 
        setPeso={setPeso} 
      />

      {valorIMC && (
        <Resultado imc={valorIMC} classificacao={classificacao} />
      )}
    </div>
  );
}

export default App;