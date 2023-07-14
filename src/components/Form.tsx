import { useState } from 'react';

function Form() {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [nome, setNome] = useState('');
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [url, setUrl] = useState('');

  const isPasswordValid = (password: string) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;
    return passwordRegex.test(password);
  };

  const isFormValid = () => {
    return (
      nome.trim().length > 0
      && login.trim().length > 0
      && senha.trim().length > 0
      && isPasswordValid(senha)
    );
  };

  return (
    <>
      { showForm
      && (
        <form>
          <label>
            Nome do serviço
            <input
              type="text"
              name="nome"
              value={ nome }
              onChange={ (element) => setNome(element.target.value) }
            />
          </label>

          <label>
            Login
            <input
              type="text"
              name="login"
              value={ login }
              onChange={ (element) => setLogin(element.target.value) }
            />
          </label>

          <label>
            Senha
            <input
              type="password"
              name="senha"
              value={ senha }
              onChange={ (element) => setSenha(element.target.value) }
            />
          </label>

          <label>
            URL
            <input
              type="text"
              name="url"
              value={ url }
              onChange={ (element) => setUrl(element.target.value) }
            />
          </label>
          <button disabled={ !isFormValid() }>
            Cadastrar
          </button>
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
