import React from 'react'
import './posibility.css'
import possibility from '../../assets/possibility.png'

const Possibility = () => {
    return (
        <div className="possibility__container section__padding" id="possibility">
            <div className="possibility__container-left">
                <img src={possibility} alt="possibility" />
            </div>
            <div className="possibility__container-right">
                <p>Request Early Access to Get Started</p>
                <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <p>Request Early Access to Get Started</p>
            </div>
        </div>
    )
}

export default Possibility
