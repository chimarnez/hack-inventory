import * as React from "react";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import AssignmentIcon from "@mui/icons-material/Assignment";
import InventoryIcon from "@mui/icons-material/Inventory";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useLocation } from "react-router-dom";
import { routes } from "./constants";

const routeIcons: { [k: string]: typeof DashboardIcon } = {
  dashboard: DashboardIcon,
  inventory: InventoryIcon,
  reports: AssignmentIcon,
  calendar: CalendarMonthIcon,
  charts: BarChartIcon,
};

function getIcon(path: string) {
  return routeIcons[path] || routeIcons.reports;
}

const ListItem = (props: any) => {
  const { pathname, selected, navigate, title } = props;
  const Icon = getIcon(pathname);
  return (
    <ListItemButton onClick={() => navigate(`/${pathname}`)}>
      <ListItemIcon>
        <Icon
          sx={{
            ...(selected && {
              color: (theme: any) => theme.palette.secondary.light,
            }),
          }}
        />
      </ListItemIcon>
      <ListItemText
        sx={{
          ...(selected && {
            ".MuiListItemText-primary": {
              color: (theme) => theme.palette.secondary.light,
            },
          }),
        }}
        primary={title}
      />
    </ListItemButton>
  );
};

export const MainListItems = (props: any) => {
  const { pathname } = useLocation();
  const { navigate } = props;
  const listItems = Object.keys(routes).map((key, index) => (
    <ListItem
      key={key + index}
      pathname={key}
      title={routes[key]}
      navigate={navigate}
      selected={pathname.includes(key)}
    />
  ));
  return <>{listItems}</>;
};
