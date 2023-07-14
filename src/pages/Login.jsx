import { useNavigate } from "react-router-dom";
import { UserAuth } from "../utils/AuthContext";
import { useEffect, useState } from "react";

import Controller from "../assets/controller.jpg";

export default function Login() {
  const { googleSignIn, user } = UserAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    if (user != null) {
      navigate("/dashboard");
    }
  }, [navigate, user]);
  return (
    <section className="flex flex-col md:flex-row h-screen items-center animate-fade">
      <div className="hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <img
          src={Controller}
          alt="Controller"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      <div
        className="bg-base-100 w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
            flex items-center justify-center"
      >
        <div>
          <div className="card2">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="card-inner">
              <div className=" items-center justify-center flex flex-col">
                <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
                  Login
                </h1>
                <hr className="my-5 border-gray-300 w-full" />

                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  className="w-full block bg-base-300 font-semibold rounded-lg py-3 mb-4"
                >
                  <div className="flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 48 48"
                    >
                      <defs>
                        <path
                          id="a"
                          d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                        />
                      </defs>
                      <clipPath id="b">
                        <use xlinkHref="#a" overflow="visible" />
                      </clipPath>
                      <path
                        clipPath="url(#b)"
                        fill="#FBBC05"
                        d="M0 37V11l17 13z"
                      />
                      <path
                        clipPath="url(#b)"
                        fill="#EA4335"
                        d="M0 11l17 13 7-6.1L48 14V0H0z"
                      />
                      <path
                        clipPath="url(#b)"
                        fill="#34A853"
                        d="M0 37l30-23 7.9 1L48 0v48H0z"
                      />
                      <path
                        clipPath="url(#b)"
                        fill="#4285F4"
                        d="M48 48L17 24l-4-3 35-10z"
                      />
                    </svg>
                    <span className="ml-4">Login with Google</span>
                  </div>
                </button>
                {error && <div className="alert alert-error">{error}</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
