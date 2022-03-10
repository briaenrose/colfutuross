import Image from "next/image";
import logo from "../public/Images/logo.png";

const Logo = () => (
  <div>
    <Image alt='Logo' src={logo} width={87} height={80} />
  </div>
);

export default Logo;
