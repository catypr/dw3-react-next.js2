const Description = (props) => {
    // props (propriedade do componente)
    // props é um objeto {} e possui chaves e valores
    // Ex: props.citu = "Registro"
    return(
        <>
           <div>
             <p>Cidade: {props.city}</p>
              <p>Idade: {props.age} anos</p>
              <p>E-mail: {props.email}</p>
           </div>
        </>
    );
};
export default Description;