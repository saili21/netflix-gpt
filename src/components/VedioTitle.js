const VedioTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-24 absolute bg-gradient-to-r from-black text-white w-screen aspect-video">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-white rounded-lg text-black p-4 px-12 text-lg hover:bg-opacity-50">
          ▶︎ Play
        </button>
        <button className="mx-2 bg-gray-400 bg-opacity-50 rounded-lg text-white p-4 px-12 text-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VedioTitle;
