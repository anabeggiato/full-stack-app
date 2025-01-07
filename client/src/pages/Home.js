import '../App.css';
import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

function Home() {

    const [listOfPosts, setListOfPosts] = useState([]); //defining a variable which will receive the list of posts when it comes from the db

    useEffect(() => { //function to run immediately when the page renders
        axios.get('http://localhost:3001/posts').then((response) => {
            setListOfPosts(response.data) //storing the response data (the list os posts) in the variable previously created
        })
    }, [])

    return (
        <div>
            {listOfPosts.map((value, key) => { //mapping all the db posts
                return <div className='post'> {/*creating a div for each db post */}
                    <div className='title'> {value.title} </div> {/*a specific div for each post title*/}
                    <div className='body'> {value.postText} </div> {/*a specific div for each post content*/}
                    <div className='footer'> {value.username} </div> {/*a specific div for each post username*/}
                </div>;
            })}
        </div>
    )
}

export default Home
