export default function BookmarksLoader() {
  return (
    <>
      <div className="p-12">
        <div className="py-5 space-y-5">
          <div className="relative mb-5 w-full">
            <h1 className="heading-text absolute bottom-5 left-5 text-3xl text-white font-bold text-center">
              Bookmarks
            </h1>
            <h1 className="  text-sm text-zinc-100 font-light text-center">
              A Collection Of Interesting Tools / Frameworks / Websites I
              Stumbled Upon On The Internet
            </h1>
          </div>

          <div className="animate-pulse grid grid-cols-1 md:grid-cols-3 gap-3">
            {Array.from({ length: 6 }).map((item, index) => (
              <div key={index} className="rounded-lg space-y-2 w-[220px]">
                <div className="bg-gray-300 dark:bg-[#080808] dark:hover:bg-[#101010] hover:-translate-y-[8px] transition-all duration-200 bg-brand-black rounded-lg">
                  <div className="w-[220px] h-[126px] bg-slate-700 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
