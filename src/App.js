import React, { useState } from 'react';
import { FiMenu, FiChevronDown } from 'react-icons/fi';
import './App.css';

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="App px-10">
      <header className="text-white w-full">
        <div className="fixed top-0 left-0 z-20">
          <button
            onClick={toggleMenu}
            className={`block focus:outline-none ml-4 mt-4 ${showMenu ? 'text-white' : 'text-blue-600'
              } transition-transform duration-300 ease-in-out ${showMenu ? 'transform rotate-90' : ''
              }`}
          >
            <FiMenu size={32} />
          </button>
        </div>
        <nav
          className={`fixed top-0 left-0 w-full py-4 z-10 text-white transform transition-all ease-in-out duration-300 ${showMenu ? "translate-x-0" : "-translate-x-full"
            }`}
          style={{
            background: "linear-gradient(to right, #00487C, #4BB3FD)",
          }}>
          <ul className="flex justify-center space-x-20">
            <li className="text-2xl">
              <a href='#home' onClick={handleMenuClick} className='nav-link'>Home</a>
            </li>
            <li className="text-2xl">
              <a href='#projects' onClick={handleMenuClick} className='nav-link'>Projects</a>
            </li>
            <li className="text-2xl">
              <a to="#" onClick={handleMenuClick} className='nav-link'>About</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mt-10">

        <section
          id="home"
          className="h-screen flex flex-row items-center justify-center landing-page">
          <div className="text-center">
            <h1 className="text-8xl font-bold landing-title">Programming Portfolio</h1>
            <h2 className="text-4xl mt-2 landing-subtitle">All my projects during the past year</h2>
          </div>
          <div className="w-full ml-10 lg-image">
            <img
              src="./2003.jpg"
              alt="landing page"
              className="max-w-full h-auto rounded-lg border-black border-2"
            />
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-arrow">
            <FiChevronDown
              className="text-blue-800"
              size={48}
              onClick={() => {
                const learningPathSection = document.getElementById("learning-path");
                const yOffset = -80;
                const y = learningPathSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }}
            />
          </div>



        </section>

        <section id="learning-path" className="text-center mt-10">
          <h3 className="text-5xl font-bold mb-16 mt-16" id='projects'>My Projects</h3>
          <div className="mx-auto w-1/2 my-projects">
            <div className="mb-14">
              <h4 className="text-3xl font-semibold mb-8">Web Development</h4>
              {Array(3)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={`web-${index}`}
                    className="my-3 mx-auto p-4 border-2 border-black rounded-lg w-full h-20 link-container"
                  >
                    <div className="flex items-center h-full">
                      <div className="mr-4">
                        <img
                          src="./file-code-solid.svg"
                          alt="coding file icon"
                          className="h-12 w-12"
                        />
                      </div>
                      <div className="flex-grow">
                        {index === 0 && (
                          <a
                            href="https://www.gkldevelopment.com/GKL-development-1.0/"
                            target="_blank"
                            rel="my portfolio"
                            className="text-black hover:underline text-xl hover:text-zinc-800"
                          >
                            My first portfolio
                          </a>
                        )}
                        {index === 1 && (
                          <a
                            href="http://www.thenftgallery.online"
                            target="_blank"
                            rel="nft gallery"
                            className="text-black hover:underline text-xl hover:text-zinc-800"
                          >
                            The NFT Gallery
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className="mb-14">
              <h4 className="text-3xl font-semibold mb-8">Machine Learning & AI</h4>
              {Array(3)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={`ml-${index}`}
                    className="my-3 mx-auto p-4 border-2 border-black rounded-lg w-full h-20 link-container"
                  >
                    <div className="flex items-center h-full">
                      <div className="mr-4">
                        <img
                          src="./file-code-solid.svg"
                          alt="coding file icon"
                          className="h-12 w-12"
                        />
                      </div>
                      <div className="flex-grow">
                        {/* Add text here */}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div>
              <h4 className="text-3xl font-semibold mb-8">Fun and practices</h4>
              {Array(2)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={`fun-${index}`}
                    className="my-3 mx-auto p-4 border-2 border-black rounded-lg w-full h-20 link-container"
                  >
                    <div className="flex items-center h-full">
                      <div className="mr-4">
                        <img
                          src="./file-code-solid.svg"
                          alt="coding file icon"
                          className="h-12 w-12"
                        />
                      </div>
                      <div className="flex-grow">
                        {index === 0 && (
                          <a
                            href="https://www.gkldevelopment.com/diceGame/"
                            target="_blank"
                            rel="dice game"
                            className="text-black hover:underline text-xl hover:text-zinc-800"
                          >
                            Dice Game
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>



      </main>

    </div>
  );
}

export default App;
