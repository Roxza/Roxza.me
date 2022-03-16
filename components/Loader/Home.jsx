const HomeLoader = () => {
  return (
    <>
      <div id="hero" className="p-10 animate-pulse">
        <div>
          <h1 className="font-bold text-2xl md:text-5xl tracking-tight mb-2 text-white">
            <div className="h-6 w-[220px] bg-slate-700 rounded" />
          </h1>

          <div className="space-y-5 py-1">
            <div className="grid grid-cols-3 w-[600px] gap-4">
              <div className="h-4 bg-slate-700 rounded col-span-2" />
              <div className="h-4 bg-slate-700 rounded col-span-1" />
            </div>
            <div className="grid grid-cols-3 w-[560px]  gap-4">
              <div className="h-4 w-[310px] bg-slate-700 rounded col-span-2" />
              <div className="h-4 w-[290px] bg-slate-700 rounded col-span-1" />
            </div>
            <div className="grid grid-cols-3 w-[410px]  gap-4">
              <div className="h-4 w-[240px] bg-slate-700 rounded col-span-2" />
              <div className="h-4 w-[420px] bg-slate-700 rounded col-span-1" />
            </div>
            <div className="grid grid-cols-3 w-[510px]  gap-4">
              <div className="h-4 w-[320px] bg-slate-700 rounded col-span-2" />
              <div className="h-4 w-[250px] bg-slate-700 rounded col-span-1" />
            </div>
          </div>
        </div>
      </div>
      <div className="p-10 animate-pulse">
        <div className="py-5 space-y-5">
          <h1 className="text-2xl font-bold leading-9 tracking-tight text-black dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
            <span className="text-orange-500">GitHub</span> Repositories
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {Array.from({ length: 4 }).map((item, index) => (
              <div
                key={index}
                className="w-full h-full p-[6px] rounded-lg space-y-2"
              >
                <div className="bg-gray-300 dark:bg-[#080808] dark:hover:bg-[#101010] py-4 px-6 hover:-translate-y-[8px]  transition-all duration-200 bg-brand-black h-full rounded-lg">
                  <div className="flex">
                    <h1 className="text-xl font-bold py-2 tracking-tight text-black dark:text-gray-100 sm:text-xl md:text-2xl">
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
                      <div className="h-4 w-[150px] bg-slate-700 rounded col-span-1" />
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
      </div>
      <div className="p-10 animate-pulse">
        <div className="space-y-5">
          <h1 className="text-2xl font-bold leading-9 tracking-tight text-black dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
            My <span className="text-green-500">Spotify</span> Top Song
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {Array.from({ length: 2 }).map((item, index) => (
              <div
                key={index}
                className="w-full cursor-pointer duration-200 hover:scale-[1.03] p-[6px] rounded-lg space-y-2"
              >
                <div className="h-20 bg-gray-300 dark:bg-[#080808] dark:hover:bg-[#101010] py-4 px-6 bg-brand-black rounded-lg">
                  <div className="flex flex-row w-full">
                    <div className="text-sm font-bold h-10 w-[20px] bg-slate-700 rounded col-span-2" />
                    <div className="space-y-2">
                      <div className="h-10 mr-2 w-[200px] bg-slate-700 rounded col-span-2" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeLoader;
