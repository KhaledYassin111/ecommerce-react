import { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa6";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-hot-toast";


const NavLinks =[
    {title:"Home" , link:"/"},
    {title:"About" , link:"/about"},
    {title:"Accessories" , link:"/accessories"},
    {title:"Blog" , link:"/blog"},
    {title:"Contact" , link:"/contact"}
]

function BtmHeader() {

    const location = useLocation()
    const { user, logout } = useAuth()
    const[categories,setCategories]= useState([])
    const[isCOPn,setIsCOPn]=useState(false)

useEffect(()=>{
    setIsCOPn(false)
},[location])

    useEffect(()=>{
        fetch('https://dummyjson.com/products/categories')
        .then(res => res.json())
        .then((data)=>setCategories(data));
    },[])



    return (
        <div className="btm_header">
            <div className="container">
                <nav className="nav">



                <div className="category_nav">
                    <div className="category_btn" onClick={()=>setIsCOPn(!isCOPn)}>
                        <IoMdMenu />
                        <p>Browse Category</p>
                        <IoMdArrowDropdown />


                    </div>
                    <div className={`category_nav_list ${isCOPn ? "active": ""}`}>
                        {categories.map((category) =>(
                            <Link to={`category/${category.slug}`} key={category.slug}>{category.name}</Link>
                        ))}
                    </div>
                </div>

                <div className="nav_links">
                    {NavLinks.map((item) => (
                        <li key={item.link} className={location.pathname === item.link ? "active" : ""} ><Link to={item.link}>{item.title}</Link></li>
                    ))}
                </div>


</nav>
                <div className="sign_regs_icon">
                    {user ? (
                        <>
                            <span className="nav_user_name">Hi, {user.name}</span>
                            <button className="nav_auth_button" onClick={() => { logout(); toast.success("You have logged out"); }}>Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" aria-label="Login" title="Login"><PiSignInBold /></Link>
                            <Link to="/login" aria-label="Create account" title="Login"><FaUserPlus /></Link>
                        </>
                    )}
                </div>


                
            </div>
        </div>
    )
}

export default BtmHeader
