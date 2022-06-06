import { FaRegEye } from "react-icons/fa";
import {
  TbPill,
  TbBandage,
  TbHeartRateMonitor,
  TbWindmill,
} from "react-icons/tb";
import { IconType } from "react-icons/lib";
export interface sideMenuItemValueInterface {
  icon: IconType;
  title: string;
}
export const sideMenuItemValue: sideMenuItemValueInterface[] = [
  {
    icon: TbBandage,
    title: "Health guide",
  },
  {
    icon: TbHeartRateMonitor,
    title: "Dashboard",
  },
  {
    icon: TbPill,
    title: "Calender",
  },
  {
    icon: FaRegEye,
    title: "Consultations",
  },
  {
    icon: TbWindmill,
    title: "Health tasks",
  },
];
