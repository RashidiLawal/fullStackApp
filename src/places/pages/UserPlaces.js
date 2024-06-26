import React from 'react'
import PlaceList from '../components/PlaceList'
import { useParams } from 'react-router-dom/cjs/react-router-dom'

const DUMMY_PLACES = [
    {
        id:'p1',
        title:'Empire state building',
        description:'One of the most common sky scrappers in the world.',
        imageUrl:"https://www.findingtheuniverse.com/wp-content/uploads/2020/07/Empire-State-Building-view-from-uptown_by_Laurence-Norah-2.jpg",
        address:"20 W 34th St., New York, NY 10001, United States",
        location:{
            lat:40.7484405,
            lng:-73.9856644
        },
        creator:"u1"
    },
    {
        id:'p2',
        title:'Burj Khalifa',
        description:'One of the most common sky scrappers in the world.',
        imageUrl:"https://media.istockphoto.com/id/916091586/photo/burj-khalifa-dubai.jpg?s=612x612&w=0&k=20&c=VOBvv191Fippjuesf8ucODgC7AJMOEsY4Kf2XQ45puI=",
        address:"1 Sheikh Mohammed bin Rashid Blvd - Downtown Dubai - Dubai - United Arab Emirates",
        location:{
            lat:25.197197,
            lng:55.2743764
        },
        creator:"u2"
    },
]

const UserPlaces = () => {
    const {userId} = useParams();
    // or const userId = useParams().userId
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
  return (
    <div>
         <PlaceList items={loadedPlaces}/>
    </div>
  )
}

export default UserPlaces