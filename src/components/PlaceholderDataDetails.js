import React from 'react'
import { useParams } from 'react-router'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPost } from '../redux/actions'
import { postSelector } from '../redux/selectors'

function PlaceholderDataDetails() {
   const params = useParams()
   const dispatch = useDispatch()
   const post = useSelector(postSelector)
  
   useEffect(() => {
    dispatch(fetchPost(params.postId))
   }, [])
 
    return (
        <div>
          Here are the details:
                  <p>
                    <span> {post.id} </span>
                    <p> {post.title} </p>
                    <p> {post.body} </p>
                  </p>   
        </div>
      )
}
export default PlaceholderDataDetails;