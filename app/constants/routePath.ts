export const CUSTOMER_ROUTE_PATH = {
HOMELIST:"home-list"
}


export const ROUTE_PATH = {
  DASHBOARD: "/dashboard",
  ORDER: "/order",
  PERSONAL_SETTING: "/setting",
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
    sidebarTitle: "ตั้งค่า Marketplace",
    topbarTitle: "ตั้งค่า Marketplace",
    path: ROUTE_PATH.MARKETPLACE_SETTING,
  },
  {
    sidebarTitle: "ข้อมูลส่วนตัว",
    topbarTitle: "ข้อมูลส่วนตัว",
    path: ROUTE_PATH.PERSONAL_SETTING,
  },
];
