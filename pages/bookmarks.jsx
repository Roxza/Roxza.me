/* eslint-disable @next/next/no-img-element */
import BookmarksLoader from "../components/Loader/Bookmarks";
import swr from "../lib/swr";
export default function Bookmarks() {
  const { data: _bookmarks } = swr("api/data");
  const data = _bookmarks ? _bookmarks.data : null;
  return (
    <>
      {data ? (
        <>
          <>
            <div className="p-12">
              <div className="space-y-5">
                <div className="text-left">
                  <h1 className="text-2xl font-bold leading-9 tracking-tight text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
                    <span className="text-green-500">Bookmarks</span>
                  </h1>

                  <h1 className="text-sm text-black dark:text-zinc-100 font-light">
                    A Collection Of Interesting Tools / Frameworks / Websites I
                    Stumbled Upon On The Internet
                  </h1>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {data.bookmarks.map((d) => (
                    <div key={d.id} className="rounded-lg space-y-2">
                      <a href={d.link}>
                        <div className="hover:-translate-y-[8px] transition-all duration-200 bg-brand-black rounded-lg">
                          <img
                            className="rounded-[1.25rem] p-3"
                            src={d.image}
                          />
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        </>
      ) : (
        <BookmarksLoader />
      )}
    </>
  );
}
