import { styled } from "@mui/material";

export const WrapperReadMore = styled("div")(() => {
  return {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    transition: "transform 0.3s",

    "&:hover": {
      "& #wrapperReadMoreImgAboutArrow": {
        transform: "rotate(90deg)",
      },

      "& #wrapperReadMoreTextSmall": {
        transition: "transform 0.3s",
        transform: "translate(15px)",
      },
    },
  };
});

export const ImgAboutArrow = styled("img")(() => {
  return {
    position: "absolute",
    left: 11,
    bottom: -2,
    transition: "transform 0.3s",

    "&:hover": {
      transform: "rotate(90deg)",
    },
  };
});

export const ImgAboutCircle = styled("img")(() => {
  return {};
});

export const TextSmall = styled("p")(() => {
  return {
    margin: 0,
    fontSize: 16,
    fontWeight: 500,
    color: "#C6A687",
    transition: "transform 0.3s",
  };
});

export const WrapperAnimationBnt = styled("div")(() => {
  return {
    marginRight: 8,
    position: "relative",
    display: "flex",
  };
});
