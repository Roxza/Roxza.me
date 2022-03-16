/* eslint-disable @next/next/no-img-element */
import RepositoryLoader from "../components/Loader/Repositories";
import swr from "../lib/swr";
export default function Repositories() {
  const { data: _repo } = swr("api/repo");
  const repo = _repo ? _repo : null;
  return (
    <>
      {repo ? (
        <>
          <>
            <div className="p-10">
              <div className="py-5 space-y-5">
                <div className="relative mb-5 w-full">
                  <h1 className="heading-text absolute bottom-5 left-5 text-3xl  font-bold text-center">
                    <span className="text-yellow-500">Repositories</span>
                  </h1>
                  <h1 className="heading-text-small absolute bottom-1 left-5 text-sm text-black dark:text-zinc-100  font-light text-center">
                    My open source projects on Github.
                  </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {repo
                    .sort((a, b) => {
                      return b.stargazers_count - a.stargazers_count;
                    })
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
                </div>
              </div>
            </div>
          </>
        </>
      ) : (
        <RepositoryLoader />
      )}
    </>
  );
}
