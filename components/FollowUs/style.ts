import { styled } from "@mui/material";

export const Container = styled("div")(() => {
  return {
    width: "100%",
    maxWidth: 1920,
    margin: "140px auto 0",
    display: "flex",
    justifyContent: "space-between",

    "@media (max-width: 375px)": {
      flexDirection: "column",
      margin: "80px auto 0",
    },
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
  };
});

export const WrapperImg = styled("div")(() => {
  return {
    position: "relative",
    maxWidth: 972,
    height: "100%",
    maxHeight: 639,

    "@media (max-width: 375px)": {
      flexDirection: "column",
    },
  };
});

export const Img = styled("img")(() => {
  return {};
});

export const ImgMob = styled("img")(() => {
  return {
    "@media (max-width: 375px)": {
      width: 375,
    },
  };
});

export const BlockInfo = styled("div")(() => {
  return {
    width: "100%",
    backgroundColor: "#FDFCFA",
  };
});

export const Title = styled("h2")(() => {
  return {
    margin: 0,
    fontSize: 52,
    fontWeight: 500,
    lineHeight: "70px",
    padding: "130px 120px 32px 120px",

    "@media (max-width: 375px)": {
      fontSize: 26,
      lineHeight: "40px",
      padding: "40px 20px 40px 20px",
    },
  };
});

export const Line = styled("hr")(() => {
  return {
    border: "1px solid",
    width: 195,
    display: "flex",
    margin: "0 0 24px 120px",
    borderColor: "#C6A687",
    backgroundColor: "#C6A687",

    "@media (max-width: 375px)": {
      margin: "0 0 24px 20px",
    },
  };
});

export const Text = styled("p")(() => {
  return {
    maxWidth: 576,
    width: "100%",
    margin: 0,
    fontSize: 16,
    fontWeight: 400,
    lineHeight: "25px",
    color: "#494843",
    padding: "0 0 32px 120px",

    "@media (max-width: 375px)": {
      padding: "0 0 24px 20px",
      maxWidth: 350
    },
  };
});

export const BlockLinks = styled("div")(() => {
  return {
    display: "flex",
    flexWrap: "wrap",
    margin: "0 0 0 120px",
    maxWidth: 545,
    width: "100%",

    "@media (max-width: 375px)": {
      margin: "0 0 0 20px",
      maxWidth: 350
    },
  };
});

export const Block = styled("div")(() => {
  return {
    display: "flex",
    width: 240,
    marginBottom: 24,
  };
});

export const Wrapper = styled("a")(() => {
  return {
    width: 52,
    height: 52,
    backgroundColor: "#C6A687",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    marginRight: 16,
    transition: ".3s",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "#AF8B68",
    },
  };
});

export const Name = styled("div")(() => {
  return {
    fontSize: 18,
    fontWeight: 500,
    color: "#1E1E21",
    marginBottom: 8,
  };
});

export const Images = styled("div")(() => {
  return {
    marginLeft: 8,

    "@media (max-width: 375px)": {
      fontSize: 14,
    },
  };
});

export const Followers = styled("div")(() => {
  return {
    marginLeft: 8,

    "@media (max-width: 375px)": {
      fontSize: 14,
    },
  };
});

export const WrapperImages = styled("div")(() => {
  return {
    display: "flex",
    alignItems: "center",
    marginRight: 20,
  };
});

export const WrapperFollowers = styled("div")(() => {
  return {
    display: "flex",
    alignItems: "center",
  };
});

export const WrapperInfo = styled("div")(() => {
  return {};
});

export const WrapperSmall = styled("div")(() => {
  return {
    display: "flex",
  };
});
