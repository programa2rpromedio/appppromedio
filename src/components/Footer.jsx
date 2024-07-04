import { Footer as FooterFB } from "flowbite-react";
import { MdiInstagram } from "./icons/MdiInstagram";
import { MdiWhatsapp } from "./icons/MdiWhatsapp";
import { IconoirYoutube } from "./icons/IconoirYoutube";
import { StreamlineDiscord } from "./icons/StreamlineDiscord";
import { Link } from "react-router-dom";

const customTheme = {
  "root": {
    "base": "w-full   bg-dark_middle shadow dark:bg-gray-800 md:flex md:items-center md:justify-between",
    "container": "w-full p-6",
    "bgDark": "bg-gray-800"
  },
  "groupLink": {
    "base": "flex flex-wrap text-sm text-gray-500 dark:text-white",
    "link": {
      "base": "me-4 last:mr-0 md:mr-6",
      "href": "hover:underline"
    },
    "col": "flex-col space-y-4"
  },
  "icon": {
    "base": "text-gray-500 dark:hover:text-white",
    "size": "h-5 w-5"
  },
  "title": {
    "base": "mb-6 text-sm font-semibold uppercase text-gray-500 dark:text-white"
  },
  "divider": {
    "base": "my-6 w-full border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8"
  },
  "copyright": {
    "base": "text-sm text-gray-500 dark:text-gray-400 sm:text-center",
    "href": "ml-1 hover:underline",
    "span": "ml-1"
  },
  "brand": {
    "base": "mb-4 flex items-center sm:mb-0",
    "img": "mr-3 h-8",
    "span": "self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-white"
  }
}


export function Footer() {
  return (
    <FooterFB theme={customTheme} container >
      <div className="w-full">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">

          <div>
            <Link to='/' className="flex items-center gap-4 ">
              <div className="w-[50px] ">
                <img className="" src="/Isologo.webp" alt="Programador Proemedio logo" />
              </div>
              <div>
                <h3>Programdor Promedio</h3>
              </div>
            </Link>
          </div>

          <FooterFB.LinkGroup>
            <FooterFB.Link href="#">About</FooterFB.Link>
            <FooterFB.Link href="#">Privacy Policy</FooterFB.Link>
            <FooterFB.Link href="#">Licensing</FooterFB.Link>
            <FooterFB.Link href="https://wa.me/5492213649961" target="_blank">Contact</FooterFB.Link>
          </FooterFB.LinkGroup>

        </div>

        <FooterFB.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterFB.Copyright href="#" by="Programador Promedio" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <a href="https://www.instagram.com/programadorpromedio_/" target="_blank">
              <MdiInstagram />
            </a>
            <a href="https://www.youtube.com/channel/UCG3x5_67j-YGsZ88dWDSbhA" target="_blank">
              <IconoirYoutube />
            </a>
            <a href="https://discord.gg/BQHzVSSf3T" target="_blank">
              <StreamlineDiscord />
            </a>
            <a href="https://wa.me/5492213649961" target="_blank">
              <MdiWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </FooterFB>
  );
}
