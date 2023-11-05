import {
    Button,
    Col,
    ListGroup,
    Row,
} from "react-bootstrap";
import { useState } from "react";
import Reply from "./reply";

const Comment = ({ comment }) => {
    const [isReplying, setIsReplying] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isLike, setIsLike] = useState(false);
    const [replies, setReplies] = useState(comment.replies)

    const onReply = () => {
        setReplies([...replies, { isReplying: true }])
    }

    const toogleLike = () => {
        setIsLike(!isLike)
    }

    const closeReply = () => {

    }

    return (
        <div className="comment-container" style={{ backgroundColor: 'white', padding: '5px', border: '1px solid #ccc', borderRadius: '5px', margin: '5px' }}>
            <div className="comment-header" style={{ display: 'flex', alignItems: 'center' }}>
                <div className='user-info'>
                    <img
                        src="https://chungcupicityhighpark.com/wp-content/uploads/2022/10/anh-gai-dep-toc-ngan-che-mat-1.jpg"
                        style={{ width: '36px', height: '36px', borderRadius: '50%' }}
                        alt=""
                    />

                </div>
                <div className="username" style={{ marginLeft: '10px' }}>{comment.username}</div>
            </div>
            <div className="comment-body" style={{ marginTop: '5px' }}>
                <div className="comment-content" style={{ marginLeft: '10px' }}>
                    {comment.content}
                </div>
                <div style={{ marginLeft: '20px', display: 'flex' }}>
                    <div className='text-muted' style={{ marginLeft: '20px', display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={(_) => toogleLike()}>
                        {isLike ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                            </svg>
                        }
                        <span style={{ marginLeft: '5px' }}>Yêu thích</span>
                    </div>
                    <div className='text-muted' style={{ marginLeft: '20px', display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={(_) => onReply()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-reply" viewBox="0 0 16 16">
                            <path d="M6.598 5.013a.144.144 0 0 1 .202.134V6.3a.5.5 0 0 0 .5.5c.667 0 2.013.005 3.3.822.984.624 1.99 1.76 2.595 3.876-1.02-.983-2.185-1.516-3.205-1.799a8.74 8.74 0 0 0-1.921-.306 7.404 7.404 0 0 0-.798.008h-.013l-.005.001h-.001L7.3 9.9l-.05-.498a.5.5 0 0 0-.45.498v1.153c0 .108-.11.176-.202.134L2.614 8.254a.503.503 0 0 0-.042-.028.147.147 0 0 1 0-.252.499.499 0 0 0 .042-.028l3.984-2.933zM7.8 10.386c.068 0 .143.003.223.006.434.02 1.034.086 1.7.271 1.326.368 2.896 1.202 3.94 3.08a.5.5 0 0 0 .933-.305c-.464-3.71-1.886-5.662-3.46-6.66-1.245-.79-2.527-.942-3.336-.971v-.66a1.144 1.144 0 0 0-1.767-.96l-3.994 2.94a1.147 1.147 0 0 0 0 1.946l3.994 2.94a1.144 1.144 0 0 0 1.767-.96v-.667z" />
                        </svg>
                        <span style={{ marginLeft: '5px' }}>Trả lời</span>
                    </div>
                    <div className='text-muted' style={{ marginLeft: '20px', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-flag" viewBox="0 0 16 16">
                            <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21.294 21.294 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21.317 21.317 0 0 0 14 7.655V1.222z" />
                        </svg>
                        <span style={{ marginLeft: '5px' }}>Báo cáo</span>
                    </div>
                </div>
            </div>
            <div className="comment-footer" >
                {replies.map((reply) => {
                    if (reply.length === 0) return null
                    return (<Reply key={reply.id} reply={reply} isReplying={isReplying} closeReply={() => closeReply()} />)
                })}
            </div>
        </div>
    );
};
export default Comment;
