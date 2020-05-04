import React from "react"
//import {useSelector} from "react-redux"
import {connect} from "react-redux"

const Notification = (props) => {
    const {notification} = props
    //const notification = useSelector(state => state.notification)
    const style = {
        border: "solid",
        padding: 10,
        borderWidth: 1
    }
    if (notification === null) {
        return null
    }
    return (
        <div style = {style}>
            {notification}
        </div>
    )
}

//export default Notification

const mapStateToProps = (state) => {
    return {
        notification: state.notification
    }
}
const ConnectedNotification = connect(mapStateToProps)(Notification)
export default ConnectedNotification
