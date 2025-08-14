import React from 'react'
import Posts from './Posts'

const Feed = () => {
  return (
    <div className="flex-1 my-8 flex flex-col items-center bg-white py-4">
      <div className="w-full max-w-2xl">
        <Posts />
      </div>
    </div>
  )
}

export default Feed
