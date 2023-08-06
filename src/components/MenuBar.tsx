import Image from "next/image";
import hamilton_avatar from "../../public/avatar_hamilton.svg";
import MenuDropdown from "./MenuButton";

const MenuBar = () => {
  return (
    <div className="fixed z-50 xl:max-w-5xl w-full flex justify-between px-2 xl:px-0">
      <div className="relative w-[60px] h-[60px] bg-white rounded-full overflow-hidden">
        <Image
          className="absolute top-0 left-1 translate-x-2 translate-y-2"
          height={40}
          priority
          src={hamilton_avatar}
          alt="Hamilton Memoji"
        />
      </div>
      <div className="h-[60px] flex gap-3 py-1.5 px-1.5 rounded-[60px] drop-shadow-[0px_4px_48px_rgba(0,0,0,0.12)] bg-haze-100 text-btgray">
        <button className="bg-white py-2 px-4 rounded-[60px] drop-shadow-sm">
          Work
        </button>
        <button className="text-plomo-300 py-2 px-4 rounded-[60px] bg-plomo-100">
          Projects
        </button>
      </div>
      <MenuDropdown />
    </div>
  );
};

export default MenuBar;
