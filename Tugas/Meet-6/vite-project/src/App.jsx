import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <main class="h-[85vh] px-64 flex items-center bg-[#F7F4ED]">
        <div class="container flex flex-col gap-8">
          <h1 class="text-[90px] leading-[75px] font-serif">
            Human
            <br />
            sories & ideas
          </h1>
          <p class="font-semibold">
            A place to read, write, adn deepen your understanding
          </p>
          <button class="bg-black py-2 px-12 text-white rounded-full w-fit">
            Start reading
          </button>
        </div>
        <img src="img.webp" alt="" class="absolute h-[600px] right-0" />
      </main>
      <Footer />
    </>
  );
}

export default App;
