import {Link} from 'react-router-dom'
import { getTopics } from '../api'
import { useEffect, useState } from 'react'

const Nav = ({setCurrentTopic}) => {
    const [topics, setTopics] = useState([])


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
                <Link to={`/`}>
                <button className="btns" key='all' >all</button>
                {topics.map(({slug}) => {
                    return (
                        <button className="btns" key={slug} >{slug}</button>
                    )
                })}
                </Link>
            </div>
        </aside>
    )
}

export default Nav