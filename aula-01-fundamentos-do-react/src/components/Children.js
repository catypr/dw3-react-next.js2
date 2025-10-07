const Children = ({children}) => {
    return (
        <>
           <div>
           <p>O conteúdo abaixo está sendo recebido através de "children"</p>{/* tbm é uma props para código */}
           {children}
           </div>
        </>
    );
};
export default Children;