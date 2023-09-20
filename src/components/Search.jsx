import React from 'react'

const Search = () => {
  return (
    <div className='search'>

   <div className='searchForm'>
      <input type='text' placeholder='Find a user'/>
   </div>
      <div className='userChat'>
        <img src="https://images.pexels.com/photos/18185493/pexels-photo-18185493/free-photo-of-fashion-man-people-relaxation.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
        <div className='userChatInfo'>
          <span>jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search