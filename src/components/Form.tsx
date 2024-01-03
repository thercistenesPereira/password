import React, { useState, FormEvent } from 'react';
import { Servico } from '../types/types';
import { getPasswordLengthClassName, getPasswordCharactersClassName,
  getPasswordSpecialCharacterClassName,
} from '../helpers/passwordHelpers';

import '../sass/components/form.sass';

function Form() {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [nome, setNome] = useState<string>('');
  const [login, setLogin] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [url, setUrl] = useState<string>('');
  const [servicos, setServicos] = useState<Servico[]>([]);

  const isPasswordValid = (password: string) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;
    return passwordRegex.test(password);
  };

  const isFormValid = (): boolean => {
    return (
      nome.trim().length > 0
      && login.trim().length > 0
      && senha.trim().length > 0
      && isPasswordValid(senha)
    );
  };

  const handleCadastrar = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (isFormValid()) {
      const novoServico = {
        nome,
        login,
        senha,
        url,
      };
      setServicos([...servicos, novoServico]);
      setNome('');
      setLogin('');
      setSenha('');
      setUrl('');
      setShowForm(false);
    }
  };

  const handleDelete = (index: number) => {
    const updatedServicos = servicos.filter((_, i) => i !== index);
    setServicos(updatedServicos);
  };

  return (
    <main id="main-form">
      <div />
      {showForm ? (
        <form onSubmit={ handleCadastrar }>
          <label htmlFor="nome">Nome do serviço</label>
          <input
            type="text"
            name="nome"
            value={ nome }
            onChange={ (event) => setNome(event.target.value) }
          />

          <label htmlFor="login">Login</label>
          <input
            type="text"
            name="login"
            value={ login }
            onChange={ (event) => setLogin(event.target.value) }
          />

          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            name="senha"
            value={ senha }
            onChange={ (event) => setSenha(event.target.value) }
          />

          <div className="validation">
            <p className={ getPasswordLengthClassName(senha) }>
              {senha.length >= 8
                ? 'Possuir 8 ou mais caracteres'
                : 'Possuir 8 ou mais caracteres'}
            </p>
            <p className={ getPasswordLengthClassName(senha) }>
              {senha.length <= 16
                ? 'Possuir até 16 caracteres'
                : 'Possuir até 16 caracteres'}
            </p>
            <p className={ getPasswordCharactersClassName(senha) }>
              {/^(?=.*[A-Za-z])(?=.*\d)/.test(senha)
                ? 'Possuir letras e números'
                : 'Possuir letras e números'}
            </p>
            <p className={ getPasswordSpecialCharacterClassName(senha) }>
              {/[@$!%*#?&]/.test(senha)
                ? 'Possuir algum caractere especial'
                : 'Possuir algum caractere especial'}
            </p>
          </div>

          <label htmlFor="url">URL</label>

          <input
            type="text"
            name="url"
            value={ url }
            onChange={ (event) => setUrl(event.target.value) }
          />

          <div className="container-butons">
            <button type="submit" disabled={ !isFormValid() }>
              Cadastrar
            </button>
            <button onClick={ () => setShowForm(false) }>
              Cancelar
            </button>
          </div>
        </form>
      ) : (
        <div id="password">
          {servicos.length === 0 ? (
            <p className="password-none">Nenhuma senha cadastrada</p>
          ) : (
            <ul>
              {servicos.map((servico, index) => (
                <li key={ index }>
                  <a href={ servico.url }>{servico.nome}</a>
                  <p>Login</p>
                  <p>
                    { servico.login}
                  </p>
                  <p>
                    Senha:
                    { servico.senha }
                  </p>
                  <button
                    onClick={ () => handleDelete(index) }
                    data-testid="remove-btn"
                  >
                    Remover Serviço
                  </button>
                </li>
              ))}
            </ul>
          )}
          <button
            onClick={ () => setShowForm(true) }
          >
            Cadastrar nova senha
          </button>
        </div>
      )}
    </main>
  );
}

export default Form;
