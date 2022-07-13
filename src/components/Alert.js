import React from 'react'

const Alert = (props) => {
    const capatalize = (word) => {
        const lower = word.toLowerCase();
        return lower.chatAt(0).toUpperCase() + lower.slice(1);
    }
    return (
            props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{props.alert.type}</strong> : {props.alert.msg}
            </div>
    )
}

export default Alert