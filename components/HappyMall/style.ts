import { styled } from "@mui/material";

export const Container = styled("div")(() => {
  return {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: 1920,
    padding: "0 120px",
    boxSizing: "border-box",
    margin: "140px auto 0",

    "@media (max-width: 375px)": {
      flexDirection: "column-reverse",
      padding: "0 20px",
      margin: "80px auto 0",
    },
  };
});

export const WrapperImg = styled("div")(() => {
  return {
    position: "relative",
    maxWidth: 834,
    height: "100%",

    "@media (max-width: 375px)": {
      marginTop: 46,
    },
  };
});

export const Img = styled("img")(() => {
  return {
    width: "100%",
    maxWidth: 834,
    height: "auto",
    display: "block",
  };
});

export const WrapperPlay = styled("div")(() => {
  return {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
    display: "flex",
    border: `2px solid #C9C7C2`,
    height: 72,
    width: 72,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    backdropFilter: "blur(5px)",
    cursor: "pointer",
    transition: ".3s",

    "&:hover": {
      border: `2px solid #C6A687`,
    },

    "@media (max-width: 375px)": {
      height: 56,
      width: 56,
    },
  };
});

export const WrapperAboutMall = styled("div")(() => {
  return {
    width: "100%",
    maxWidth: 689,
  };
});

export const Title = styled("h1")(() => {
  return {
    fontSize: 52,
    lineHeight: "63px",
    color: "#FDFCFA",
    margin: 0,
    fontFamily: "Ordina-Regular",

    "@media (max-width: 375px)": {
      fontSize: 26,
      lineHeight: "30px",
    },
  };
});

export const Line = styled("hr")(() => {
  return {
    width: 195,
    borderColor: "#C6A687",
    margin: "40px 0 32px 0",
  };
});

export const Text = styled("p")(() => {
  return {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: "28px",
    color: "#C9C7C2",
    marginBottom: 44,
    height: 93,

    "@media (max-width: 375px)": {
      marginBottom: 168,
    },
  };
});

export const WrapperSmallImg = styled("div")(() => {
  return {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: 22,

    "@media (max-width: 375px)": {
      display: "none",
    },
  };
});

export const ImgSmall = styled("img")(() => {
  return {
    marginRight: 8,
  };
});
