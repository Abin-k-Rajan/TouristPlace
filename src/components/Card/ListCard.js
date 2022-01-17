import React, { useEffect, useRef, useState } from 'react'
import './Crads.css'
import CardItems from './CardItems'
import LoadingBar from 'react-top-loading-bar'

import { api_url } from '../../base'

let getPost = () => {
  return fetch(api_url + 'posts/')
}

function ListCard(props)
{
  const ref = useRef(null)
  const [places, setPlaces]= useState([])

  useEffect(() => {
    if (localStorage.getItem('posts'))
    {
      setPlaces(JSON.parse(localStorage.getItem('posts')))
      ref.current.complete()
    }
    else {
      ref.current.continuousStart()
      getPost().then(res => {
        if(res.ok)
          return res.json()
      }).then(res => {
        localStorage.setItem('posts', JSON.stringify(res))
        setPlaces(res)
        ref.current.complete()
      })
    }
  }, [])
  
    return(
      <>
      <LoadingBar color='#fff' ref={ref} />
        <div className='cards'>

      <h1>SOME OF THE MORE BEAUTIFUL LOCATIONS!</h1>
      <h3>Adventure, Sports, Luxury and many more!</h3>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
                {places.map((s, index) => (<CardItems
              src={s.image}
              text={s.Sight}
              label={s.Country}
              path={`${s._id}`}
            />))}
          </ul>
        </div>
      </div>
    </div>
    </>
    );
}

export default ListCard;