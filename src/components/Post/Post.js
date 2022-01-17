import React, { Component } from 'react'
import axios from 'axios'
import '../Login/Signup.css'
import './Post.css'
import {app} from '../../base'
import { api_url } from '../../base'


class PostForm extends Component{
    static images = '';
    static uploading = false;
    static file = 'ha';

    constructor(props){
        super(props)

        this.state = {
            Country: '',
            Sight: '',
            description: '',
            AvgStars: 5,
            address:'',
            latitude: 0,
            longitude: 0,
            image: ''
        }
    }

    enterDetails = function()
    {
        this.details.map(s => console.log(s))
    }


    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    changeDetailsHandler = (e) => {
        this.setState({[this.detail]: e.target.value})
    }

    submitHandler = e =>{
        e.preventDefault()
        if(localStorage.getItem('loggedin') === 'true')
        {
            if(this.file === 'ha')
            {
                alert("Atleast one photo for cover is required!")
                return;
            }
            alert('Please Wait while we Upload!')
            axios.post(api_url+'posts', this.state).then(
                res => {
                    alert('post updated')
                }
            ).catch(err => {
                alert("Server is under maintainance.")
            })
        }
        else
        {
            alert("Please login first to get write access.")
        }
        
    }

    changeImageHandler = (e) => {
        e.preventDefault()
        this.file = e.target.files[0]
    }

    uploadImage = async (e) => {
        e.preventDefault()
        if(localStorage.getItem('loggedin') === 'true')
        {
            alert("please wait while we upload!")
            this.uploading = true;
            const file = this.file;
            const storageRef = app.storage().ref()
            const fileref = storageRef.child(file.name)
            await fileref.put(file).then(() =>{
                alert("Uploaded, please wait for confirmation")
            }).catch(err => {
                alert("Upload failed!")
            });
            await fileref.getDownloadURL().then(res => {
                // if(this.images)
                //     this.images = this.images + "././././" + res;
                // else{    
                //     this.images = res;
                // }
                // this.setState({["images"]: this.images})
                this.setState({[e.target.name]: res})
                alert(res)
            })
        }
        else
        {
            alert("Please login first to get write access.")
        }
        
    }



    render(){
        return(
            <>
                <div className="post-container">
                    <form onSubmit={this.submitHandler}>
                        <label>Sight</label>
                        <input type='text' id='Sight' name='Sight'  onChange={this.changeHandler}/>
                        <label>Country</label>
                        <input type='text' id='Country' name='Country'  onChange={this.changeHandler}/>

                        <label>Description</label>
                        <textarea type='text' id='description' name='description' onChange={this.changeHandler}/>
                        <label>Image Link / Upload</label>
                        <input type="file" id="myfile" name="image" onChange={this.changeImageHandler}/>
                        <button onClick={this.uploadImage} className="upload-button">Upload Image</button>
                        <input type='text' id='image' name='image'  onChange={this.changeHandler}/>


                        <label>Address</label>
                        <input type='text' id='address' name='address'  onChange={this.changeHandler}/>
                        <label>Latitude</label>
                        <input type='text' id='latitude' name='latitude'  onChange={this.changeHandler}/>
                        <label>Longitude</label>
                        <input type='text' id='longitude' name='longitude'  onChange={this.changeHandler}/>
                        
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </>
        );
    }
}

export default PostForm;