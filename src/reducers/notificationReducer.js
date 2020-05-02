const notificationReducer = (state = "No notifications yet", action) => {
    switch (action.type) {
        case "NOTIFY":
            return action.notification
        default:
            return state
    }
}
export const notify = (notification) => {
    return {
        type: "NOTIFY",
        notification: notification
    }
}

export default notificationReducer
