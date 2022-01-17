import { Component } from "react";
import { Map, GoogleApiWrapper } from 'google-maps-react';
import dotenv from 'dotenv'

class Maps extends Component {
    constructor(props){
        super(props)
    }

    renderer() {
        return (
            <>
                <Map 
                    google = {this.props.google}
                    style={{width: "50%", position: "absolute", right: "0"}}
                    zoom = {10}
                    initialCenter = {
                        {
                            lat: this.props.lat,
                            lng: this.props.lng
                        }
                    }
                />
            </>
        );
    }
}


export default GoogleApiWrapper({
    apiKey: process.env.GOOGLE_API_KEY
})(Maps)