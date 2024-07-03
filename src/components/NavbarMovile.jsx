import { Sidebar as SidebarFB, } from "flowbite-react";
import { IconOutlineHi } from "./icons/IconOutlineHi";
import { IcOutlineFactory } from "./icons/IcOutlineFactory";
import { IcBaselineAppsOutage } from "./icons/IcBaselineAppsOutage";
import { IcBaselineAddReaction } from "./icons/IcBaselineAddReaction";
import { CarbonApplicationWeb } from "./icons/CarbonApplicationWeb";
import { CarbonCategories } from "./icons/CarbonCategories";
import { StreamlineDiscord } from "./icons/StreamlineDiscord";
import { FaSolidChalkboardTeacher } from "./icons/FaSolidChalkboardTeacher";
import { IconoirYoutube } from "./icons/IconoirYoutube";
import { MdiInstagram } from "./icons/MdiInstagram";
import { NavLink } from "react-router-dom";

export default function NavbarMovile() {
  return (
    <div className="flex flex-col items-center justify-between py-4">
      <div>
        <SidebarFB.Items className="text-left" >
          <SidebarFB.ItemGroup className="flex flex-col gap-2">
            <NavLink to='/'
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              <IconOutlineHi className="w-[30px] h-[30px]" />
            </NavLink >
            <NavLink to='/projects'
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              <IcOutlineFactory className="w-[30px] h-[30px]" />
            </NavLink >

            <NavLink to='/services'
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              <IcBaselineAppsOutage className="w-[30px] h-[30px]" />
            </NavLink >

            <NavLink to='/about'
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              <IcBaselineAddReaction className="w-[30px] h-[30px]" />
            </NavLink >

          </SidebarFB.ItemGroup>

          <SidebarFB.ItemGroup className="flex flex-col gap-2">

            <NavLink to="https://forms.gle/CyYBK3Y4zgWtcVbEA" target="_blank" >
              <CarbonApplicationWeb className="w-[30px] h-[30px]" />
            </NavLink >
            <NavLink to="/resources"
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              <CarbonCategories className="w-[30px] h-[30px]" />
            </NavLink >
          </SidebarFB.ItemGroup>

          <SidebarFB.ItemGroup className="flex flex-col gap-2">

            <NavLink to="https://discord.gg/BQHzVSSf3T" target="_blank" >
              <StreamlineDiscord className="w-[30px] h-[30px]" />
            </NavLink >
            <NavLink to="https://www.youtube.com/@programadorpromedio_" target="_blank">
              <IconoirYoutube className="w-[30px] h-[30px]" />
            </NavLink >
            <NavLink to="https://www.instagram.com/programadorpromedio_/" target="_blank" >
              <MdiInstagram className="w-[30px] h-[30px]" />
            </NavLink >
            <NavLink to="https://calendar.app.google/C3wTReiV55eqCLLH8" target="_blank" >
              <FaSolidChalkboardTeacher className="w-[30px] h-[30px]" />
            </NavLink >
          </SidebarFB.ItemGroup>

        </SidebarFB.Items>
      </div>
    </div>
  )
}
