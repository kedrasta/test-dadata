import { Suspense, useCallback } from "react";
import { Route, RouteProps, Routes } from "react-router-dom";
import Search from "../../pages/Search/Search";
import News from "../../pages/News/News";
import { PreLoader } from "../../components/PreLoader/PreLoader";

export enum AppRoutes {
  MAIN = "main",
  SEARCH_ADDRESS = "search",
  TABLES = "tables",
  CALENDAR = "calendar",
  MAPS = "maps",
  WIDGETS = "widgets",
  PROFILE_SETTINGS = "profile_settings",
  FINANCIAL_MANAGEMENT = "financial_management",
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "",
  [AppRoutes.SEARCH_ADDRESS]: "/address",
  [AppRoutes.TABLES]: "/tables",
  [AppRoutes.CALENDAR]: "/calendar",
  [AppRoutes.MAPS]: "/maps",
  [AppRoutes.WIDGETS]: "/widgets",
  [AppRoutes.PROFILE_SETTINGS]: "/profile_settings",
  [AppRoutes.FINANCIAL_MANAGEMENT]: "/financial_management",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePaths.main,
    element: <News />,
  },
  [AppRoutes.SEARCH_ADDRESS]: {
    path: RoutePaths.search,
    element: <Search />,
  },
  [AppRoutes.TABLES]: {
    path: RoutePaths.tables,
    element: <Search />,
  },
  [AppRoutes.CALENDAR]: {
    path: RoutePaths.calendar,
    element: <Search />,
  },
  [AppRoutes.MAPS]: {
    path: RoutePaths.maps,
    element: <Search />,
  },
  [AppRoutes.WIDGETS]: {
    path: RoutePaths.widgets,
    element: <Search />,
  },
  [AppRoutes.PROFILE_SETTINGS]: {
    path: RoutePaths.profile_settings,
    element: <Search />,
  },
  [AppRoutes.FINANCIAL_MANAGEMENT]: {
    path: RoutePaths.financial_management,
    element: <Search />,
  },
};

export const AppRouter = () => {
  const renderWithWrapper = useCallback((route: RouteProps) => {
    const element = (
      <Suspense fallback={<PreLoader />}>{route.element}</Suspense>
    );
    return <Route key={route.path} path={route.path} element={element} />;
  }, []);

  return (
    <>
      <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
    </>
  );
};
