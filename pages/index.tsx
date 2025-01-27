import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NormalButton from "../components/NormalButton";

export default function Home() {
  const handleClick = () => {
    alert('ボタンがクリックされました');
  };

  return (
    <div>
      <Header />
      <main className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center">
          Welcome to Yuki Profile!
        </h1>
        <NormalButton label="" onClick={ handleClick } />
        <p className="mt-4 text-center">
          This is your freelance engineer profile site.
        </p>
      </main>
      <Footer />
    </div>
  );
}
