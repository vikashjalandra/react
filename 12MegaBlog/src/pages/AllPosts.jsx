import React,{useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import service from '../appwrite/config'

function AllPosts() {
    const [posts,setPosts] = useState([])
    useEffect(()=>{
        service.getPosts([])
        .then((posts)=>{
            if (posts) {
                setPosts(posts.documents)
            }
        })
    },[])


  return (
           <div className=" mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-1 md:gap-6 md:space-y-0 lg:grid-cols-4" >
            {posts.map((post)=>(
                <div key={post.$id} className="rounded-md border" >
                    <PostCard {...post}/>
                </div>
            ))}
        </div>
  
  )
}

export default AllPosts
