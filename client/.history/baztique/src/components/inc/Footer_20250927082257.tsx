import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full bg-[#845ec2] text-white md:flex justify-around  text-center md:text-left pt-6">
      <div>
        <h1 className="">KNOW BAZTIQUE</h1>
        <ul className="pt-6 flex flex-col gap-2">
          <li>
            <Link to={""} className="text-[15px]">About Us</Link>
          </li>
        </ul>
      </div>
      <div>
        <h1>TERMS & CONDITIONS</h1>
        <ul className="pt-6 flex flex-col gap-2">
          <li>
            <Link to={"/privacy-policy"} className="text-[15px]">Privacy Policy</Link>
          </li>
          <li>
            <Link to={"/term-and-condition"} className="text-[15px]">T&C and FAQs</Link>
          </li>
        </ul>
      </div>
      <div>
        <h1>CONTACT US</h1>
        <ul className="pt-6 flex flex-col gap-2">
          <li>
            <Link to={""} className="text-[15px]">baztique.support@gmail.com</Link>
          </li>
          <li>
            <Link to={""} className="text-[15px]">+91-7678291404</Link>
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  );
}
export default Footer;
