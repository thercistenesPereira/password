import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';

const schema = object({
  nome: string().min(1),
  login: string().min(1),
  senha: string()
    .min(8, 'Possuir 8 ou mais caracteres')
    .max(16, 'Possuir até 16 caracteres')
    .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])/, 'Possuir letras e números')
    .matches(/[^a-zA-Z0-9]/, 'Possuir algum caractere especial'),
  url: string(),
});

function Form() {
  const { register, handleSubmit: onSubmit,
    formState: { errors, isValid, isDirty, isSubmitting } } = useForm(
    { resolver: yupResolver(schema), mode: 'onChange' },
  );
  const [showForm, setShowForm] = useState<boolean>(false);

  const handleSubmit = (data: any) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <>
      { showForm
      && (
        <form onSubmit={ onSubmit(handleSubmit) }>
          <label>
            Nome do serviço
            <input
              type="text"
              { ...register('nome') }
            />
          </label>

          <label>
            Login
            <input type="text" { ...register('login') } />
          </label>

          <label>
            Senha
            <input type="password" id="" { ...register('senha') } />
            <h1 className="invalid-password-check">{errors?.senha?.message}</h1>
          </label>

          <label>
            URL
            <input type="text" { ...register('url') } />
          </label>
          <button disabled={ !(isDirty && isValid) }>
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
