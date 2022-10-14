import { FormEvent, useState } from "react";
import Head from "next/head";
import { Header } from "../../components/Header";
import styles from "./styles.module.scss";

import { setupAPIClient } from "../../services/api";

import { canSSRAuth } from "../../utils/canSSRAuth";

export default function Category() {
  const [category, setCategory] = useState("");

  async function handleAddCategory(event: FormEvent) {
    event.preventDefault();

    if (category === "") {
      return;
    }

    const apiClient = setupAPIClient();
    await apiClient.post("/category", {
      name: category,
    });

    alert("Cadastrado com sucesso!");
    setCategory("");
  }

  return (
    <>
      <Head>
        <title>Nova categoria - Sujeito Pizzaria</title>
      </Head>
      <div>
        <Header />
        <main className={styles.container}>
          <h1>Nova Categoria</h1>

          <form className={styles.form} onSubmit={handleAddCategory}>
            <input
              type="text"
              placeholder="Digite o nome da categoria!"
              className={styles.input}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <button className={styles.buttonAdd} type="submit">
              Cadastrar
            </button>
          </form>
        </main>
      </div>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
