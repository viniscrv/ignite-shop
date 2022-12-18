import { styled } from "..";

export const HomeContainer = styled("main", {
    display: "flex",
    width: "100%",
    maxWidth: "calc(100vw - ((100vw - 1080px)/2))",
    marginLeft: "auto",
    minHeight: 656,
});

export const Product = styled("div", {
    background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
    borderRadius: 8,
    cursor: "pointer",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",

    img: {
        objectFit: "cover",
    },

    footer: {
        position: "absolute",
        bottom: "0.25rem",
        left: "0.25rem",
        right: "0.25rem",
        borderRadius: 6,
        padding: "2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        backgroundColor: "#18181b",
        transform: "translateY(110%)",
        opacity: 0,
        transition: "all 0.2s ease-in-out",

        div: {
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",

            strong: {
                fontSize: "$lg",
                color: "$gray100",
            },
            span: {
                fontSize: "$lg",
                fontWeight: "bold",
                color: "$green300",
            }
        },

        button: {
            padding: "0.5rem",
            backgroundColor: "$green300",
            cursor: "pointer",
            border: 0,
            borderRadius: 8,
            color: "$white",
        }
    },

    "&:hover": {
        footer: {
            transform: "translateY(0%)",
            opacity: 1,
        }
    }
});