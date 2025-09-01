function Footer() {
  return (
    <div className="w-full bg-blue-950 text-white md:flex justify-around  text-center md pt-6">
      <div>
        <h1 className="">KNOW BAZTIQUE</h1>
        <ul className="pt-6 flex flex-col gap-2">
          <li>
            <a className="text-[15px]">About Us</a>
          </li>
        </ul>
      </div>
      <div>
        <h1>TERMS & CONDITIONS</h1>
        <ul className="pt-6 flex flex-col gap-2">
          <li>
            <a className="text-[15px]">Privacy Policy</a>
          </li>
          <li>
            <a className="text-[15px]">T&C and FAQs</a>
          </li>
        </ul>
      </div>
      <div>
        <h1>CONTACT US</h1>
        <ul className="pt-6 flex flex-col gap-2">
          <li>
            <a className="text-[15px]">baztique.support@gmail.com</a>
          </li>
          <li>
            <a className="text-[15px]">+91-7678291404</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Footer;
