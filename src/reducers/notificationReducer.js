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
        dispatch({
            type: "NOTIFY",
            notification: notification
        })
        setTimeout(() => {
            dispatch({
                type: "NOTIFY",
                notification: null
            })
        }, (timeout * 1000))
    }
}

export default notificationReducer
