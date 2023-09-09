import { styled } from "@mui/material";

export const Container = styled("div")(() => {
  return {
    marginRight: 95,
  };
});

export const Title = styled("div")(({ theme }) => {
  return {
    color: theme.palette.text.primary,
    marginBottom: 16,
  };
});

export const Form = styled("form")(() => {
  return {
    display: "flex",
  };
});

export const Input = styled("input")(({ theme }) => {
  return {
    border: `1px solid ${theme.palette.primary.light}`,
    backgroundColor: "#ffffff00",
    height: 45,
    width: 258,
    color: theme.palette.text.primary,
    marginRight: 8,
    paddingLeft: 16,
    marginBottom: 39,

    "&:focus": {
      outline: "none",
    },

    "::placeholder": {
      color: theme.palette.text.primary,
    },
  };
});

export const Button = styled("button")(({ theme }) => {
  return {
    width: 48,
    height: 48,
    border: 0,
    backgroundColor: theme.palette.text.tertiary,
    transition: ".3s",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: theme.palette.text.hover,
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

export const Text = styled("h2")(({ theme }) => {
  return {
    fontWeight: 400,
    fontSize: 16,
    color: theme.palette.primary.contrastText,
    margin: 0,
    marginLeft: 18,
  };
});

export const WrapperBlocks = styled("div")(() => {
  return {
    marginBottom: 32,
  };
});
