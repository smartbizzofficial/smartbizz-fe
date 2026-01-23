export const ROUTE_PATH = {
  DASHBOARD: "/dashboard",
  ORDER: "/order",
  SETTING: "/setting",
  MARKETPLACE_SETTING: "/marketplace-setting",
};

export const MENU_BAR_LIST = [
  {
    sidebarTitle: "Dashboard",
    topbarTitle: "Dashboard",
    path: ROUTE_PATH.DASHBOARD,
  },
  {
    sidebarTitle: "รายการออร์เดอร์",
    topbarTitle: "รายการออร์เดอร์",
    path: ROUTE_PATH.ORDER,
  },
  {
    sidebarTitle: "ตั้งค่าร้านค้า",
    topbarTitle: "ตั้งค่าร้านค้า",
    path: ROUTE_PATH.MARKETPLACE_SETTING,
  },
  {
    sidebarTitle: "ตั้งค่าข้อมูลส่วนตัว",
    topbarTitle: "ตั้งค่าข้อมูลส่วนตัว",
    path: ROUTE_PATH.SETTING,
  },
];
