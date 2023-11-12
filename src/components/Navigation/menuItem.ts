import { RoutePaths } from "../../providers/AppRouter.tsx/AppRouter";

export interface MenuItem {
  name: string;
  icon: string;
  id: number;
  active?: boolean;
  path: string;
  child?: MenuItem[];
}

export const menuItem: MenuItem[] = [
  {
    name: "Главная",
    icon: "home",
    id: 1,
    path: RoutePaths.main,
  },
  {
    name: "Поиск адресов",
    icon: "searchAdress",
    id: 2,
    path: RoutePaths.search,
  },
  {
    name: "Таблицы",
    icon: "table",
    id: 3,
    path: RoutePaths.tables,
  },
  {
    name: "Календарь",
    icon: "calendar",
    id: 4,
    path: RoutePaths.tables,
  },
  {
    name: "Карты",
    icon: "maps",
    id: 5,
    path: RoutePaths.tables,
  },
  {
    name: "Виджеты",
    icon: "widgets",
    id: 6,
    path: RoutePaths.tables,
  },
  {
    name: "Настройки",
    icon: "settings",
    id: 7,
    active: true,
    path: RoutePaths.search,
    child: [
      {
        name: "Настройки профиля",
        icon: "settingsProfile",
        id: 71,
        path: RoutePaths.main,
      },
      {
        name: "Управление финансами",
        icon: "management",
        id: 72,
        path: RoutePaths.main,
      },
    ],
  },
  {
    name: "Выход",
    icon: "exit",
    id: 8,
    path: RoutePaths.tables,
  },
];
