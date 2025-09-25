const Pet = ({name, breed, age}) => {
    // Desestruturação de props:
    // Destructuring => props.name -> {name}
    return(
        <>
          <div>
            <p>Informações do Pet:</p>
            <ul>
                <li>Nome: {name}</li>
                <li>Raça: {breed}</li>
                <li>Idade: {age} anos</li>
            </ul>
          </div>
        </>
    );
};
export default Pet;