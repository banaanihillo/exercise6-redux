let identifierOfTimeout

const notificationReducer = (state = null, action) => {
    switch (action.type) {
        case "NOTIFY":
            return action.notification
        default:
            return state
    }
}
export const displayNotification = (notification, timeout) => {
    return async dispatch => {
        if (identifierOfTimeout !== null) {
            clearTimeout(identifierOfTimeout)
        }
        dispatch({
            type: "NOTIFY",
            notification: notification
        })
        identifierOfTimeout = setTimeout(() => {
            dispatch({
                type: "NOTIFY",
                notification: null
            })
        }, (timeout * 1000))
    }
}

export default notificationReducer
