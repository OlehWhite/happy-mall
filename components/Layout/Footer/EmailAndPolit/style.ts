import { styled } from "@mui/material";

export const Container = styled("div")(() => {
  return {
    display: "none",

    "@media (max-width: 375px)": {
      marginTop: 30,
      display: "block",
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

export const PrivacyPolicy = styled("div")(({ theme }) => {
  return {
    "@media (max-width: 375px)": {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: "20px",
      color: "#C9C7C2",
    },
  };
});

export const B = styled("span")(() => {
  return {
    color: "#FDFCFA",
  };
});

export const WrapperText = styled("div")(() => {
  return {
    display: "flex",
    flexDirection: "column",
  };
});

export const Logo = styled("p")(() => {
  return {
    margin: 0,
    padding: "0 0 10px 0",
  };
});

export const Text = styled("p")(() => {
  return {
    marginRight: 20,
    margin: "8px 0",

    "@media (max-width: 375px)": {
      fontSize: 14,
    },
  };
});
