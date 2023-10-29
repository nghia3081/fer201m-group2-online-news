import {
    Button,
    Col,
    ListGroup,
    Row,
} from "react-bootstrap";
import { useState } from "react";
import { Textarea } from "react-bootstrap-icons";

const Reply = ({ reply }) => {
    const [replying, setReplying] = useState(false);
    const [time, setTime] = useState("");
    const [vote, setVoted] = useState(false);
    // const [isEditing, setEditing] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [content, setContent] = useState('')

    return (
        <div className="reply-container" style={{ backgroundColor: 'white', padding: '5px', border: '1px solid #ccc', borderRadius: '5px', margin: ' 5px 5px 5px 25px' }}>
            <div className="reply-header" style={{ display: 'flex', alignItems: 'center' }}>
                <div className='avatar'>
                    <img
                        src="https://chungcupicityhighpark.com/wp-content/uploads/2022/10/anh-gai-dep-toc-ngan-che-mat-1.jpg"
                        style={{ width: '36px', height: '36px', borderRadius: '50%' }}
                        alt=""
                    />
                </div>
                <div className="username" style={{ marginLeft: '10px' }}>{reply.username}</div>
            </div>
            <div className="reply-body">
                <div className="reply-content" style={{marginLeft: '10px'}}>
                    {reply.content}
                </div>
            </div>
        </div>
    );
};
export default Reply;