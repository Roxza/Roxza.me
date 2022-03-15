import Image from "next/image";
const Repositories = (props) => {
  const { data } = props;
  return (
    <>
      {data.map((item, key) => (
        <a
          key={key}
          href={item.link}
          className="p-5 sm:w-full md:w-full  h-[300px] w-[280px] rounded-lg bg-gray-300 dark:bg-[#080808] dark:hover:bg-[#101010]"
        >
          <div className="w-full relative rounded-lg overflow-hidden h-[130px] w-30">
            <Image
              src={item.image}
              className="rounded-lg"
              width={1024}
              height={512}
              alt={item.name}
            />
          </div>
          <div className="w-full pt-2 flex items-center">
            <h1 className="text-3xl font-bold text-black dark:text-white">
              {item.name}
            </h1>
          </div>
          <p
            className="text-md font-normal text-black dark:text-white/50 h-24 overflow-small"
            style={{ overflow: "auto" }}
          >
            {item.description}
          </p>
        </a>
      ))}
    </>
  );
};

export default Repositories;
