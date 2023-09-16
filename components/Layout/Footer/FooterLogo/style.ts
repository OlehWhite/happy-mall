import { styled } from "@mui/material";

export const Container = styled("div")(() => {
  return {
    display: "flex",
    alignItems: "flex-start",
    height: 50,
  };
});

export const LogoImg = styled("img")(() => {
  return {
    display: "flex",
    width: 131,
    cursor: "pointer",

    "@media (max-width: 375px)": {
      display: 'none'
    }
  };
});

export const LogoImgMob = styled('img')(() => {
  return {
    display: 'none',

    "@media (max-width: 375px)": {
      display: 'block'
    }
  }
})