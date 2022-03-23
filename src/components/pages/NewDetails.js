import { Component } from "react";
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { api_url } from '../../base'
import './CSS/Details.css'

class NewDetails extends Component {
    getPost = function(id) {
        return fetch(api_url+ 'posts/'+id)
    }




    render() {
        
        return (
            <>
            <div className="row">
                <div className="column">
                    <Map 
                        google = {this.props.google}
                        style={{width: "50%", position: "absolute", right: "0"}}
                        zoom = {15}
                        center = {
                            {
                                lat: parseFloat(this.props.lat),
                                lng: parseFloat(this.props.lng)
                            }
                        }
                    />
                </div>
                <div className="column">
                    <div className="container-detail">
                    <h2>{this.props.sight}, Country : {this.props.country}</h2>
                    <p> {this.props.description}</p>
                    <br></br>
                    <p>Address: {this.props.address}</p>
                    <p>latitude: {this.props.lat}</p>
                    <p>longitude: {this.props.lng}</p>
                    <br></br>
                    <img className="image" alt={this.props.sight} src={this.props.image === '' ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfVjYexct1kNpizqh6yoZk8Z5caio6z0MoJw&usqp=CAU' : this.props.image} />
                    </div>
                </div>
                </div>
            </>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyCDyLsULZAjU-ZEYYYV0js1V2pGT40yNVE"
})(NewDetails)