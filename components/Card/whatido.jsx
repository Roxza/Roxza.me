const Whatido = (props) => {
  const { data } = props;
  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className="w-full cursor-pointer duration-200 hover:scale-[1.03] h-full p-[6px] rounded-lg space-y-2"
        >
          <div className="bg-gray-300 dark:bg-[#080808] dark:hover:bg-[#101010] py-4 px-6 bg-brand-black h-full rounded-lg">
            <h1 className="text-xl font-bold tracking-tight text-black dark:text-gray-100 sm:text-xl md:text-2xl">
              <span className="pr-2" role="img" aria-label="wave">
                {item.emoji}
              </span>
              {item.name}
            </h1>
            <p className="text-black dark:text-gray-300">{item.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Whatido;
