/* eslint-disable @next/next/no-img-element */
import Project from "../components/Card/project";
import ProjectsLoader from "../components/Loader/Projects";
import swr from "../lib/swr";
export default function Projects() {
  const { data: _projects } = swr("api/data");
  const data = _projects ? _projects.data : null;
  return (
    <>
      {data ? (
        <>
          <div className="p-10">
            <div className="py-5 space-y-5">
              <div className="relative mb-5 w-full">
                <h1 className="heading-text absolute bottom-5 left-5 text-3xl  font-bold text-center">
                  <span className="text-blue-500">Projects</span>
                </h1>
                <h1 className="heading-text-small absolute bottom-1 left-5 text-sm text-black dark:text-zinc-100 font-light text-center">
                  You can see my projects here.
                </h1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Project data={data.projects} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <ProjectsLoader />
      )}
    </>
  );
}
