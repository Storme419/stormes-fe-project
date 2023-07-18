import {Link, useNavigate} from 'react-router-dom'
import { getTopics } from '../api'
import { useEffect, useState } from 'react'

const Nav = ({setCurrentTopic}) => {
    const [topics, setTopics] = useState([])
    const navigate = useNavigate()

    function redirect (btns){
        const topicName = btns.target.innerText
        setCurrentTopic(topicName)
        navigate('/')
    }

    useEffect(() => {
        getTopics()
        .then((res) => {
            setTopics(res)
        }).catch(console.log)
    }, [])

    return(
        <aside className='nav'>
            <h2>This is the nav</h2>
            <div className='nav-buttons'>
                <button className="btns" key='all' onClick={redirect}>all</button>

                {topics.map(({slug}) => {
                return (
                <button className="btns" key={slug} onClick={redirect}>{slug}</button>
                )
            })}
            </div>
            
        </aside>
    )

    return <aside className="nav">
        <h2>This is the nav</h2>
{/*          */}
    </aside>
}

export default Nav