import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { withRouter } from "react-router";
import './DefaultSideBar.css'
import { Link } from "react-router-dom";

const DefaultSideBar = ({ menus, defaultUrl }) => {
    const [activeKey, setActiveKey] = useState(defaultUrl);
    return (
        <>

            <Nav className=" d-none d-md-block sidebar w-100"
                activeKey={activeKey}
                onSelect={selectedKey => {
                    console.log(selectedKey);
                    setActiveKey(selectedKey)
                }}
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
                        >
                            <Nav.Link as={Link} to={menuItem.url}>{menuItem.name}</Nav.Link>
                        </Nav.Item>)
                    })
                }
            </Nav>

        </>
    );
};
export default DefaultSideBar