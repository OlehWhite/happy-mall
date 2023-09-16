import { styled } from "@mui/material";

export const FooterBlock = styled("footer")(() => {
  return {
    display: "flex",
    width: "100%",
    maxWidth: 1920,
    margin: "0 auto",
    padding: "0 120px",
    boxSizing: "border-box",
    marginTop: 72,
    marginBottom: 72,

    "@media (max-width: 375px)": {
      padding: '0 20px',
      flexDirection: 'column',
      marginTop: 30,
      marginBottom: 30
    }
  };
});
