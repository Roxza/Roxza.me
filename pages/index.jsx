import Link from "next/link";
import Image from "next/image";
import swr from "../lib/swr";

/* Data */
import tech from "../data/tech.json";
import whatido from "../data/whatido.json";
/* Cards */
import Repositories from "../components/Card/repositories";
import Spotify from "../components/Card/spotify";
import Whatido from "../components/Card/whatido";
import Technologies from "../components/Card/technologies";

/* Loader */
import HomeLoader from "../components/Loader/Home";
import RepoLoader from "../components/Loader/Repositories";

export default function Home() {
  const { data: _user } = swr("api/data");
  const user = _user ? _user.data : null;
  const { data: _repo } = swr("api/repo");
  const repo = _repo ? _repo : null;
  return (
    <>
      {user ? (
        <>
          <div id="hero" className="p-10">
            <h1 className="font-bold text-2xl md:text-5xl tracking-tight mb-2 text-black dark:text-white">
              <span className="text-purple-500">Howdy</span>, I’m Roxza ✌️
            </h1>
            <p className="text-lg leading-7 text-black dark:text-white">
              Hello, I`m a backend developer, I`m a 16 year old high school
              student, I`m very curious, I like to do new things, I recently
              started learning Nuxt.JS and I make simple websites, if you want
              to know more about me, you can check page about me.
              <span className="font-bold text-sky-600 ml-3">
                <Link href="/about">
                  <a className="hover:text-purple-500 dark:hover:text-[#EFBF9C]">
                    <br />
                    <br />
                    Read About Me →
                  </a>
                </Link>
              </span>
            </p>
          </div>

          <div className="p-10">
            <div className="space-x-5 rounded-lg dark:bg-[#080808] bg-gray-300 p-5">
              <div className="order-first mr-5 flex-shrink-0 relative float-right ml-8">
                <Image
                  alt="Roxza"
                  src={`https://cdn.discordapp.com/avatars/${user.user.id}/${user.user.avatar}`}
                  width={130}
                  height={130}
                  className="rounded-full"
                />
                <div
                  className={`${user.user.status} animate-ping border-gray-300 dark:border-[#080808] border-4 w-[24px] h-[24px] rounded-full absolute bottom-0 right-4`}
                ></div>
                <div
                  className={`${user.user.status} border-gray-300 dark:border-[#080808] border-4 w-[24px] h-[24px] rounded-full absolute bottom-0 right-4`}
                ></div>
              </div>
              {user.user.vsc === null ? (
                <>
                  {user.user.spotify === null ? (
                    <>
                      <>
                        <h1 className="mt-6 dark:text-gray-300 text-black text-2xl text-center">
                          “{user.quotes.text}”
                        </h1>
                        <h1 className="py-2 dark:text-gray-400 text-black text-xl text-center">
                          {user.quotes.say}
                        </h1>
                      </>
                    </>
                  ) : (
                    <>
                      <iframe
                        src="https://linkcord.js.org/api/v3/widget/939851664389730304?type=spotify_large&theme=dark"
                        width="450"
                        height="140"
                        allowtransparency="true"
                        frameBorder="0"
                        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                      />
                    </>
                  )}
                </>
              ) : (
                <>
                  <iframe
                    src="https://linkcord.js.org/api/v3/widget/939851664389730304?type=vsc&theme=dark"
                    width="450"
                    height="140"
                    allowtransparency="true"
                    frameBorder="0"
                    sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                  />
                </>
              )}
            </div>
          </div>
          <div className="p-10">
            <div className="py-5 space-y-5">
              <h1 className="text-2xl font-bold leading-9 tracking-tight text-black dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
                <span className="text-orange-500">GitHub</span> Repositories
              </h1>
              {repo ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <Repositories repos={repo} />
                  {repo.length > 4 && (
                    <>
                      <Link href="/repositories">
                        <a className="hover:text-purple-500 dark:hover:text-[#EFBF9C] font-bold text-sky-600 ml-5">
                          View more →
                        </a>
                      </Link>
                    </>
                  )}
                </div>
              ) : (
                <RepoLoader />
              )}
            </div>
          </div>
          <div className="p-10">
            <div className="space-y-5">
              <h1 className="text-2xl font-bold leading-9 tracking-tight text-black dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
                My <span className="text-green-500">Spotify</span> Top Song
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Spotify data={user.spotifyTopSong} />
              </div>
            </div>
          </div>
          <div className="p-10">
            <div className="py-5 space-y-5">
              <h1 className="text-2xl font-bold leading-9 tracking-tight text-black dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
                <span className="text-yellow-500">What</span> I Do 💭
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Whatido data={whatido.whatido} />
              </div>
            </div>
          </div>
          <div className="p-10">
            <div className="py-5 space-y-5">
              <h1 className="text-2xl font-bold leading-9 tracking-tight text-black dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
                <span className="text-blue-500">Technologies</span> I use 💻
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full gap-2 items-center mt-2">
                <Technologies data={tech.tech} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <HomeLoader />
      )}
    </>
  );
}
