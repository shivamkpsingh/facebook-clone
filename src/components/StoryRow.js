import { Avatar } from '@material-ui/core'
import React from 'react'
import './StoryRow.css'

const StoryRow = ({url,avatar,name}) => {
    return (
        <div className="storyRow">
            <img className="storyRow__backgroundImg" src={url} alt="" />
            <div className="storyRow__profile">
                <Avatar className="storyRow__profileAvatar" src={avatar}/>
                <p>{name}</p>
            </div>
        </div>
    )
}

export default StoryRow
