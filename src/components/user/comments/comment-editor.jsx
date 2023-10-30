const CommentEditor = () => {

    const clickHandler = () => {
        console.log("log");
    }

    return (
        <div className="comment-editor" style={{ width: '90%', display: 'flex', alignItems: 'center', justifyContent: 'space-around', margin: '10px 0'}}>
            <textarea
                className="comment-input"
                placeholder="Chia sẻ ý kiến của bạn"
                style={{
                    position: 'relative',
                    height: '50px',
                    border: '1px solid #333',
                    width: '80%',
                    borderRadius: '10px',
                    padding: '5px 10px',
                    resize: 'none',
                }}
            />
            <button 
                className="add-btn" 
                onClick={clickHandler}
                style={{height: '50px', padding: '10px', border: 'none', backgroundColor: '#5457b6', color:' white', borderRadius: '10px'}} 
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                </svg>
                <span style={{marginLeft: '5px'}}>Gửi</span>
            </button>
        </div>
    )
}

export default CommentEditor