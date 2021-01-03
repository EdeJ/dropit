import React, { useEffect, useState } from 'react'
import MenuLinks from './MenuLinks'
import SideDrawer from './sideDrawer/SideDrawer'
import comments from '../assets/comments'

function SongOptions({ song }) {

    const [sideDrawerOpen, setSideDrawerOpen] = useState(true);

    useEffect(() => {
        console.log(song);
        const comment = comments.find(c => c.songId === song.id);
        console.log(comment);
        console.log(comment.message);
    }, [])

    return (
        <>
            <SideDrawer
                sideDrawerOpen={sideDrawerOpen}
                setSideDrawerOpen={setSideDrawerOpen}
            >
                <h2>{song.title}</h2>
                <MenuLinks
                    links={[
                        { path: `/view-comment/${song.id}`, label: 'View comment' },
                        { path: `/write-comment/${song.id}`, label: 'Write comment' },
                        { path: '/play-demo', label: 'Play demo' }]}
                    setSideDrawerOpen={setSideDrawerOpen}
                />
            </SideDrawer>
        </>
    )
}

export default SongOptions
