import {Link} from 'react-router-dom'
import { getTopics } from '../api'
import { useEffect, useState } from 'react'

const Nav = ({}) => {
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
                <Link to={`/home`}>
                    <button className='btns' key='home'>home</button>
                </Link>
                {topics.map(({slug}) => {
                    return (
                        <Link to={`/${slug}`} key={slug}>
                            <button className="btns" key={slug} >{slug}</button>
                        </Link>
                    )
                })} 
            </div>
        </aside>
    )
}

export default Nav