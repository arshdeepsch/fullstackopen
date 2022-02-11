import react from "react"

const Notification = ({ message, styleObj }) => {
    if (message == null) {
        return null
    }

    return (
        <div style={styleObj}>
            {message}
        </div>
    )
}

export default Notification;