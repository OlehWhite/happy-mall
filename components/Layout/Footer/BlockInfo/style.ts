import { styled } from "@mui/material";

export const Container = styled("div")(() => {
  return {
    marginRight: 95,
  };
});

export const Title = styled("div")(() => {
  return {
    color: "#FDFCFA",
    marginBottom: 16,
  };
});

export const Form = styled("form")(() => {
  return {
    display: "flex",
  };
});

export const Input = styled("input")(() => {
  return {
    border: `1px solid #494843`,
    backgroundColor: "#ffffff00",
    height: 45,
    width: 258,
    color: "#FDFCFA",
    marginRight: 8,
    paddingLeft: 16,
    marginBottom: 39,

    "&:focus": {
      outline: "none",
    },

    "::placeholder": {
      color: "#FDFCFA",
    },
  };
});

export const Button = styled("button")(() => {
  return {
    width: 48,
    height: 48,
    border: 0,
    backgroundColor: "#C6A687",
    transition: ".3s",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "#AF8B68",
    },
  };
});

export const Img = styled("img")(() => {
  return {};
});

export const Block = styled("div")(() => {
  return {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 16,
  };
});

export const Text = styled("h2")(() => {
  return {
    fontWeight: 400,
    fontSize: 16,
    color: "#C9C7C2",
    margin: 0,
    marginLeft: 18,
  };
});

export const WrapperBlocks = styled("div")(() => {
  return {
    marginBottom: 32,
  };
});
