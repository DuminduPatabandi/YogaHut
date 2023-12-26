import { useState } from "react";
import { logo } from "../assets";
import { EnvelopeIcon, UserIcon } from "@heroicons/react/24/outline";
import { collection, addDoc } from 'firebase/firestore'
import db from '../firebase'

const Home = () => {
  const [myName, setMyName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("")

  const isValidEmail = (email) => {
    // Simple email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(isValidEmail(mail)){
        const collectionRef = collection(db, 'emails')
        const payload = {
            name: myName,
            mail: mail,
        }
        await addDoc(collectionRef, payload)
        setMessage('Now You will be redirected. Happy shopping!')
        window.location.href = 'https://amzn.to/3tvjLas'
    }
  };

  return (
    <>
      <div className="container items-center px-6 mx-auto">
        <div className="flex  items-center justify-center">
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="flex flex-col  justify-center items-center ">
              <img
                src={logo}
                alt="site-logo"
                className="w-[8rem] h-[8rem] logo object-contain mt-32  sm:mt-26 md:mt-32"
              />
            </div>
            <h1 className=" text-2xl font-poppins my-6 text-center font-semibold text-black capitalize sm:text-3xl ">
              Just Do It <span className="text-[#ff58e7]">{myName}</span>
            </h1>
            <div class="relative flex items-center mt-8">
              <span className="absolute">
                <UserIcon
                  className="w-6 h-6 mx-3 text-gray-300"
                  aria-hidden="true"
                />
              </span>
              <input
                type="text"
                name="username"
                value={myName}
                required
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                onChange={(e) => setMyName(e.target.value)}
                placeholder="Your Name"
              />
            </div>
            <div class="relative flex items-center mt-4">
              <span className="absolute">
                <EnvelopeIcon
                  className="w-6 h-6 mx-3 text-gray-300"
                  aria-hidden="true"
                />
              </span>
              <input
                type="text"
                name="username"
                value={mail}
                required
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                onChange={(e) => setMail(e.target.value)}
                placeholder="Your Email (babara@gmail.com)"
              />
            </div>
            <div className="mt-6">
              <button 
                
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#ff58e7] rounded-lg hover:bg-[#0a0a23] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                type="submit"
              >
                Lets Do It
              </button>
            </div>
            <h2 className=" text-base font-poppins my-6 text-center font-semibold text-black ">
              Don't worry. We Don't spam You{" "}
              <span className="text-[#ff58e7]">{myName}</span>
            </h2>
            <h2 className=" text-sm font-poppins my-6 text-center font-semibold text-[#00e59b] ">
              {message}
            </h2>
          </form>
        </div>
      </div>
    </>
  );
}

export default Home