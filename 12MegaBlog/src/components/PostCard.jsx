import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import service from '../appwrite/config'

function PostCard({ $id, title, featuredImage }) {
  return (
    <div className="rounded-md border w-full">
      <img
        src={service.getFilePreview(featuredImage)}
        alt={title}
        className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
      />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
          {title} &nbsp; <ArrowUpRight className="h-4 w-4" />
        </h1>
        <Link to={`/post/${$id}`}>
          <button
            type="button"
            className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Read
          </button>
        </Link>
      </div>
    </div>
  )
}

export default PostCard


