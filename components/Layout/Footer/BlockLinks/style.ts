import { styled } from "@mui/material";

export const Container = styled("div")(() => {
  return {
    width: "100%",
    maxWidth: 1100,
  };
});

export const WrapperLinks = styled("div")(() => {
  return {
    display: "flex",
  };
});

export const Img = styled("img")(() => {
  return {};
});

export const WrapperImg = styled("div")(({ theme }) => {
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.text.tertiary,
    marginRight: 8,
    width: 40,
    height: 40,
    borderRadius: "50%",
    transition: ".3s",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: theme.palette.text.hover,
    },
  };
});

export const PrivacyPolicy = styled("div")(({ theme }) => {
  return {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: "20px",
    color: theme.palette.primary.contrastText,
    marginTop: 156,
  };
});

export const WrapperText = styled("div")(() => {
  return {
    display: "flex",
  };
});

export const Text = styled("p")(() => {
  return { marginRight: 20, margin: "8px 0" };
});

export const B = styled("span")(({ theme }) => {
  return {
    color: theme.palette.text.primary,
  };
});

export const Link = styled("a")(() => {
  return {};
});
