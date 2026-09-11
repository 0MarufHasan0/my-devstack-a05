import Logo from "../assets/logo-text.png"

const Navbar = () => {
    return (
        <div className=" bg-base-100 shadow-sm">

            <div className="navbar container mx-auto px-4"> 
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2">
      <li><a className="text-pink-500 hover:bg-transparent!">Home</a></li>
      <li><a className="hover:text-pink-500 text-[#475569]  hover:bg-transparent! ">Technologies</a></li>
      <li><a className="hover:text-pink-500 text-[#475569] hover:bg-transparent!">Projects</a></li>
      <li><a className="hover:text-pink-500 text-[#475569] hover:bg-transparent!">About</a></li>
      <li><a className="hover:text-pink-500 text-[#475569] hover:bg-transparent!">Contact</a></li>
      </ul>
    </div>

    {/* Logo */}
    <div>
    <img src={Logo} alt="logo"  />
  </div>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className=" font-semibold menu menu-horizontal px-1">
      <li><a className="text-pink-500 ">Home</a></li>
      <li><a className="hover:text-pink-500 text-[#475569]">Technologies</a></li>
      <li><a className="hover:text-pink-500 text-[#475569]">Projects</a></li>
      <li><a className="hover:text-pink-500 text-[#475569]">About</a></li>
      <li><a className="hover:text-pink-500 text-[#475569]">Contact</a></li>

    </ul>
  </div>
  <div className="navbar-end gap-5">
    <a className="btn border-none">Sign In</a>
    <a className="btn rounded-xl text-[#FFFF] bg-[#D91B7E]">Sign Up</a>
  </div>
</div>
            
        </div>
    );
};

export default Navbar;