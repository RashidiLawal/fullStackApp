import React from 'react'
import PlaceList from '../components/PlaceList'

const DUMMY_PLACES = [
    {
        id:'p1',
        title:'Empire state building',
        description:'One of the most common sky scrappers in the world.',
        imageUrl:"https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg",
        address:"20 W 34th St., New York, NY 10001, United States",
        location:{
            lat:"40.7484405",
            lng:"-73.9856644"
        },
        creator:"u1"
    },
    {
        id:'p2',
        title:'Burj Khalifa',
        description:'One of the most common sky scrappers in the world.',
        imageUrl:"https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Burj_Khalifa.jpg/1024px-Burj_Khalifa.jpg",
        address:"1 Sheikh Mohammed bin Rashid Blvd - Downtown Dubai - Dubai - United Arab Emirates",
        location:{
            lat:"25.197197",
            lng:"55.2743764"
        },
        creator:"u2"
    },
]

const UserPlaces = () => {
  return (
    <div>
        {
            DUMMY_PLACES.map(place => <PlaceList items={place}/>)
        }
    </div>
  )
}

export default UserPlaces