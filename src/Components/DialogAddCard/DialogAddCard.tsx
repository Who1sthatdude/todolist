import React, {Ref, useEffect, useState} from "react";
import {CSSProperties} from "react";
import Card from "../../Interfaces/Card";
import {Box, Button, Dialog, DialogTitle, Grid, TextField, withStyles} from "@material-ui/core";
import styles from "./styles";

interface DialogAddCardProps<T = any> {
    style?: CSSProperties;
    className?: string;
    classes?: T;
    open: boolean;

    createCard(name: string, text?: string): void,

    onClose(): void;
}

const DialogAddCard = React.forwardRef((props: DialogAddCardProps, ref: Ref<any>) => {
    const {
        style,
        className,
        classes,
        open,
        onClose,
        createCard,
    } = props;

    const [name, setName] = useState<string>("");
    const [text, setText] = useState<string>();

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    }

    return (
        <Dialog
            open={open}
            onClose={onClose}
            onExited={() => {
                setName("");
                setText(undefined);
            }}
        >
            <DialogTitle className={classes.title}>
                Add new card
            </DialogTitle>
            <Box className={classes.dialogWidth}>
                <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth className={classes.text}
                    onChange={handleNameChange}
                />
                <TextField
                    label="Text"
                    multiline
                    variant="outlined"
                    fullWidth
                    className={classes.text}
                    onChange={handleTextChange}
                    rows={3}
                />
                <Grid container>
                    <Grid item xs={6}>
                        <Button fullWidth onClick={onClose}>
                            Decline
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            fullWidth
                            onClick={() => {
                                createCard(name, text);
                                onClose();
                            }}>
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Dialog>
    );
});

export default withStyles(styles)(DialogAddCard);