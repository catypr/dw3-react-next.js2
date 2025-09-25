// Expressões Javascript dentro do HTML 
const User = () => {
    // Criando variáveis para componente
    const name = "Catarine";
    return(
        <>
        {/* Esse é o comentário em JSX */}
        <div>Usuário logado: <strong>{name}</strong></div>
        </>
    );
};

export default User;