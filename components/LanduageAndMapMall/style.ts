import { styled } from "@mui/material";

export const Container = styled("div")(() => {
  return {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: 250,

    "@media (max-width: 375px)": {
      display: "none",
    },
  };
});
