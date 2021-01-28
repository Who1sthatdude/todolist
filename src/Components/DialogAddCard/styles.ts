import {createStyles, Theme} from "@material-ui/core";

const styles = (theme: Theme) => createStyles({
    title:{
        textAlign: "center",
    },
    dialogWidth:{
        width: 450,
        padding: theme.spacing(0, 1)
    },
    text:{
        marginBottom: theme.spacing(2)
    },

});

export default styles;