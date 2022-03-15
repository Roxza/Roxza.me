const Spotify = (props) => {
  const { data } = props;
  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className="w-full cursor-pointer duration-200 hover:scale-[1.03] p-[6px] rounded-lg space-y-2"
        >
          <div className="h-20  bg-gray-300 dark:bg-[#080808] dark:hover:bg-[#101010] py-4 px-6 bg-brand-black rounded-lg">
            <div className="flex flex-row w-fulk">
              <p className="text-sm font-bold text-gray-600">{item.number}</p>

              <div className="flex flex-col pl-3">
                <a
                  id="spotify-name"
                  className="font-medium dark:text-gray-100 text-black truncate w-60 sm:w-96 md:w-full"
                >
                  {item.name}
                </a>
                <p
                  className="text-md font-normal dark:text-white/50 text-gray-600 overflow"
                  style={{ overflow: "auto" }}
                >
                  {item.dec}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Spotify;
