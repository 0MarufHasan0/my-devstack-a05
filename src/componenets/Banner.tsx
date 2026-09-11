import BannerImage from "../assets/banner-stack.png"

const Banner = () => {
    return (
        <div>
           <div className="hero bg-base-200 px-4 py-10">
  <div className="hero-content w-full flex-col-reverse  lg:flex-row-reverse lg:justify-around">
    <img
    src={BannerImage}
     alt="Banner Image"
      className="rounded-lg "
    />
    <div>
      <h1 className="text-5xl font-bold">Build Your Ideal <br />
   <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">Development Stack</span></h1>
      <p className="py-6 text-[#475569] text-lg">
       Explore frontend, backend, database, and tooling options, <br />
     compare them side by side, and put together the stack that fits your <br />
      next project.
      </p>
      
     <div className="flex gap-5">
        <button className="btn w-70% bg-linear-to-r rounded-xl from-[#FF5722] to-[#D81B7E] text-[#FFFF]">Explore Technologies</button>
      <button className="btn w-70% rounded-xl text-[#374151]">Learn More</button>
     </div>


    </div>
  </div>
</div>
        </div>
    );
};

export default Banner