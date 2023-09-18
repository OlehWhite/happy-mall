import { styled } from "@mui/material";

export const Container = styled("div")(() => {
  return {
    display: "flex",
    width: "100%",
    maxWidth: 1920,
    margin: "0 auto",
    boxSizing: "border-box",

    "@media (max-width: 375px)": {
      flexDirection: "column",
    },
  };
});

export const Contacts = styled("div")(() => {
  return {
    width: "100%",
    maxWidth: 948,
    backgroundColor: "#FDFCFA",
    maxHeight: 560,
    paddingLeft: 120,

    "@media (max-width: 375px)": {
      paddingLeft: 20,
      maxHeight: "none",
      maxWidth: 355
    },
  };
});

export const Map = styled("div")(() => {
  return {
    position: "relative",

    "@media (max-width: 375px)": {
      width: "100%",
      overflow: "hidden",
    },
  };
});

export const Logo = styled("img")(() => {
  return {};
});

export const Mall = styled("img")(() => {
  return {
    position: "absolute",
    bottom: "54%",
    left: "35%",
  };
});

export const TitleOC = styled("h2")(() => {
  return {
    fontSize: 40,
    fontWeight: 500,
    color: "#1E1E21",
    margin: 0,
    marginTop: 60,
    paddingBottom: 26,

    "@media (max-width: 375px)": {
      fontSize: 24,
    },
  };
});

export const TitleHTA = styled("h2")(() => {
  return {
    fontSize: 40,
    fontWeight: 500,
    color: "#1E1E21",
    margin: 0,
    paddingBottom: 26,
    marginTop: 46,

    "@media (max-width: 375px)": {
      fontSize: 24,
    },
  };
});

export const Line = styled("hr")(() => {
  return {
    border: "1px solid",
    width: 195,
    borderColor: "#C6A687",
    backgroundColor: "#C6A687",
    margin: 0,
  };
});

export const WrapperOurContacts = styled("div")(() => {
  return {
    display: "flex",
    flexWrap: "wrap",
    marginTop: 20,
  };
});

export const HowToArrive = styled("div")(() => {
  return {};
});

export const Block = styled("div")(() => {
  return {
    display: "flex",
    alignItems: "center",
    width: 330,
    margin: "0 24px 16px 0",
  };
});

export const Img = styled("img")(() => {
  return {};
});

export const TitleContact = styled("h3")(() => {
  return {
    margin: 0,
    marginLeft: 8,
    fontSize: 16,
    fontWeight: 400,
    color: "#494843",
  };
});

export const WrapperHowToArrive = styled("div")(() => {
  return {
    display: "flex",
    flexWrap: "wrap",
    marginTop: 26,
  };
});
