import {useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const AllParks = () => {
    const [parks,setParks] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/parks')
            .then(res => {
                console.log(res.data.parks)    
                setParks(res.data.parks)
            })
            .catch(err => console.log('Error getting parks in React:', err))
    }, [])
    return (
        <div>
            {parks.map(element => {
                return (
                    <div key={element.id}>
                    <Link className='list'to={`/parks/${element.parkCode}`}>
                    <h3 className='list'>{element.fullName}</h3>
                    <img src={element.images[0].url} alt='park' height={100} /> 
                    </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default AllParks