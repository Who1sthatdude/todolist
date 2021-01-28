import React, {Ref, useEffect, useState} from "react";
import {CSSProperties} from "react";
import {
    Box,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    Switch,
    withStyles
} from "@material-ui/core";
import styles from "./styles";
import Card from "../../Interfaces/Card";
import AddIcon from '@material-ui/icons/Add';
import CardComponent from "../CardComponent";
import DialogAddCard from "../DialogAddCard";

interface ContainerProps<T = any> {
    style?: CSSProperties;
    className?: string;
    classes?: T;
}

const Container = React.forwardRef((props: ContainerProps, ref: Ref<any>) => {
    const {
        style,
        className,
        classes,
    } = props;

    const [darkTheme, setDarkTheme] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const [cards, setCards] = useState<Card[]>([
        {
            name: "Test",
            text: "smth to be here",
            cards: [
                {
                    name: "another card",
                },
                {
                    name: "and another one",
                }
            ]
        }
    ]);

    const createCard = (name: string, text?: string) => {
        setCards((prev) => ([...prev, {name: name, text: text}]));
    }

    return (
        <Box className={classes.container}>
            <Box className={classes.leftSideBar}>
                <List>
                    <ListItem button onClick={() => setOpen(true)}>
                        <ListItemText primary="Add card"/>
                        <AddIcon/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Light/dark mode"/>
                        <ListItemSecondaryAction>
                            <Switch
                                checked={darkTheme}
                                onChange={() => {
                                    setDarkTheme(!darkTheme)
                                }}
                            />
                        </ListItemSecondaryAction>
                    </ListItem>
                </List>
            </Box>
            <Box className={classes.cards}>
                {
                    cards?.map((item) => {
                        return (
                            <CardComponent card={item}/>
                        );
                    })
                }
            </Box>
            <DialogAddCard
                open={open}
                onClose={() => {
                    setOpen(false)
                }}
                createCard={createCard}
            />
        </Box>

    );
});

export default withStyles(styles)(Container);