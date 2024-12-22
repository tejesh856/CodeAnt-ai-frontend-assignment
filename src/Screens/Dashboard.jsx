import React, { useEffect, useMemo, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Searchbar from "../components/Searchbar";
import { FiRefreshCw, FiPlus } from "react-icons/fi";
import { FiDatabase } from "react-icons/fi";
import LoadingIcon from "../components/LoadingIcon";
import { motion } from "framer-motion";

function Dashboard() {
  const { selectedValue, isVisibledropdown } = useOutletContext();
  const [repos, setrepos] = useState([]);
  const [colors, setcolors] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setsearchValue] = useState("");

  const fetchLanguageColors = async () => {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/ozh/github-colors/master/colors.json"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch language colors");
      }
      const data = await response.json();
      setcolors(data);
    } catch (error) {
      console.error("Error fetching language colors:", error);
      setcolors({});
    }
  };
  const fetchRepos = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://api.github.com/users/${selectedValue}/repos`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch repositories");
      }
      const data = await response.json();
      setrepos(data);
    } catch (error) {
      console.error("Error fetching repos:", error);
      setrepos([]);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      if (selectedValue) {
        await Promise.all([fetchRepos(), fetchLanguageColors()]);
      }
    };
    fetchData();
  }, [selectedValue]);
  const getLanguageColor = (language) => colors?.[language]?.color || "#808080";

  const calculateUpdatedDays = (createdTimestamp, updatedTimestamp) => {
    const createdDate = new Date(createdTimestamp);
    const updatedDate = new Date(updatedTimestamp);
    const differenceInMilliseconds = updatedDate - createdDate;
    return Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
  };
  const filteredRepos = useMemo(() => {
    return searchValue
      ? repos.filter((repo) =>
          repo.name.toLowerCase().startsWith(searchValue.toLowerCase())
        )
      : repos;
  }, [repos, searchValue]);

  return (
    <section
      className={`bg-gray-100 flex flex-col flex-1 p-6 max-500:p-0 ${
        isVisibledropdown ? "max-880:-z-10" : "max-880:-z-0"
      }  max-880:mt-14`}
    >
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="bg-white relative flex flex-col items-start flex-1 rounded-md shadow-sm border max-500:border-t-0 max-500:rounded-t-none border-gray-300"
      >
        <div className="flex flex-col items-start w-full gap-3 max-880:gap-4  p-4 px-6 pb-6 border-b-[1px] border-gray-300">
          <div className="flex items-center flex-wrap max-880:gap-4 justify-between w-full">
            <p className="flex flex-col items-start gap-1">
              <span className="text-gray-900 text-2xl font-semibold">
                Respositories
              </span>
              <span className="text-gray-600 text-sm font-normal">
                {repos.length} Total Respositries
              </span>
            </p>
            <div className="flex items-center gap-4">
              <button
                onClick={async () => {
                  setsearchValue("");
                  await fetchRepos();
                }}
                className="px-4 py-2 border border-gray-300 shadow-sm rounded-md flex items-center gap-2 text-gray-700 font-normal text-sm"
              >
                <FiRefreshCw size={18} color="#414651" />
                Refresh All
              </button>
              <button className="px-4 py-2 bg-blue-500 shadow-sm rounded-md flex items-center gap-2 text-white font-normal text-sm">
                <FiPlus size={18} color="white" />
                Add Repository
              </button>
            </div>
          </div>
          <Searchbar
            placeholder="Search Repsitories..."
            onChange={() => {}}
            searchValue={searchValue}
            setsearchValue={setsearchValue}
          />
        </div>
        <div className="flex flex-col items-start w-full h-full">
          {!isLoading ? (
            filteredRepos.length > 0 ? (
              filteredRepos.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start gap-3 w-full p-4 px-6 border-b-[1px] border-gray-300"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-semibold text-gray-800">
                      {item.name}
                    </span>
                    <span className="text-blue-500 px-2  text-sm font-normal rounded-2xl border border-gray-300 shadow-sm bg-blue-100">
                      {item.private ? "Private" : "Public"}
                    </span>
                  </div>
                  <div className="flex items-center gap-6">
                    {item.language && (
                      <span className="flex items-center gap-2 text-gray-800 font-normal">
                        {item.language}
                        <span
                          style={{
                            backgroundColor: getLanguageColor(item.language),
                          }}
                          className="w-3 h-3 rounded-full"
                        ></span>
                      </span>
                    )}
                    <span className="flex items-center gap-2 text-gray-800 font-normal">
                      <FiDatabase size={18} color="#181D27" />
                      {item.size}KB
                    </span>
                    <span className="text-gray-800 font-normal">
                      Updated{" "}
                      {calculateUpdatedDays(item.created_at, item.updated_at)}{" "}
                      {calculateUpdatedDays(item.created_at, item.updated_at) >
                      1
                        ? "days"
                        : "day"}{" "}
                      ago
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p className=" text-gray-600 font-normal text-lg w-full h-full flex items-center justify-center">
                No repos found starting with {searchValue}
              </p>
            )
          ) : (
            <div className="flex-1 w-full h-full  flex items-center justify-center absolute bg-neutral-100/60 top-0 left-0">
              <LoadingIcon />
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}

export default Dashboard;
