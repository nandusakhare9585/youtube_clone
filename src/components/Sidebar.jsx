import React from 'react'
import { IoHome } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { useSelector } from 'react-redux';



const sidebarItem = [
  {
    icons: <IoHome size={'20px'} />,
    title: "Home"
  },
  {
    icons: <SiYoutubeshorts size={'20px'} />,
    title: "Shorts"
  },
  {
    icons: <MdOutlineSubscriptions size={'20px'} />,
    title: "Subscription"
  },
  {
    icons: <IoHome size={'20px'} />,
    title: "Home"
  },
  {
    icons: <SiYoutubeshorts size={'20px'} />,
    title: "Shorts"
  },
  {
    icons: <MdOutlineSubscriptions size={'20px'} />,
    title: "Subscription"
  },
  {
    icons: <IoHome size={'20px'} />,
    title: "Home"
  },
  {
    icons: <SiYoutubeshorts size={'20px'} />,
    title: "Shorts"
  },
  {
    icons: <MdOutlineSubscriptions size={'20px'} />,
    title: "Subscription"
  },
  {
    icons: <IoHome size={'20px'} />,
    title: "Home"
  },
  {
    icons: <SiYoutubeshorts size={'20px'} />,
    title: "Shorts"
  },
  {
    icons: <MdOutlineSubscriptions size={'20px'} />,
    title: "Subscription"
  },
  {
    icons: <IoHome size={'20px'} />,
    title: "Home"
  },
  {
    icons: <SiYoutubeshorts size={'20px'} />,
    title: "Shorts"
  },
  {
    icons: <MdOutlineSubscriptions size={'20px'} />,
    title: "Subscription"
  },
  {
    icons: <IoHome size={'20px'} />,
    title: "Home"
  },
  {
    icons: <SiYoutubeshorts size={'20px'} />,
    title: "Shorts"
  },
  {
    icons: <MdOutlineSubscriptions size={'20px'} />,
    title: "Subscription"
  },
  {
    icons: <IoHome size={'20px'} />,
    title: "Home"
  },
  {
    icons: <SiYoutubeshorts size={'20px'} />,
    title: "Shorts"
  },
  {
    icons: <MdOutlineSubscriptions size={'20px'} />,
    title: "Subscription"
  },
  
  
]



const Sidebar = () => {
  const open = useSelector((store)=>store.app.open);

  return (
    <div className= {`relative left-0 ${open? "w-[15%]" : "w-[6%]"} p-5 h-[calc(100vh-4.625rem)] bg-white overflow-y-scroll overflow-x-hidden`}>
      {
        sidebarItem.map((item, index) => {
          return (
          <div key={index} className='flex my-3 ml-2'>
           {item.icons}
            <p className= {`ml-3 ${open ? "": 'hidden'}`}>{item.title}</p>
          </div>
          )
        })
      }


    </div>
  )
}

export default Sidebar
