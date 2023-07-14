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

  const validPassword = 'valid-password-check';
  const invalidPassword = 'invalid-password-check';

  const getPasswordLengthClassName = () => {
    const lengthString = senha.trim().length;
    return (lengthString >= 8 && lengthString <= 16) ? validPassword : invalidPassword;
  };

  const getPasswordCharactersClassName = () => {
    const containsLettersAndNumbers = /^(?=.*[A-Za-z])(?=.*\d)/.test(senha);
    return (containsLettersAndNumbers) ? validPassword : invalidPassword;
  };

  const getPasswordSpecialCharacterClassName = () => {
    const containsSpecialCharacter = /[@$!%*#?&]/.test(senha);
    return (containsSpecialCharacter) ? validPassword : invalidPassword;
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
              onChange={ (event) => setNome(event.target.value) }
            />
          </label>

          <label>
            Login
            <input
              type="text"
              name="login"
              value={ login }
              onChange={ (event) => setLogin(event.target.value) }
            />
          </label>

          <label>
            Senha
            <input
              type="password"
              name="senha"
              value={ senha }
              onChange={ (event) => setSenha(event.target.value) }
            />
          </label>
          <p className={ getPasswordLengthClassName() }>
            {senha.length >= 8
              ? 'Possuir 8 ou mais caracteres' : 'Possuir 8 ou mais caracteres'}
          </p>
          <p className={ getPasswordLengthClassName() }>
            {senha.length <= 16
              ? 'Possuir até 16 caracteres' : 'Possuir até 16 caracteres'}
          </p>
          <p className={ getPasswordCharactersClassName() }>
            {/^(?=.*[A-Za-z])(?=.*\d)/.test(senha)
              ? 'Possuir letras e números' : 'Possuir letras e números'}
          </p>
          <p className={ getPasswordSpecialCharacterClassName() }>
            {/[@$!%*#?&]/.test(senha)
              ? 'Possuir algum caractere especial' : 'Possuir algum caractere especial'}
          </p>

          <label>
            URL
            <input
              type="text"
              name="url"
              value={ url }
              onChange={ (event) => setUrl(event.target.value) }
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
