import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Box, Typography } from "@mui/material";

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

export const MenuAvatar = (props: any) => {
  const { userName = "Nombre Apellido", email = "email@ejemplo.com" } = props;
  return (
    <Box sx={{ display: "flex", marginX: 3, marginY: 2 }}>
      <Avatar sx={{ bgcolor: stringToColor(userName) }}>
        {`${userName.split(" ")[0][0]}${userName.split(" ")[1][0]}`}
      </Avatar>
      <Box sx={{ display: "flex", flexDirection: "column", marginLeft: 1 }}>
        <Typography variant="subtitle1" sx={{ color: "white", lineHeight: 1 }}>
          {userName}
        </Typography>
        <Typography variant="subtitle2" sx={{ color: "white" }}>
          {email}
        </Typography>
      </Box>
    </Box>
  );
};

export default function BackgroundLetterAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar {...stringAvatar("Kent Dodds")} />
      <Avatar {...stringAvatar("Jed Watson")} />
      <Avatar {...stringAvatar("Tim Neutkens")} />
    </Stack>
  );
}
