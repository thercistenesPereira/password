function Form() {
  return (
    <>
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
      </form>
      <button>Cadastrar</button>
      <button>Cancelar</button>
    </>
  );
}

export default Form;
