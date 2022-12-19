import { styled } from "..";

export const SuccessContainter = styled("main", {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "2rem auto",
    height: 656,

    h1: {
        fontSize: "$2xl",
        color: "$gray100",
    },
    p: {
        fontSize: "$xl",
        color: "$gray300",
        maxWidth: 560,
        textAlign: "center",
        marginTop: "2rem",
        lineHeight: 1.4
    },
    a: {
        textDecoration: "none",
        fontWeight: "bold",
        display: "block",
        marginTop: "5rem",
        fontSize: "$lg",
        color: "$green500",

        "&:hover": {
            color: "$green300",
        }
    }
});

export const ImagesProducts = styled("div", {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    margin: "2rem auto 0",
    maxWidth: 600,
})

export const ImageContainer = styled("div", {
    background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
    borderRadius: 8,
    padding: "1rem",
    marginTop: "4rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,

    img: {
        objectFit: "contain"
    }
});