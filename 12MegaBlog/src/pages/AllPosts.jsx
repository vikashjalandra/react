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
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
            {posts.map((posts)=>(
                <div key={posts.$id} className='p-2 w-1/4'>
                    <PostCard post={post}/>
                </div>
            ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPosts
