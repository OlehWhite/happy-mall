import { styled } from "@mui/material";

export const Ul = styled("ul")(() => {
  return {
    display: "flex",
    alignItems: "center",
  };
});

export const Li = styled("li")(({ theme }) => {
  return {
    listStyleType: "none",
    marginRight: 20,
    fontSize: 16,
    lineHeight: "16px",
    letterSpacing: "1%",
    color: "#FDFCFA",
    cursor: "pointer",
    transition: ".3s",

    "&:hover": {
      color: "#C6A687",
    },
  };
});
