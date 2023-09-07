import { styled } from "@mui/material";
import { theme } from "/theme/index";

export const Ul = styled("ul")(() => {
  return {
    display: "flex",
    alignItems: "center",
  };
});

export const Li = styled("li")(() => {
  return {
    listStyleType: "none",
    marginRight: 20,
    fontSize: 16,
    lineHeight: "16px",
    letterSpacing: "1%",
    color: theme.palette.text.primary,
    cursor: "pointer",
    transition: ".3s",

    "&:hover": {
      color: "#C6A687",
    },
  };
});
