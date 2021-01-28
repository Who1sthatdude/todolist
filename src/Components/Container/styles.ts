import {createStyles, Theme} from "@material-ui/core";

const styles = (theme: Theme) => createStyles({
    leftSideBar: {
        borderRight: "solid 1px",
        minHeight: "100%",
        minWidth: "20%",
    },
    container: {
        display: "flex",
        width: "100%",
        height: "100%",
    },
    cards: {
        maxWidth: "80%",
        overflowX: "auto",
        display: "flex",
    }
});

export default styles;