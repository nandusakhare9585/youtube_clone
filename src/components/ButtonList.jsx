import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCategory } from '../utils/appSlice';

const buttonList = ["All", "HTML5", "Java", "Music", "Algorithms", "C++", "Comedy clubs", "Gaming", "India national cricket team", "AI", "Live" , "News" ,"Cricket" ,"Drama" , "Fuuny" , 'React-JS' ,"Node-JS"]

const ButtonList = () => {
    const[active,setActive] = useState("All");
    const dispatch = useDispatch();

    const videoByTag = (tag) =>{
        if(active !== tag) {
            dispatch(setCategory(tag));
            setActive(tag);
        }

}

    return (
        <div className='flex w-full py-2 overflow-x-scroll no-scrollbar my-1'>
            {
                buttonList.map((buttonName, index) => {
                    return(
                        <div key={index}> 
                            <button onClick={()=>{videoByTag(buttonName)}} className={`${active === buttonName ? "bg-slate-900 text-white" : "bg-gray-200"} mx-2 px-4 py-1 font-medium rounded-lg`}><span className='whitespace-nowrap'>{buttonName}</span></button>
                             </div>
                    ) 
                   
                })


            }

        </div>
    )
}

export default ButtonList
