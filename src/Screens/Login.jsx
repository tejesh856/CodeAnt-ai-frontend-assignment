import React, { useState } from "react";
import { ReactComponent as Logo } from "../../src/assets/Subtract.svg";
import { ReactComponent as Pie } from "../../src/assets/PieChart.svg";
import { ReactComponent as Up } from "../../src/assets/Increase.svg";
import { ReactComponent as BigLogo } from "../../src/assets/BigSubtract.svg";
import { ReactComponent as Github } from "../../src/assets/Github.svg";
import { ReactComponent as Gitbucket } from "../../src/assets/GitBucket.svg";
import { ReactComponent as Azure } from "../../src/assets/Azure.svg";
import { ReactComponent as Gitlab } from "../../src/assets/GitLab.svg";
import { ReactComponent as Key } from "../../src/assets/key.svg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Login({ setIsLoggedIn }) {
  const websiteAnalytics = [
    { label: "Language Support", value: "30+" },
    { label: "Developers", value: "10k+" },
    { label: "Hours Saved", value: "100k+" },
  ];
  const [activeButton, setActiveButton] = useState("SAAS");

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };
  const navigate = useNavigate();

  const handleLogin = () => {
    const randomToken = Math.random().toString(36).substring(2);
    localStorage.setItem("authToken", randomToken);
    setIsLoggedIn(true);
    navigate("/dashboard");
  };

  return (
    <section className="flex items-center w-full h-full relative">
      <div className="bg-white border  flex-1 h-full flex items-center justify-center max-880:hidden border-gray-200 p-4">
        <div className="flex flex-col items-end">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col shadow-custom-blue rounded-lg"
          >
            <div className="flex items-center gap-2 p-4 border-b-[1px] border-coolGray-100">
              <Logo height={20} width={20} color="#081735" />
              <p className="text-indigo-950 font-semibold text-lg">
                AI to Detect & Autofix Bad Code
              </p>
            </div>
            <div className="flex items-center justify-between p-4">
              {websiteAnalytics.map((item) => (
                <div
                  key={item.value}
                  className="flex flex-col items-center p-2 px-4"
                >
                  <span className="text-indigo-950 text-lg font-semibold">
                    {item.value}
                  </span>
                  <span className="text-indigo-950 text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex items-start justify-between px-6 py-2 shadow-custom-blue rounded-lg relative bg-white -top-4"
          >
            <div className="flex flex-col items-start justify-between">
              <Pie height={45} width={45} color="#9D90FA40" className="pt-2" />
              <p className="text-gray-900 flex flex-col items-start py-4">
                <span className="font-medium text-sm">Issues Fixed</span>
                <span className="font-semibold text-xl">500k+</span>
              </p>
            </div>
            <div className="pl-8">
              <p className="flex flex-col items-start">
                <span className="flex items-center justify-center gap-1 text-indigo-900 font-semibold">
                  <Up height={15} width={15} color="#0049C6" />
                  14%
                </span>
                <span className="text-sm text-gray-900">This Week</span>
              </p>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 ">
          <BigLogo height={200} width={200} color="#818181" />
        </div>
      </div>
      <div className="bg-gray-50 flex-1 flex flex-col items-center justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="bg-white shadow-sm border border-coolGray-100 w-11/12 h-[70%] rounded-lg"
        >
          <div className="flex flex-col items-center border-b-[1px] border-coolGray-300 px-4 py-4 gap-4">
            <p className="flex items-center gap-2">
              <Logo height={25} width={25} color="#081735" />
              <span className="text-indigo-950 text-2xl font-normal">
                CodeAnt AI
              </span>
            </p>
            <p className="text-gray-900 text-2xl font-bold">
              Welcome to CodeAnt AI
            </p>
            <div className="flex items-center justify-between w-full relative">
              <div
                className={`absolute left-0 w-1/2 h-full py-2 bg-blue-500 rounded-lg transition-transform duration-300 ease-in-out ${
                  activeButton === "Self Hosted" ? "translate-x-full" : ""
                }`}
                style={{ zIndex: 0 }}
              ></div>
              <button
                className={`flex-1 rounded-lg font-normal shadow-sm py-2 outline-none ${
                  activeButton === "SAAS"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-50 text-gray-800"
                }`}
                onClick={() => handleButtonClick("SAAS")}
                style={{ zIndex: 1 }}
              >
                SAAS
              </button>
              <button
                className={`flex-1 rounded-lg font-normal py-2 shadow-sm outline-none ${
                  activeButton === "Self Hosted"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-50 text-gray-800"
                }`}
                onClick={() => handleButtonClick("Self Hosted")}
                style={{ zIndex: 1 }}
              >
                Self Hosted
              </button>
            </div>
          </div>
          <div className=" flex items-center justify-center w-full py-4">
            {activeButton === "SAAS" ? (
              <div className="flex flex-col gap-4 w-3/4">
                <button
                  onClick={handleLogin}
                  className="outline-none w-full hover:bg-gray-100 transition-colors duration-300 shadow-sm border border-gray-200 rounded-lg py-2"
                >
                  <span className="flex items-center justify-center gap-2 text-gray-800 font-medium text-sm rounded-lg w-full">
                    <Github height={20} width={20} />
                    Sign in with Github
                  </span>
                </button>
                <button
                  onClick={handleLogin}
                  className="outline-none w-full shadow-sm hover:bg-gray-100 transition-colors duration-300 border border-gray-200 rounded-lg py-2"
                >
                  <span className="flex items-center justify-center gap-2 text-gray-800 font-medium text-sm rounded-lg  w-full">
                    <Gitbucket height={20} width={20} />
                    Sign in with Bitbucket
                  </span>
                </button>
                <button
                  onClick={handleLogin}
                  className="outline-none w-full hover:bg-gray-100 transition-colors duration-300 shadow-sm border border-gray-200 rounded-lg py-2"
                >
                  <span className="flex items-center justify-center gap-2 text-gray-800 font-medium text-sm rounded-lg w-full">
                    <Azure height={20} width={20} />
                    Sign in with Azure Devops
                  </span>
                </button>
                <button
                  onClick={handleLogin}
                  className="outline-none w-full shadow-sm hover:bg-gray-100 transition-colors duration-300 border border-gray-200 rounded-lg py-2"
                >
                  <span className="flex items-center justify-center gap-2 text-gray-800 font-medium text-sm rounded-lg w-full">
                    <Gitlab height={20} width={20} />
                    Sign in with GitLab
                  </span>
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-4 w-3/4 pb-6">
                <button
                  onClick={handleLogin}
                  className="outline-none w-full shadow-sm hover:bg-gray-100 transition-colors duration-300 border border-gray-200 rounded-lg py-2"
                >
                  <span className="flex items-center justify-center gap-2 text-gray-800 font-medium text-sm rounded-lg w-full">
                    <Gitlab height={20} width={20} />
                    Self Hosted GitLab
                  </span>
                </button>
                <button
                  onClick={handleLogin}
                  className="outline-none w-full shadow-sm border border-gray-200 rounded-lg py-2 hover:bg-gray-100 transition-colors duration-300"
                >
                  <span className="flex items-center justify-center gap-2 text-gray-800 font-medium text-sm rounded-lg w-full">
                    <Key height={20} width={20} />
                    Sign in with SSO
                  </span>
                </button>
              </div>
            )}
          </div>
        </motion.div>
        <p className="text-gray-700 font-normal  text-sm mt-4">
          By signing up you agree to the{" "}
          <span className="font-medium cursor-pointer hover:underline hover:underline-offset-4">
            Privacy Policy
          </span>
          .
        </p>
      </div>
    </section>
  );
}

export default Login;
