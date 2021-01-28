import {createStyles, Theme} from "@material-ui/core";
import {grey} from "@material-ui/core/colors";

const styles = (theme: Theme) => createStyles({
    card:{
        width: 350,
        height: 450,
        overflow: "auto",
        padding: theme.spacing(1),
        border: "1px solid",
        borderRadius: "5px",
        flexShrink: 0,
        margin: theme.spacing(0, 1),
    },
    paddingNone:{
        padding: 0,
    },
    innerCard:{
        width: 320,
        height: "auto",
        margin: 0,
        borderColor: grey[400],
        marginBottom: theme.spacing(2),
    }
});

export default styles;