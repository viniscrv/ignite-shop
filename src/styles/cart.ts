import { styled } from ".";
import * as Dialog from '@radix-ui/react-dialog';

export const CartContainer = styled("div", {
    maxHeight: "100vh",
    height: "100%",
    width: 480,
    backgroundColor: "$gray800",
    position: "absolute",
    top: 0,
    right: 0,
});

export const Overlay = styled(Dialog.Overlay, {
    backgroundColor: "rgba(0,0,0,0.4)",
    position: "fixed",
    inset: 0,
});

export const CloseButton = styled(Dialog.Close, {
    backgroundColor: "transparent",
    position: "absolute",
    cursor: "pointer",
    border: 0,
    top: 24,
    right: 24,
});

export const Content = styled(Dialog.Content, {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    padding: "4rem 2rem",
});

export const ItemsList = styled("div", {
    div: {
        maxHeight: 100,
        display: "flex",
        gap: "1rem",
        marginTop: ".8rem",
        ".image-box": {
            width: "100px",
            height: "93px",
            background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
            borderRadius: 8,
            img : {
                objectFit: "cover",
            }
        },
        div: {
            display: "flex",
            flexDirection: "column",
            p: {
                fontSize: "$md",
                color: "$gray300",
            },
            span: {
                color: "$white",
                fontSize: "$lg",
                fontWeight: "bold",
                lineHeight: 1
            },
            button: {
                backgroundColor: "transparent",
                color: "$green500",
                border: 0,
                fontWeight: "bold",
                width: "min-content",
                cursor: "pointer",
                fontSize: "$md",

                "&:hover": {
                    color: "$green300",
                }
            }
        }
    }
});

export const PurshaseInfo = styled("div", {
    display: "flex",
    flexDirection: "column",
    gap: ".8rem",
    ".quantity": {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
    },
    ".price": {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        fontWeight: "bold",
        fontSize: "$md",
    },
    button : {
        width: "100%",
        borderRadius: 8,
        border: 0,
        color: "$white",
        fontWeight: "bold",
        backgroundColor: "$green500",
        fontSize: "$md",
        padding: "1.4rem",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "$green300",
        }
    }
});