import React, { useState, useEffect } from 'react';
// import secureLocalStorage from "react-secure-storage";

export default function Account() {
  const authToken = localStorage.getItem('token');
  const typeUser = localStorage.getItem('role_id');

  const [authenticated, setAuthenticated] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (authToken) {
      const candidateId = localStorage.getItem('id');
      setAuthenticated(true);
    }
    if (typeUser === '3') {
      setAdmin(true);
    }
  }, []);



  // =================================================================================================
  // ----------- Function : Navbar | Gestion de l'ouverture et fermeture du menu ---------------
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen); // Inverse l'état
    };


  // =================================================================================================
  // ----------- Function : Déconnexion ---------------
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role_id');
    localStorage.removeItem('id');
    setAuthenticated(false);
    window.location.href = '/login';
  };

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              JobBoard
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {authenticated ? (
              <>
                <button
                  onClick={handleLogout}
                  type="button"
                  className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-rose-600 dark:font-bold dark:hover:bg-rose-700 dark:focus:ring-red-800"
                >
                  Déconnexion
                </button>
              </>
            ) : (
              <>
                <div className="flex space-x-4">
                  <button
                    type="button"
                    className="bg-transparent text-teal-500 border-teal hover:bg-teal-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-transparent dark:font-bold dark:border border-teal-500 dark:hover:bg-teal-500 dark:focus:ring-blue-800"
                  >
                    <a href="/signup">S'enregistrer</a>
                  </button>
                  <button
                    type="button"
                    className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-teal-600 dark:font-bold dark:hover:bg-teal-700 dark:focus:ring-blue-800"
                  >
                    <a href="/login">Connexion</a>
                  </button>
                </div>
              </>
            )}

            {/* Bouton burger */}
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={toggleMenu}
            >
            <span className="sr-only">Ouvrir le menu principal</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'}`}
          id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {authenticated ? (
                <>
                  <li>
                    <a
                      href="/"
                      className="block py-2 px-3 text-white font-bold bg-teal-700 rounded md:bg-transparent md:text-teal-700 md:p-0 md:dark:text-teal-500"
                      aria-current="page"
                    >
                      Accueil
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-700 md:p-0 md:dark:hover:text-teal-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Mes candidatures
                    </a>
                  </li>
                  <li>
                    <a
                      href="/advertisementCreate"
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-700 md:p-0 md:dark:hover:text-teal-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Créer une annonce
                    </a>
                  </li>
                  {admin ? (
                    <>
                      <li>
                        <a
                          href="/dashboard"
                          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-700 md:p-0 md:dark:hover:text-teal-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                        >
                          Dashboard
                        </a>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <a
                          href="/account"
                          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-700 md:p-0 md:dark:hover:text-teal-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                        >
                          Mon profil
                        </a>
                      </li>
                    </>
                  )}
                </>
              ) : (
                <></>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
