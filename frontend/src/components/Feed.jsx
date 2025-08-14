import React from 'react'
import Posts from './Posts'

const Feed = () => {
  return (
    <div className="flex-1 h-screen flex flex-col bg-white">
      <div className="flex-1 overflow-y-auto flex justify-center">
        <div className="w-full max-w-2xl flex flex-col justify-center min-h-full">
          <Posts />
        </div>
      </div>
    </div>
  )
}

export default Feed
