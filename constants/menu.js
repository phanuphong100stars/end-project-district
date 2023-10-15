export default [
  {
    head: "อาสาสมัคร",
    subMenus: [
      {
        text: "ครัวเรือนที่รับผิดชอบ",
        icon: "mdi-home ",
        active: false,
        to: "house-holds",
        level: [2],
      },
      // {
      //   text: "แก้ไขเบียนครัวเรือน",
      //   icon: "mdi-home-edit ",
      //   active: false,
      //   to: "/edit-house-holds",
      //   level: [2],
      // },
      {
        text: "แก้ไขข้อมูลสมาชิกครัวเรือน",
        icon: "mdi-account-edit ",
        active: false,
        to: "/edit-persons",
        level: [2],
      },
      {
        text: "แก้ไขหัวหน้าครัวเรือน",
        icon: "mdi-book-open-variant ",
        active: false,
        to: "/add-head-house-holds",
        level: [2],
      },
      {
        text: "การเข้าร่วมกิจกรรม",
        icon: "mdi-coffee-to-go",
        active: false,
        to: "/edit-activity-members",
        level: [2],
      },
    ],
  },
  {
    head: "สมาชิกชุมชน",
    subMenus: [
      {
        text: "ทะเบียนครัวเรือนของฉัน",
        icon: "mdi-home ",
        active: false,
        to: "/my-house",
        level: [3],
      },
      {
        text: "การเข้าร่วมกิจกรรม",
        icon: "mdi-coffee-to-go",
        active: false,
        to: "/edit-activity-members",
        level: [3],
      },
    ],
  },
  {
    title: "ทะเบียนครัวเรือน",
    subMenus: [
      {
        text: "เพิ่มทะเบียนครัวเรือน",
        icon: "mdi-home ",
        active: false,
        to: "house-holds",
        level: [1, 4],
      },
      {
        text: "เพิ่มสมาชิกครัวเรือน",
        icon: "mdi-book-open-variant ",
        active: false,
        to: "/add-house-hold-members",
        level: [1],
      },
      {
        text: "เลือกหัวหน้าครัวเรือน",
        icon: "mdi-book-open-variant ",
        active: false,
        to: "/add-head-house-holds",
        level: [1],
      },

      {
        text: "เลือกอาสาสมัคร",
        icon: "mdi-shield-account",
        active: false,
        to: "/add-volunteer-house-holds",
        level: [1],
      },
      {
        text: "แก้ไขทะเบียนครัวเรือน",
        icon: "mdi-home-edit ",
        active: false,
        to: "/edit-house-holds",
        level: [1],
      },
    ],
  },
  {
    title: "สมาชิกชุมชน",
    subMenus: [
      {
        text: "เพิ่มสมาชิกชุมชน",
        icon: "mdi-account-plus ",
        active: false,
        to: "persons",
        level: [1, 4],
      },
      {
        text: "จัดการบัญชีผู้ใช้งาน",
        icon: "mdi-shield-check ",
        active: false,
        to: "/person-roles",
        level: [1],
      },
      {
        text: "แก้ไขสมาชิกชุมชน",
        icon: "mdi-account-edit ",
        active: false,
        to: "/edit-persons",
        level: [1],
      },
    ],
  },

  {
    title: "คณะกรรมการชุมชน",
    subMenus: [
      {
        text: "ตำแหน่ง",
        icon: "mdi-order-alphabetical-ascending",
        active: false,
        to: "/committees",
        level: [1],
      },
      {
        text: "เพิ่มกรรมการชุมชน",
        icon: "mdi-account-multiple",
        active: false,
        to: "/community-board",
        level: [1],
      },

      {
        text: "แก้ไขคณะกรรมการชุมชน",
        icon: "mdi-account-multiple",
        active: false,
        to: "/edit-community-board",
        level: [1],
      },
    ],
  },

  {
    title: "กิจกรรมชุมชน",
    subMenus: [
      {
        text: "กิจกรรมชุมชน",
        icon: "mdi-coffee",
        active: false,
        to: "/activities",
        level: [1, 2, 4],
      },
      {
        text: "การเข้าร่วมกิจกรรม",
        icon: "mdi-coffee-to-go",
        active: false,
        to: "/edit-activity-members",
        level: [1, 2, 4],
      },
    ],
  },
  {
    title: "ตรวจสุขภาพ",
    subMenus: [
      {
        text: "กิจกรรมตรวจสุขภาพ",
        icon: "mdi-heart-plus",
        active: false,
        to: "/health-check",
        level: [1, 2, 4],
      },
      {
        text: "การเข้าร่วมตรวจสุขภาพ",
        icon: "mdi-account-heart",
        active: false,
        to: "/edit-health-check",
        level: [1, 2, 4],
      },
    ],
  },
  {
    title: "ข้อมูลพื้นฐาน",
    subMenus: [
      {
        text: "ข้อมูลชุมชน",
        icon: "mdi-home-group",
        active: false,
        to: "/community-info",
        level: [1, 4],
      },
      {
        text: "ตรอก/ซอย",
        icon: "mdi-source-repository-multiple",
        active: false,
        to: "/alley",
        level: [1, 4],
      },
      {
        text: "ถนน",
        icon: "mdi-road",
        active: false,
        to: "/road",
        level: [1, 4],
      },
      {
        text: "แขวง",
        icon: "mdi-home-city",
        active: false,
        to: "/district",
        level: [1, 4],
      },
      {
        text: "เขต",
        icon: "mdi-home-city",
        active: false,
        to: "/zone",
        level: [1, 4],
      },
    ],
  },
  {
    title: "การใช้งาน",
    subMenus: [
      {
        text: "ออกจากระบบ",
        icon: "mdi-logout",
        active: false,
        to: "/login",
        level: [1, 2, 3, 4],
      },
    ],
  },
];
