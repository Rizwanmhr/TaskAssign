import React,{useEffect,useState} from 'react'
import { Typography } from '@material-ui/core';
interface commentSection{
    comment:string,
    userId:number
}
const Comment = () => {
    const [allcomments,setAllComments] = useState<commentSection[]>()
    const commentsTask = async () => {
    try {
       const res = await fetch('/task')
       const cardData = await res.json();
       console.log(cardData)
    setAllComments(cardData)
    } catch (error) {
       console.log(error) 
    }
    }
    useEffect(() => {
    commentsTask()
    },[])
    return (
    <div>
            {
        
            }
    </div>
    )
}

export default Comment
