import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'; //importing a library to simplificate form validations
import axios from 'axios'; //library to create an require into our api

function CreatePost() {

    const initialValues = { //creating an empty objetc with the initial values, to send it into the formik parameter
        title: '',
        postText: '',
        username: ''
    };

    const validationSchema = Yup.object().shape({ //creating a validation schema, which will be used as a parameter to formik
        title: Yup.string().required("You must define a title to your post!"), // define that the title must be a string and must not be null.
        postText: Yup.string().required("You must write a content to your post!"), // define that the postText must be a string and must not be null.
        username: Yup.string().min(3).max(15).required("Your post must contain your username!"), // define that the username must be string, be between 3 and 15 characters long and must not be null.
    });

    const onSubmit = (data) => { // define a function to run when the submit button is clicked
        axios.post('http://localhost:3001/posts', data).then((response) => { //go to the post route and post the data in the db
            console.log("IT WORKED"); //log that the post is okay
        })
    }

    return (
        <div className='createPostPage'>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}> {/* intantiating Formik with the objects which were previously created*/}
                <Form className='formContainer'> {/*instantiating a form*/}
                    
                    <label>Title:</label>
                    <ErrorMessage name='title' component='span' /> {/* define where the error message must appear, and which type it must assume (here, it's defined as a span) */}
                    <Field //define a field where the user will fill with the post title
                        autocomplete='off'
                        id='inputCreatePost'
                        name='title'
                        placeholder='write your post´s title here'
                    />

                    <label>Post:</label>
                    <ErrorMessage name='postText' component='span' />
                    <Field //define a field where the user will fill with the post content
                        autocomplete='off'
                        id='inputCreatePost'
                        name='postText'
                        placeholder='write your post here'
                    />

                    <label>Username:</label>
                    <ErrorMessage name='username' component='span' />
                    <Field //define a field where the user will fill with his username
                        autocomplete='off'
                        id='inputCreatePost'
                        name='username'
                        placeholder='write your username here'
                    />

                    <button type='submit' >  Create Post </button> {/*button to be clicked when the post is complete, to send it to the db and to the homepage */}
                </Form>
            </Formik>
        </div>
    )
}

export default CreatePost
