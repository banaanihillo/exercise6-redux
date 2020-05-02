const notificationReducer = (state = null, action) => {
    switch (action.type) {
        case "NOTIFY":
            return action.notification
        default:
            return state
    }
}
export const displayNotification = (notification) => {
    return {
        type: "NOTIFY",
        notification: notification
    }
}
export const hideNotification = () => {
    return {
        type: "NOTIFY",
        notification: null
    }
}

export default notificationReducer
