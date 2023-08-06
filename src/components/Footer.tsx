import Link from "next/link";
import { ImLinkedin, ImGithub } from "react-icons/im";

const Footer = () => {
  return (
    <div className="bg-haze-200 w-full h-32 flex justify-center items-center">
      <div className="flex gap-12 text-3xl text-btgray">
        <Link
          href="https://www.linkedin.com/in/hamilton-chevez/"
          target="_blank"
        >
          <ImLinkedin />
        </Link>
        <Link href="https://github.com/hchev001" target="_blank">
          <ImGithub />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
