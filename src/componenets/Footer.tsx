import FooterLogo from "../assets/logo-text.png"

const Footer = () => {
    return (
        <div className="bg-base-200">
            <footer className="container mx-auto sm:footer-horizontal bg-base-200 text-base-content  p-10">

                <div className=" flex justify-between">

                 <aside>

    <img src={FooterLogo} alt="DevStackLogo" />
   
    <p className='text-[#64748B]'>
    Curated tools, technologies, and resources for developers building <br />
      modern software.
    </p>

    <div className="flex items-center gap-2 mt-5 text-[#64748B]">
        <a href="#">GitHub</a>
        <a href="#">Twitter</a>
        <a href="#">LinkedIn</a>
    </div>


  </aside>
  <nav className="md:flex flex-col hidden">
    <h6 className="footer-title">PRODUCT</h6>
    <a className="link link-hover text-[#64748B]">Home</a>
    <a className="link link-hover text-[#64748B] ">Technologies</a>
    <a className="link link-hover text-[#64748B]">Projects</a>
  </nav>
  <nav className="md:flex flex-col hidden" >
    <h6 className="footer-title">COMPANY</h6>
    <a className="link link-hover text-[#64748B]">About</a>
    <a className="link link-hover text-[#64748B]">Contact</a>
    <a className="link link-hover text-[#64748B]">Careers</a>
   
  </nav>
  <nav className="md:flex flex-col hidden">
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover text-[#64748B]">Privacy Policy</a>
    <a className="link link-hover text-[#64748B]">Terms of Service</a>
  </nav>




                </div>
 

   <div className="flex flex-col md:flex-row justify-between items-center md:mt-10 ">
    <small className="text-[#64748B]">© 2026 Dev Stack. All rights reserved.</small>

    <div className="flex gap-2 ">
        <a href="#" className="text-[#64748B]">Privacy</a>
        <a href="#" className="text-[#64748B]">Terms</a>
    </div>

   </div>

</footer>
        </div>
    );
};

export default Footer;