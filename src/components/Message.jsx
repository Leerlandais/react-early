
function Message({message, fontSize}) {
    return (
        <>
        <h1>{message}</h1>
        <p style={{fontSize: fontSize}}>(You can change the content of the message in the Hello.jsx file)</p>
        </>
)
}


export default Message;