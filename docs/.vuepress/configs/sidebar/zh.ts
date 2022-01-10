import type { SidebarConfig } from "@vuepress/theme-default";

export const zh: SidebarConfig = {
  "/use": [
    {
      isGroup: true,
      text: "使用指南",
      children: [
        "/use/README.md"
      ]
    }
  ],
  "/dev/": [
    {
      isGroup: true,
      text: "开发指南",
      children: [
        "/dev/README.md",
        "/dev/background.md",
        "/dev/cloudcat.md",
        "/dev/subscribe.md",
        "/dev/config.md",
        "/dev/api.md",
        "/dev/cat-api.md",
        "/dev/meta.md",
      ],
    },
  ],
  "/change/": [
    {
      isGroup: true,
      text: "更新日志",
      children:[
        "/change/README.md"
      ]
    }
  ],
  "/privacy/": [
    {
      isGroup: true,
      text: "隐私协议",
      children:[
        "/privacy/README.md"
      ]
    }
  ]
};
