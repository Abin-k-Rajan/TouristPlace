import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import NewDetails from "../components/pages/NewDetails";
import { api_url } from '../base'


function DetailsFunction()
{
    const [country, setCountry] = useState('')
    const [sight, setSight] = useState('')
    const [avgstars, setAvgStars] = useState(0)
    const [address, setAddress] = useState('')
    const [desc, setDesc] = useState('')
    const [lat, setLat] = useState(0)
    const [lng, setLng] = useState(0)
    const [image, setImg] = useState('')


    const { id } = useParams()

    useEffect(() => {
        window.scrollTo(0, 0);
        fetch(api_url + 'posts/' + id).then(res => {
            if (res.ok)
                return res.json()
        }).then(res => {
            setCountry(res.Country)
            setSight(res.Sight)
            setAvgStars(res.AvgStars)
            setAddress(res.address)
            setLat(res.latitude)
            setLng(res.longitude)
            setDesc(res.Description)
            setImg(res.image)
        })
    }, [])

    return (
        <>
            <NewDetails country={country} sight={sight} address={address} description={desc} lat={lat} lng={lng} image={image}/>
        </>
    )
}

export default DetailsFunction;