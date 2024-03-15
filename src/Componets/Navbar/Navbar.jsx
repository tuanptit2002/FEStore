import React, {useState} from "react";
import logo from '../Assests/logo.png'
import icon1 from '../Assests/icon1.svg'
import iconCart from'../Assests/cart.svg'
import './Navbar.css'
const Navbar = () =>{

    const [menu, setMenu] = useState("gioithieu")
    return(
        <div className={'navbar'}>
            <div className="border-nav">
            <div className="nav-logo">
                <img src={logo} alt=""/>
            </div>
            <div className="nav-search">
                   <input type="text" placeholder="Tìm kiếm..."/>
            </div>
                <div className="icon">
                <div className="icon1">
                    <img src={icon1} alt="" width={20}/>
                </div>
                <div className="iconCart">
                    <img src={iconCart} alt="" width={20}/>
                </div>
                    <div className="cart-count">0</div>
                </div>
            </div>
            <ul className="nav-menu">
                <li  onClick={() =>{setMenu("gioithieu")}}>Giới thiệu{menu === 'gioithieu'? <hr/>:<></>}</li>
                <li  onClick={() =>{setMenu("sanpham")}}>Sản phẩm {menu === 'sanpham'? <hr/>:<></>}</li>
                <li  onClick={() =>{setMenu("khuyenmai")}}>Khuyến mại {menu === 'khuyenmai'? <hr/>:<></>}</li>
                <li  onClick={() =>{setMenu("tintuc")}}>Tin tức {menu === 'tintuc'? <hr/>:<></>}</li>
                <li  onClick={() =>{setMenu("tuyendung")}}>Tuyển dụng {menu === 'tuyendung'? <hr/>:<></>}</li>
                <li  onClick={() =>{setMenu("hethong")}}>Hệ thống của hàng {menu === 'hethong'? <hr/>:<></>}</li>
            </ul>

        </div>
    )
}

export default Navbar
