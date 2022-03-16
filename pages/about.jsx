import React from "react";
import swr from "../lib/swr";

export default function About() {
  const { data: _user } = swr("api/data");
  const user = _user ? _user.data : null;
  return (
    <>
      <div className="p-10 flex flex-col items-center pt-8 space-x-2 bg-opacity-25 rounded-xl">
        {user ? (
          <>
            <img
              className="rounded-full w-40"
              src={`https://cdn.discordapp.com/avatars/${user.user.id}/${user.user.avatar}`}
            />
            <h3 className="pt-4 dark:text-gray-300 text-black pb-2 text-2xl font-bold leading-8 tracking-tight">
              {user.user.username}#{user.user.discriminator}
            </h3>
          </>
        ) : (
          <>
            <div className="animate-pulse border border-gray-700 bg-gray-700 w-[160px] h-[160px] animate-pulse rounded-full" />
            <h3 className="pt-4 dark:text-gray-300 text-black pb-2 text-2xl font-bold leading-8 tracking-tight">
              Roxza#0000
            </h3>
          </>
        )}
        <div className="dark:text-gray-300 text-black">Backend Developer</div>
      </div>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="text-left text-gray-600 dark:text-pink-300 md:text-3xl tracking-tight mb-4">
          About Me
        </h1>
        <div className="prose leading-6 text-justify text-black dark:text-gray-400">
          <p>
            Hello, you can read more about me on this page.
            <br />
            <br />
            Hello, I am a high school student, I am very curious and I like to
            discover new things. I made my first website with Express.JS and
            then I learned many programming languages, lastly I tried hard to
            learn Nuxt.JS. The website you are reading now was made with
            Next.JS. I shared the website publicly on github. I know more than 5
            programming languages and frameworks so far, in my spare time I read
            manga, novels and watch anime and like to learn new things.
            <br />
            <br />
          </p>
          <p>
            In my spare time, I mostly watch anime, read novels and manga, study
            and watch movies, and listen to music as my favourite.
          </p>
          <br />

          <p className="text-2xl">
            Thank you for reading this article.
            <i
              style={{ color: "rgb(239, 68, 68)" }}
              className="cursor-pointer fas fa-heart mx-0.5"
            ></i>
          </p>
        </div>
      </div>
    </>
  );
}
