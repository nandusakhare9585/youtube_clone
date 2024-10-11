import React from 'react';
import Avatar from 'react-avatar';

const ChatMessage = ({item}) => {
  return (
    <div className='flex items-center'>
  <div>
  <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE9W9pasSw4uml89eiLUuiFYdCqLajxCvPEJ67hTTQog&s" size={25} round={true} className="cursor-pointer" />
  </div>
  <div className='flex items-center'>
    <h1 className='ml-2 font-bold text-sm'>{item.name} </h1>
    <p className='ml-2 py-2 text-sm'>{item.message}</p>
  </div>
    </div>
  )
}

export default ChatMessage
