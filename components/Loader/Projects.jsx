export default function ProjectsLoader() {
  return (
    <>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="text-2xl font-bold leading-9 tracking-tight text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
          Projects
        </h1>
        <div className="mb-8 prose leading-6 text-justify text-gray-400">
          <p>The projects i am actively working on take place in this area.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
          {Array.from({ length: 8 }).map((item, index) => (
            <a
              key={index}
              className="sm:w-full md:w-full p-5 h-[300px] w-[280px] rounded-lg bg-gray-300 dark:bg-[#080808] dark:hover:bg-[#101010]"
            >
              <div className="w-full relative rounded-lg overflow-hidden h-[130px] w-30">
                <div className="w-[1024px] h-[512px] bg-slate-700 rounded col-span-2" />
              </div>
              <div className="w-full pt-2 flex items-center">
                <h1 className="text-3xl font-bold text-white">
                  <div className="h-5 w-28 bg-slate-700 rounded col-span-2" />
                </h1>
              </div>
              <p className="text-md font-normal text-white/50 h-24">
                <div className="space-y-2 py-2">
                  <div className="grid grid-cols-3 w-[170px] gap-4">
                    <div className="h-4 w-[120px] bg-slate-700 rounded col-span-2" />
                    <div className="h-4 w-[90px] bg-slate-700 rounded col-span-1" />
                  </div>
                  <div className="grid grid-cols-3 w-[70px]  gap-4">
                    <div className="h-4 w-[50px] bg-slate-700 rounded col-span-2" />
                    <div className="h-4 w-[180px] bg-slate-700 rounded col-span-1" />
                  </div>
                  <div className="grid grid-cols-3 w-[220px] gap-4">
                    <div className="h-4 w-[150px] bg-slate-700 rounded col-span-2" />
                    <div className="h-4 w-[80px] bg-slate-700 rounded col-span-1" />
                  </div>
                  <div className="grid grid-cols-3 w-[130px]  gap-4">
                    <div className="h-4 w-[90px] bg-slate-700 rounded col-span-2" />
                    <div className="h-4 w-[150px] bg-slate-700 rounded col-span-1" />
                  </div>
                </div>
              </p>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
