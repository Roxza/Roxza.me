import Image from "next/image";
const Tech = (props) => {
  const { data } = props;
  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-gray-300 dark:bg-[#080808] dark:hover:bg-[#101010] hover:scale-[1.03] text-black dark:text-white p-2 px-4 shadow-lg hover:shadow-xl transition-all duration-200 rounded-lg w-full"
        >
          <div className="flex justify-between items-center w-full">
            <div className="flex justify-center items-center h-[26px]">
              <Image
                alt={item.name}
                src={item.path}
                className="rounded-md"
                width={24}
                height={24}
              />
            </div>
            <p className="text-md">{item.name}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Tech;
