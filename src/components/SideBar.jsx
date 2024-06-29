

import { Sidebar as SidebarFB, } from "flowbite-react";
import { IconOutlineHi } from "./icons/IconOutlineHi";
import { IcOutlineFactory } from "./icons/IcOutlineFactory";
import { IcBaselineAppsOutage } from "./icons/IcBaselineAppsOutage";
import { IcBaselineAddReaction } from "./icons/IcBaselineAddReaction";
import { CarbonApplicationWeb } from "./icons/CarbonApplicationWeb";
import { CarbonCategories } from "./icons/CarbonCategories";


const customTheme = {
  "root": {
    "base": " h-full bg-dark_middle",
    "collapsed": {
      "on": "w-16",
      "off": "w-64"
    },
    "inner": "h-full overflow-y-auto overflow-x-hidden rounded bg-gray-50 px-3 py-4 dark:bg-gray-800"
  },
  "collapse": {
    "button": "group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
    "icon": {
      "base": "h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
      "open": {
        "off": "",
        "on": "text-gray-900"
      }
    },
    "label": {
      "base": "ml-3 flex-1 whitespace-nowrap text-left",
      "icon": {
        "base": "h-6 w-6 transition delay-0 ease-in-out",
        "open": {
          "on": "rotate-180",
          "off": ""
        }
      }
    },
    "list": "space-y-2 py-2"
  },
  "cta": {
    "base": "mt-6 rounded-lg bg-gray-100 p-4 dark:bg-gray-700",
    "color": {
      "blue": "bg-cyan-50 dark:bg-cyan-900",
      "dark": "bg-dark-50 dark:bg-dark-900",
      "failure": "bg-red-50 dark:bg-red-900",
      "gray": "bg-alternative-50 dark:bg-alternative-900",
      "green": "bg-green-50 dark:bg-green-900",
      "light": "bg-light-50 dark:bg-light-900",
      "red": "bg-red-50 dark:bg-red-900",
      "purple": "bg-purple-50 dark:bg-purple-900",
      "success": "bg-green-50 dark:bg-green-900",
      "yellow": "bg-yellow-50 dark:bg-yellow-900",
      "warning": "bg-yellow-50 dark:bg-yellow-900"
    }
  },
  "item": {
    "base": "flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
    "active": "bg-gray-100 dark:bg-gray-700",
    "collapsed": {
      "insideCollapse": "group w-full pl-8 transition duration-75",
      "noIcon": "font-bold"
    },
    "content": {
      "base": "flex-1 whitespace-nowrap px-3"
    },
    "icon": {
      "base": "h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
      "active": "text-gray-700 dark:text-gray-100"
    },
    "label": "",
    "listItem": ""
  },
  "items": {
    "base": ""
  },
  "itemGroup": {
    "base": "mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700"
  },
  "logo": {
    "base": "mb-5 flex items-center pl-2.5",
    "collapsed": {
      "on": "hidden",
      "off": "self-center whitespace-nowrap text-xl font-semibold dark:text-white"
    },
    "img": "mr-3 h-6 sm:h-7"
  }
}

export default function SideBar() {

  return (
    <>
      <SidebarFB
        aria-label="Default sidebar example"
        theme={customTheme}
        className=" "
      >
        <a className="flex items-center gap-4 ">
          <div className="w-[50px] ">
            <img className="" src="/public/Isologo.webp" alt="Programador Proemedio logo" />
          </div>
          <div>
            <h3>Programdor Promedio</h3>
            <strong>Agencia | Academia</strong>
          </div>
        </a>

        <div className="flex flex-col justify-between py-2">
          <div>
            <SidebarFB.Items className="text-left">
              <SidebarFB.ItemGroup>
                <SidebarFB.Item href="/" icon={IconOutlineHi}>
                  Hola
                </SidebarFB.Item>
                <SidebarFB.Item href="/e-commerce/products" icon={IcOutlineFactory}>
                  Proyectos
                </SidebarFB.Item>
                <SidebarFB.Item href="/users/list" icon={IcBaselineAppsOutage}>
                  Servicios
                </SidebarFB.Item>
                <SidebarFB.Item href="/authentication/sign-in" icon={IcBaselineAddReaction}>
                  Nosotros
                </SidebarFB.Item>
              </SidebarFB.ItemGroup>
              <SidebarFB.ItemGroup>
                <SidebarFB.Item href="https://github.com/themesberg/flowbite-react/" icon={CarbonApplicationWeb}>
                  Emulaciones Laborales
                </SidebarFB.Item>
                <SidebarFB.Item href="https://flowbite-react.com/" icon={CarbonCategories}>
                  Recursos
                </SidebarFB.Item>
              </SidebarFB.ItemGroup>
            </SidebarFB.Items>
          </div>
        </div>
      </SidebarFB>
    </>
  );
}
