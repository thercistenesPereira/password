import { useState } from 'react';

function Form() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      { showForm
      && (
        <form>
          <label>
            Nome do serviço
            <input type="text" />
          </label>

          <label>
            Login
            <input type="text" />
          </label>

          <label>
            Senha
            <input type="password" name="" id="" />
          </label>

          <label>
            URL
            <input type="text" />
          </label>
          <button>Cadastrar</button>
          <button onClick={ () => setShowForm(false) }>Cancelar</button>
        </form>)}

      { !showForm
      && (
        <button onClick={ () => setShowForm(true) }>
          Cadastrar nova senha
        </button>)}
    </>
  );
}

export default Form;
