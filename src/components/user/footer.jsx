import { Col, Row } from "react-bootstrap"
import Navbar from 'react-bootstrap/Navbar';


const Footer = () => {
    return (
        <div className="bg-body-tertiary p-4" style={{maxWidth: '1080px', margin: 'auto', marginTop: '20px'}}>
            <Row>
                <Col md={4} className="d-flex justify-content-center">
                    Báo tiếng Việt nhiều người xem nhất. <br />
                    Thuộc Bộ Khoa học và Công nghệ <br />
                    Số giấy phép: 548/GP-BTTTT ngày 24/08/2021 <br />
                </Col>

                <Col md={4} className="d-flex justify-content-center">
                    Tổng biên tập: Phạm Hiếu <br />
                    Địa chỉ: Tầng 10, Tòa A FPT Tower, số 10 Phạm Văn Bạch, Dịch Vọng, Cầu Giấy, Hà Nội <br />
                    Điện thoại: 024 7300 8899 - máy lẻ 4500F <br />
                </Col>

                <Col md={4} className="d-flex justify-content-center">
                    © 1997-2023. Toàn bộ bản quyền thuộc VnExpress
                </Col>
            </Row>
        </div>

    )
}
export default Footer