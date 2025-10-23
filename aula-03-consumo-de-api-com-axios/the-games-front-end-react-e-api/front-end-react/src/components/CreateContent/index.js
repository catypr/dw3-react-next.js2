import { useState } from "react";
// useRoter usado para redirecionamento
import { useRouter } from "next/router";
import axios from "axios";
import styles from "@/components/CreateContent/CreateContent.module.css";

const CreateContent = () => {
  const [title, setTitle] = useState("");
  const [plataform, setPlataform] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  // Carregando o useRouter
  const router = useRouter();

  const handleSubmit = async (event) => {
    // Evita o recarregamento da página ao enviar o formuário
    event.preventDefault();
    // Verificando se as inputs foram preenchidas
    if (title && plataform && genre && rating && year && price !== "") {
      // Criando o objeto que será enviado para API (json) com os valores
      const game = {
        title: title,
        year: year,
        price: price,
        description: {
         plataform: plataform,
         genre: genre,
         rating: rating,
        },
      };
      // Enviando os dados para API
      try {
        const reponse = await axios.post("http://localhost:4000/games", game)
        if (Response.status === 201) {
          alert("Game cadastrado com sucesso!")
          router.push("/home")
        } else {
          alert("Falha ao cadastrar o game!")
        }
      } catch (error) {
        console.log(error)
      }
      // Se tiver algum campo vazio
    } else {
      alert("Por favor, preencher todos os campos.");
    }
  }

  return (
    <div className={styles.createContent}>
      <div className="title">
        <h2>Cadastrar novo jogo</h2>
      </div>
      <form id="createForm" className="formPrimary" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Insira o título do jogo"
          className="inputPrimary"
          onChange={(e) => setTitle(e.target.value)}
          value={title} 
        />
        <input
          type="text"
          name="platform"
          id="platform"
          placeholder="Insira a plataforma do jogo"
          className="inputPrimary"
          onChange={(e) => setPlataform(e.target.value)}
          value={plataform}
        />
        <input
          type="text"
          name="genre"
          id="genre"
          placeholder="Insira o genêro do jogo"
          className="inputPrimary"
          onChange={(e) => setGenre(e.target.value)}
          value={genre}
        /><input
          type="text"
          name="rating"
          id="rating"
          placeholder="Insira a classificação do jogo"
          className="inputPrimary"
          onChange={(e) => setRating(e.target.value)}
          value={rating}
        />
        <input
          type="number"
          name="year"
          id="year"
          placeholder="Insira o ano do jogo"
          className="inputPrimary"
          onChange={(e) => setYear(e.target.value)}
          value={year}
        />
        <input
          type="number"
          name="price"
          id="price"
          placeholder="Insira o preço do jogo"
          className="inputPrimary"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        <input
          type="submit"
          value="Cadastrar"
          id="createBtn"
          className="btnPrimary"
        />
      </form>
      {/* <div style={{color: "white"}}>
        {title} <br />
        {plataform} <br />
        {genre} <br />
        {rating} <br />
        {year} <br />
        {price} <br />
      </div> */}
    </div>
  );
};

export default CreateContent;
