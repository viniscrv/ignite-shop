import { styled } from "..";

export const Container = styled("div", {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    minHeight: "100vh",
});

export const Header = styled("header", {
    padding: "3rem 0",
    width: "100%",
    maxWidth: 1180,
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    button: {
        padding: ".8rem",
        backgroundColor: "$gray800",
        color: "#8d8d99",
        cursor: "pointer",
        border: 0,
        borderRadius: 8,
    },

    ".badge": {
        padding: ".2rem",
        backgorundColor: "$green300",
    }
});