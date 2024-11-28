import { FormEvent, useRef } from "react";

const Form = () => {
  //objetos de referencia
  const nomeRef = useRef<HTMLInputElement>(null); //representa o campo nome
  const idadeRef = useRef<HTMLInputElement>(null); //representa o campo idade
  const pessoa = { nome: "", idade: 0 };

  //Executa no momento da submissão do formulario
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (nomeRef.current !== null) 
      pessoa.nome = nomeRef.current.value;

    if (idadeRef.current !== null)
      pessoa.idade = parseInt(idadeRef.current.value);

    console.log (pessoa)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="nome" className="form-label">
          nome
        </label>
        <input
          ref={nomeRef} // ligado ao objeto de referencia
          id="nome"
          type="text"
          className="form-control"
        />

        <label htmlFor="idade" className="form-label">
          idade
        </label>
        <input
          ref={idadeRef} // ligado ao objeto de referencia
          id="idade"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Enviar
      </button>
    </form>
  );
};

export default Form;
