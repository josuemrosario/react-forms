const Form = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="nome" className="form-label">
          nome
        </label>
        <input id="nome" type="text" className="form-control" />

        <label htmlFor="idade" className="form-label">
          idade
        </label>
        <input id="idade" type="number" className="form-control" />
      </div>
      <button className="btn btn-primary" type="submit">
        Enviar
      </button>
    </form>
  );
};

export default Form;
