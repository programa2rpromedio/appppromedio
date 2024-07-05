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
import { useState, useEffect } from "react";

export default function NavbarDesktop() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 60000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-between py-4">
      <div>
        <SidebarFB.Items className="text-left" >
          <SidebarFB.ItemGroup>
            <NavLink to='/'
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              <SidebarFB.Item icon={IconOutlineHi}>
                Hola
              </SidebarFB.Item>
            </NavLink >

            <NavLink to='/projects'
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              <SidebarFB.Item icon={IcOutlineFactory}>
                Proyectos
              </SidebarFB.Item>
            </NavLink >

            <NavLink to='/services'
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              <SidebarFB.Item icon={IcBaselineAppsOutage}>
                Servicios
              </SidebarFB.Item>
            </NavLink >

            <NavLink to='/about'
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              <SidebarFB.Item icon={IcBaselineAddReaction}>
                Nosotros
              </SidebarFB.Item>
            </NavLink >

          </SidebarFB.ItemGroup>

          <SidebarFB.ItemGroup >
            <SidebarFB.Item href="https://forms.gle/CyYBK3Y4zgWtcVbEA" target="_blank" icon={CarbonApplicationWeb}>
              Emulaciones Laborales
            </SidebarFB.Item>
            <NavLink to="/resources"
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              <SidebarFB.Item icon={CarbonCategories}>
                Recursos
              </SidebarFB.Item>
            </NavLink >
          </SidebarFB.ItemGroup>

          <SidebarFB.ItemGroup >
            <SidebarFB.Item href="https://discord.gg/BQHzVSSf3T" target="_blank" icon={StreamlineDiscord}>
              Discord
            </SidebarFB.Item>
            <SidebarFB.Item href="https://www.youtube.com/@programadorpromedio_" target="_blank" icon={IconoirYoutube}>
              YouTube
            </SidebarFB.Item>
            <SidebarFB.Item href="https://www.instagram.com/programadorpromedio_/" target="_blank" icon={MdiInstagram}>
              Instagram
            </SidebarFB.Item>
            <SidebarFB.Item href="https://calendar.app.google/C3wTReiV55eqCLLH8" target="_blank" icon={FaSolidChalkboardTeacher}>
              Mentoria
            </SidebarFB.Item>

          </SidebarFB.ItemGroup>
        </SidebarFB.Items>
      </div>

      <a href="https://wa.me/5492213649961" target="_blank" className="py-4 px-2">
        <strong className="flex items-center gap-2">En linea 🧑‍💻 <div className="blinking-circle"></div></strong>
        <div>
          {
            new Date().getHours() >= 12 ? `${time} PM` : `${time} AM`
          }
        </div>
      </a>
    </div>
  )
}
