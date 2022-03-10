import Image from "next/image";
import boat2 from "../public/Images/boat2.svg";

const Boatbackground = () => {
  return (
    <div>
      <Image alt='Boat Background' src={boat2} />
      <div>
        <h1>Tolerancia Educación y Sabiduría</h1>
      </div>
    </div>
  );
};

export default Boatbackground;
