export default function RepositoriesLoader() {
  return (
    <>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="text-2xl font-bold leading-9 tracking-tight text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
          Repositories
        </h1>
        <div className="mb-8 prose leading-6 text-justify text-gray-400">
          <p>My open source projects on Github.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
          {Array.from({ length: 4 }).map((item, index) => (
            <div
              key={index}
              className="w-full h-full p-[6px] rounded-lg space-y-2"
            >
              <div className="bg-gray-300 dark:bg-[#080808] dark:hover:bg-[#101010] py-4 px-6 hover:-translate-y-[8px] transition-all duration-200 bg-brand-black h-full rounded-lg">
                <div className="flex">
                  <h1 className="text-xl font-bold py-2 tracking-tight text-gray-300 sm:text-xl md:text-2xl">
                    <div className="h-6 w-[110px] bg-slate-700 rounded" />
                  </h1>
                </div>
                <div className="space-y-2 py-1">
                  <div className="grid grid-cols-3 w-[190px] gap-4">
                    <div className="h-4 w-[120px] bg-slate-700 rounded col-span-2" />
                    <div className="h-4 w-[90px] bg-slate-700 rounded col-span-1" />
                  </div>
                  <div className="grid grid-cols-3 w-[90px]  gap-4">
                    <div className="h-4 w-[50px] bg-slate-700 rounded col-span-2" />
                    <div className="h-4 w-[130px] bg-slate-700 rounded col-span-1" />
                  </div>
                  <div className="grid grid-cols-3 w-[220px] gap-4">
                    <div className="h-4 w-[150px] bg-slate-700 rounded col-span-2" />
                    <div className="h-4 w-[80px] bg-slate-700 rounded col-span-1" />
                  </div>
                  <div className="grid grid-cols-3 w-[140px]  gap-4">
                    <div className="h-4 w-[90px] bg-slate-700 rounded col-span-2" />
                    <div className="h-4 w-[130px] bg-slate-700 rounded col-span-1" />
                  </div>
                </div>
                <br />
                <div className="text-white w-full mt-auto flex-1 flex items-end justify-end space-x-3">
                  <div className="h-5 w-[80px] bg-slate-700 rounded col-span-2" />
                  <div className="h-5 w-[60px] bg-slate-700 rounded col-span-2" />
                  <div className="h-5 w-[40px] bg-slate-700 rounded col-span-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
