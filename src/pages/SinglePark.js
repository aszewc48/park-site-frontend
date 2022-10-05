import {useState,useEffect} from 'react'
import { useParams,Link } from 'react-router-dom'
import axios from 'axios'

const SinglePark = () => {
    const [park,setPark] = useState([])
    const {parkCode} = useParams()
    useEffect(() => {
        axios.get(`http://localhost:3001/parks/${parkCode}`)
            .then(res => {
                console.log(res.data.park)    
                setPark(res.data.park)
            })
            .catch(err => console.log('Error getting parks in React:', err))
    }, [parkCode])
    return (
        <div>
            {park.map(element => {
                return (
                    <div className='list' key={element.id}>
                    <h1>{element.fullName}</h1>
                    <h4>{element.addresses[0].line1}</h4>
                    <h4>{element.addresses[0].line2}</h4>
                    <h4>{element.addresses[0].line3}</h4>
                    <h4>{element.addresses[0].city},{' ' + element.addresses[0].stateCode},{' ' + element.addresses[0].postalCode}</h4>
                    <a href={element.url}>{element.url}</a>
                    <div style={{marginBottom: '5%'}}></div>
                    {element.images.map(element => {
                        return <a href={element.url}><img src={element.url} alt='park' height={100} /> </a>
                    })}
                    <p>{element.description}</p>
                    <h3>Operating Hours</h3>
                    <ul className='bullet-list'>
                        <li>Sunday:{' ' + element.operatingHours[0].standardHours.sunday}</li>
                        <li>Monday:{' ' + element.operatingHours[0].standardHours.monday}</li>
                        <li>Tuesday:{' ' + element.operatingHours[0].standardHours.tuesday}</li>
                        <li>Wednesday:{' ' + element.operatingHours[0].standardHours.wednesday}</li>
                        <li>Thursday:{' ' + element.operatingHours[0].standardHours.thursday}</li>
                        <li>Friday:{' ' + element.operatingHours[0].standardHours.friday}</li>
                        <li>Saturday:{' ' + element.operatingHours[0].standardHours.saturday}</li>
                    </ul>
                    {element.activities[0] && (
                        <div>
                            <h3>Activities</h3>
                            <ul className='bullet-list'>                
                            {element.activities.map(element => {
                                return <li>{element.name}</li>
                            })}
                            </ul>
                        </div>
                    )}
                    </div>
                )
            })}
        </div>
    )
}

export default SinglePark