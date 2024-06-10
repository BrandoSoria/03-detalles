import {useState} from 'react';

const State = () => {

    //nombramos los states y en lo azul ponemos el valor inicial
    const [state, setState] = useState(1);
    
    // el contsdor va aumentado de uno en uno pero infinitamente (mal)
    setInterval(() => {
        console.log(state);
        setState(state + 1);
        // y aqui cada 3 segundos aumenta y es mas controlado
    },3000);
   
    


  return (
    <div className="container text-center">
      <h1>useState</h1>
        <hr />
        Cuenta: {state}
    </div>
  );
}

export default State;
