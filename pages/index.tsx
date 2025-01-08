import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center">
          Welcome to Yuki Profile!
        </h1>
        <p className="mt-4 text-center">
          This is your freelance engineer profile site.
        </p>
      </main>
      <Footer />
    </div>
  );
}
