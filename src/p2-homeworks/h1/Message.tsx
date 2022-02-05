import React from 'react'
import classes from './Message.module.css';

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={classes.message}>
            <div className={classes.message__avatar}>
                <img src={props.avatar}/>
            </div>
            <div className={classes.message__item}>
                <div className={classes.message__content}>
                    <h3 className={classes.message__title}>{props.name}</h3>
                    <p className={classes.message__text}>{props.message}</p>
                    <span className={classes.message__time}>{props.time}</span>
                </div>
            </div>
        </div>
    )
}

export default Message
