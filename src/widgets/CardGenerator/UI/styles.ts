import styled from "@emotion/styled";

export const CSSInput = styled.input(function () {
  return {
    border: "2px solid grey",
    borderRadius: "10px",
    width: "200px",
    height: "25px",
    margin: "10px 20px",
    textAlign: "center",
    fontFamily: "Didot, serif",
    color: "#7A6959",
    fontSize: "25px",
  };
});

export const CSSText = styled.p(function () {
  return {
    textAlign: "center",
    fontFamily: "Didot, serif",
    color: "#7A6959",
    fontSize: "20px",
  };
});

export const CSSButton = styled.button(function () {
  return {
    border: "2px solid grey",
    fontFamily: "Didot, serif",
    fontSize: "20px",
    textAlign: "center",
    color: "#7A6959",
    width: "200px",
    height: "30px",
    borderRadius: "10px",
    transition: "transform 0.5s, box-shadow 0.5s",

    "&:hover": {
      backgroundColor: "#ffe294",
      transform: "scale(1.1)",
    },
    "&:active": {
      backgroundColor: "#75c3ff",
      transform: "scale(1)",
    },
  };
});

export const CSSCards = styled.div(function () {
  return {
    width: "150px",
    height: "100px",
    borderRadius: "10px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    transition: "transform 0.2s",
  };
});

export const CSSHEXColor = styled.div(function () {
  return {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "18px",
    color: "#fff",
    textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
  };
});

export const CSSRemainingTime = styled.div(function () {
  return {
    textAlign: "center",
    marginBottom: "5px",
    color: "#fff",
    textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
  };
});

export const CSSLinia = styled.div(function () {
  return {
    height: "8px",
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: "4px",
    overflow: "hidden",
  };
});

export const CSSCardLocation = styled.div(function () {
  return {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    marginTop: "30px",
    justifyContent: "center",
  };
});
