import { FiGithub } from "react-icons/fi";
const Repositories = (props) => {
  const { repos } = props;

  return (
    <>
      {repos
        .sort((a, b) => {
          return b.stargazers_count - a.stargazers_count;
        })
        .filter((repo, key) => key < 4)
        .map((repo, key) => (
          <a
            key={key}
            href={`https://github.com/${repo.owner.login}/${repo.name}`}
          >
            <div className="p-[6px] rounded-lg space-y-2">
              <div className="text-black dark:text-gray-300 bg-gray-300 dark:bg-[#080808] dark:hover:bg-[#101010] py-4 px-6 hover:-translate-y-[8px]  transition-all duration-200 bg-brand-black rounded-lg">
                <div className="flex">
                  <h1 className="text-xl font-bold tracking-tight  sm:text-xl md:text-2xl">
                    {repo.owner.login}/{repo.name}
                  </h1>
                </div>
                <div>
                  <p className="">
                    {repo.description
                      ? repo.description
                      : "Description not found"}
                  </p>
                </div>
                <div className="w-full mt-auto flex-1 flex items-end justify-end space-x-3">
                  <h6 className="flex items-center gap-x-1">
                    {repo.language ? repo.language : "Collaborator"}
                    <span className="text-xs dark:text-gray-400 text-gray-800">
                      language
                    </span>
                  </h6>
                  <h6 className="flex items-center gap-x-1">
                    {repo.stargazers_count}
                    <span className="text-xs dark:text-gray-400 text-gray-800">
                      stars
                    </span>
                  </h6>
                  <h6 className="flex items-center gap-x-1">
                    {repo.forks}
                    <span className="text-xs dark:text-gray-400 text-gray-800">
                      forks
                    </span>
                  </h6>
                </div>
              </div>
            </div>
          </a>
        ))}
    </>
  );
};

export default Repositories;
