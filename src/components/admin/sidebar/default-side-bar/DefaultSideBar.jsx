import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import './DefaultSideBar.css'
import { Link, useNavigate } from "react-router-dom";

const DefaultSideBar = ({ menus, defaultUrl }) => {
    const [activeKey, setActiveKey] = useState(defaultUrl);
    const navigation = useNavigate();
    useEffect(() => {
        navigation(defaultUrl)
    }, [])
    return (
        <>

            <Nav className=" d-none d-md-block sidebar w-100"
                activeKey={activeKey}

            >
                <div className="sidebar-sticky"></div>
                {
                    menus.map((menuItem, i) => {
                        return (<Nav.Item
                            className="side-menu-item m-1"
                            key={i}
                            style={{
                                backgroundColor: `${activeKey === menuItem.url ? "#ffffff2b" : ""}`,
                                borderRadius: "10px", width: "100%"
                            }}
                            onClick={() => setActiveKey(menuItem.url)}
                        >
                            <Nav.Link as={Link} to={menuItem.url} style={{ color: "white" }}>{menuItem.name}</Nav.Link>
                        </Nav.Item>)
                    })
                }
            </Nav>

        </>
    );
};
export default DefaultSideBar