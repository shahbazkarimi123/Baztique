function Footer() {
  return (
    <div className="w-full bg-blue-950 text-white flex justify-around pt-6">
      <div>
        <text className="">KNOW BAZTIQUE</text>
        <ul className="pt-6 flex flex-col gap-2">
          <li>
            <a>About Us</a>
          </li>
        </ul>
      </div>
      <div>
        <h1>TERMS & CONDITIONS</h1>
        <ul className="pt-6 flex flex-col gap-2">
          <li>
            <a>Privacy Policy</a>
          </li>
          <li>
            <a>T&C and FAQs</a>
          </li>
        </ul>
      </div>
      <div>
        <h1>CONTACT US</h1>
        <ul className="pt-6 flex flex-col gap-2">
          <li>
            <a>baztique.support@gmail.com</a>
          </li>
          <li>
            <a>+91-7678291404</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Footer;
