import React, {Ref, useEffect, useState} from "react";
import {CSSProperties} from "react";
import Card from "../../Interfaces/Card";
import {Box, List, ListItem, ListItemText, Typography, withStyles} from "@material-ui/core";
import styles from "./styles";
import clsx from "clsx";

interface CardComponentProps<T = any> {
    style?: CSSProperties;
    className?: string;
    classes?: T;
    card: Card;
}

const CardComponent = React.forwardRef((props: CardComponentProps, ref: Ref<any>) => {
    const {
        style,
        className,
        classes,
        card
    } = props;

    return (
        <React.Fragment>
            <Box className={classes.card}>
                <List className={classes.paddingNone}>
                    <ListItem className={classes.paddingNone}>
                        <ListItemText
                            primary={<Typography variant="h5" children={card.name}/>}
                            secondary={<Typography variant="body1" children={card.text}/>}
                        />
                    </ListItem>
                </List>
                {
                    card.cards && card.cards.map((item)=>{
                        return (
                            <Box className={clsx(classes.card, classes.innerCard)}>
                                <List className={classes.paddingNone}>
                                    <ListItem className={classes.paddingNone}>
                                        <ListItemText
                                            primary={<Typography variant="h5" children={item.name}/>}
                                            secondary={<Typography variant="body1" children={item.text}/>}
                                        />
                                    </ListItem>
                                </List>
                            </Box>
                        )
                    })
                }
            </Box>
        </React.Fragment>
    );
});

export default withStyles(styles)(CardComponent);