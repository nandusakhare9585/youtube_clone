import React, { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoNotificationsCircle } from "react-icons/io5";
import { MdOutlineVideoSettings } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import Avatar from "react-avatar";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setSearchSuggesion, toggleSidebar } from "../utils/appSlice"
import { useState } from "react";
import axios from "axios";
import { SEARCH_SUGGESIONS_API } from "../constant/youtube";




/* h ello */


const Navbar = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const { searchSuggesion } = useSelector((store) => store.app);
    const searchVideo = () => {
        dispatch(setCategory(input))
        setInput("");


    }
    const toggleHandler = () => {
        dispatch(toggleSidebar());

    }

    const showSuggesion = async () => {
        try {
            const res = await axios.get(SEARCH_SUGGESIONS_API + input);
            dispatch(setSearchSuggesion(res?.data[1]))

        } catch (error) {

        }
    }

    useEffect(() => {
        showSuggesion();
    }, [input])



    return (
        <div className="flex fixed top-0 justify-center item-center w-[100%] z-10 bg-white" >
            <div className="flex w-[96%] py-3 justify-between item-center" > 

                <div className="flex item-center">
                    <GiHamburgerMenu onClick={toggleHandler} size="24px" className="cursor-pointer" />
                    <img className={"px-4"} width={"115px"} src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500" alt="" />
                </div>
                <div className="flex w-[40%] item-center ">
                    <div className="w-[100%] py-2 px-4 border border-gray-400 rounded-l-full">
                        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Search" className=" w-full outline-none " />
                    </div>
                    <button onClick={searchVideo} className="py-1 border border-gray-400 rounded-r-full px-4"><FaSearch size={"24px"} /></button>
                </div>




                <div className="flex w-[10%] justify-between item-center">
                    <MdOutlineVideoSettings size={"40px"} className="cursor-pointer" />
                    <IoNotificationsCircle size={"40px"} className="cursor-pointer" />

                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE9W9pasSw4uml89eiLUuiFYdCqLajxCvPEJ67hTTQog&s" size={40} round={true} className="cursor-pointer" />
                </div>
            </div>

        </div>
    )
}

export default Navbar;  
