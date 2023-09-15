import { styled } from "@mui/material";

export const Container = styled("div")(() => {
  return {
    margin: "0 0 32px 10px",
  };
});

export const WrapperTitle = styled("div")(() => {
  return {
    display: "flex",
    alignItems: "center",
  };
});

export const Title = styled("button")(() => {
  return {
    margin: "0 24px 0 34px",
    fontWeight: 500,
    fontSize: 32,
    color: "#FDFCFA",
    cursor: "pointer",
    transition: ".3s",
    backgroundColor: "#FFFFFF00",
    border: 0,

    "&:hover": {
      color: "#C6A687",
    },

    "@media (max-width: 375px)": {
      fontSize: 18,
      margin: "0 24px 0 10px",
    },
  };
});

export const Img = styled("img")(() => {
  return {};
});

export const Block = styled("div")(() => {
  return {
    display: "flex",
    justifyContent: "space-between",
    margin: "30px 0 0 56px",

    "@media (max-width: 375px)": {
      margin: "30px 0 0 27px",
    },
  };
});

export const Button = styled("button")(({ active }: { active: boolean }) => {
  return {
    fontWeight: 400,
    fontSize: 14,
    padding: "7px 16px 10px 16px",
    borderRadius: "49px",
    border: "1px solid #494843",
    marginRight: 8,
    backgroundColor: active ? "#C6A687" : "#1E1E21",
    color: active ? "#1E1E21" : "#FDFCFA",
    transition: ".3s",
    cursor: "pointer",

    "&:hover": {
      border: "1px solid #AF8B68",
    },
  };
});

export const WrapperBlock = styled("div")(() => {
  return {};
});

export const Text = styled("p")(() => {
  return {
    fontSize: 16,
    fontWeight: 500,
    color: "#C6A687",
    margin: "6px 0 0 12px",
  };
});

export const Cards = styled("div")(() => {
  return {
    display: "flex",
    width: "100%",
  };
});

export const Card = styled("div")(() => {
  return {
    margin: "42px 24px 0 0",
    cursor: "pointer",
  };
});

export const ImgCad = styled("img")(() => {
  return {};
});

export const Box = styled("div")(() => {
  return {
    display: "flex",
    justifyContent: "space-between",
  };
});

export const Name = styled("p")(() => {
  return {
    fontSize: 14,
    fontWeight: 400,
    color: "#FDFCFA",
  };
});

export const WrapperButtons = styled("div")(() => {
  return {
    "@media (max-width: 375px)": {
      display: "none",
    },
  };
});
