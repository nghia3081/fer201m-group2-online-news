const CommentEditor = () => {

    const clickHandler = () => {
        console.log("log");
    }

    return (
        <>
            <textarea
                className="comment-input"
                placeholder="Chia sẻ ý kiến của bạn"
            />
            <button className="add-btn" onClick={clickHandler}>
                
            </button>
        </>
    )
}

export default CommentEditor