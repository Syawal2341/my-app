export default function Home() {
  return (
    <>
      <div className="">
        <h1 className="mt-24 text-6xl font-sans md:Apple Color Emoji">
          Hallo,{" "}
        </h1>
        <h1 className=" text-6xl font-sans md:Apple Color Emoji text-yellow-600/100 ">
          {" "}
          Saya Mussyawal Baihaki{" "}
        </h1>
        <p className=" text-6xl font-sans md:Apple Color Emoji">
          Cyber Security And UI/UX Design
        </p>
        <div>
          <button href="/about" className="mt-20 rounded-lg bg-red-500 w-48 min-h-9 text-white inline-block text-center btn-link">Get Started</button>
        </div>
      </div>
    </>
  );
}
