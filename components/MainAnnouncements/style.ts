import { styled } from "@mui/material";

export const Container = styled("div")(() => {
  return {
    width: "100%",
    maxWidth: 1920,
    margin: "0 auto",
    padding: "0 120px",
    boxSizing: "border-box",

    "@media (max-width: 375px)": {
      padding: "0 20px",
    },
  };
});

export const Wrapper = styled("div")(() => {
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",

    "@media (max-width: 375px)": {
      flexWrap: 'wrap',
      marginBottom: 20
    }
  };
});

export const Title = styled("h2")(() => {
  return {
    textAlign: "center",
    fontSize: 52,
    fontWeight: 500,
    color: "#FDFCFA",
    margin: "0 0 32px 0",

    "@media (max-width: 375px)": {
      fontSize: 26,
    },
  };
});

export const Info = styled("div")(() => {
  return {
    cursor: "pointer",
    marginRight: 24,
  };
});

export const Img = styled("img")(() => {
  return {};
});

export const ImgInfo = styled("img")(() => {
  return {
    "@media (max-width: 375px)": {
      width: 335,
    },
  };
});

export const WrapperInfos = styled("div")(() => {
  return {
    position: "relative",
    display: "flex",
    marginTop: 40,
  };
});

export const TitleInfo = styled("p")(() => {
  return {
    fontSize: 14,
    fontWeight: 400,
    color: "#C6A687",
    marginLeft: 8,
  };
});

export const Text = styled("p")(() => {
  return {
    margin: "0 0 12px 0",
    fontSize: 18,
    fontWeight: 400,
    color: "#FDFCFA",
    lineHeight: "25px",

    "@media (max-width: 375px)": {
      fontSize: 16,
    },
  };
});

export const Date = styled("p")(() => {
  return {
    margin: "0 0 12px 0",
    fontSize: 14,
    fontWeight: 400,
    color: "#C9C7C2",
  };
});

export const WrapperTitle = styled("div")(() => {
  return {
    display: "flex",
    alignItems: "center",
    marginTop: 24,
  };
});

export const AllAnons = styled("div")(() => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 48,
  };
});

export const ButtonLeft = styled("div")(() => {
  return {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #C9C7C2",
    width: 48,
    height: 48,
    backdropFilter: "blur(5px)",
    left: -60,
    transition: ".3s",

    "&:hover": {
      backgroundColor: "#AF8B68",
    },
  };
});

export const ButtonRight = styled("div")(() => {
  return {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #C9C7C2",
    width: 48,
    height: 48,
    backdropFilter: "blur(5px)",
    right: -60,
    transition: ".3s",

    "&:hover": {
      backgroundColor: "#AF8B68",
    },
  };
});

export const WrapperLeft = styled("div")(() => {
  return {
    position: "absolute",
    left: "2%",
    top: "36%",
    transform: "translateY(-50%)",
    zIndex: 10,
    cursor: "pointer",

    "@media (max-width: 375px)": {
      display: "none",
    },
  };
});

export const WrapperRight = styled("div")(() => {
  return {
    position: "absolute",
    right: "2%",
    top: "36%",
    transform: "translateY(-50%)",
    zIndex: 10,
    cursor: "pointer",

    "@media (max-width: 375px)": {
      display: "none",
    },
  };
});

export const Menu = styled("button")(({ active }: { active: boolean }) => {
  return {
    margin: "0 16px",
    fontSize: 14,
    fontWeight: 400,
    color: active ? "#C6A687" : "#FDFCFA",
    backgroundColor: "#ffffff00",
    border: 0,
    borderBottom: `2px solid ${active ? "#C6A687" : "#ffffff00"}`,
    cursor: "pointer",
    transition: ".3s",
    paddingBottom: 20,

    "&:hover": {
      color: "#AF8B68",
      borderBottom: "2px solid #C6A687",
    },

    "@media (max-width: 375px)": {},
  };
});
