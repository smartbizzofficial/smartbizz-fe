export const CUSTOMER_ROUTE_PATH = {
HOMELIST:"home-list"
}


export const ROUTE_PATH = {
  DASHBOARD: "/dashboard",
  ORDER: "/order",
  PERSONAL_SETTING: "/setting",
  MARKETPLACE_SETTING: "/marketplace-setting",
  JOB: "/job",
  JOB_CREATE: "/job/create",
  CUSTOMER: "/customer",
  PROPERTY: "/property",
  PROPERTY_CREATE: "/property/create",
};

export const MENU_BAR_LIST = [
  {
    sidebarTitle: "งาน",
    path: ROUTE_PATH.JOB,
  },
  {
    sidebarTitle: "ลูกค้า",
    path: ROUTE_PATH.CUSTOMER,
  },
  {
    sidebarTitle: "บ้านพูลวิลล่า",
    path: ROUTE_PATH.PROPERTY,
  },
  // {
  //   sidebarTitle: "Dashboard",
  //   path: ROUTE_PATH.DASHBOARD,
  // },
  // {
  //   sidebarTitle: "รายการออร์เดอร์",
  //   path: ROUTE_PATH.ORDER,
  // },
  // {
  //   sidebarTitle: "ตั้งค่า Marketplace",
  //   path: ROUTE_PATH.MARKETPLACE_SETTING,
  // },
  // {
  //   sidebarTitle: "ข้อมูลส่วนตัว",
  //   path: ROUTE_PATH.PERSONAL_SETTING,
  // },
];
