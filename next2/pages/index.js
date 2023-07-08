import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Button from "@/components/Button";

const inter = Inter({ subsets: ["latin"] });

const Home = (props) => {
  return (
    <>
      <h1 className="bg-red-800 text-white text-6xl">
        HOLA MUNDO DESDE EL NEXT 2
      </h1>
      <p>{JSON.stringify(props)}</p>
    </>
  );
};

Home.getInitialProps = async () => {
  return {
    ssr: "HOLA SSR",
  };
};

export default Home;
