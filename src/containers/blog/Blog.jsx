import React from 'react'
import './blog.css'
import{blog01, blog02, blog03, blog04,blog05} from './blog_imgs'

const Blog = () => {
    return (
        <div className="blog__container section__padding" id="blog">
            <h1 className="gradient__text title ">A lot is happening,<br /> 
            We are blogging about it.</h1>
            <div className="blog__card-container">
                <div className="card">
                    <div className="card__img-container">
                        <img src={blog01} alt="blog01" />
                    </div>
                    <div className="card__content">
                        <p>Sep 26, 2021</p>
                        <h1>GPT-3 and Open  AI is the future. Let us exlore how it is?</h1>
                        <a href="#">
                            <p> Read Full Article</p>
                        </a>
                    </div>
                </div>
                <div className="card">
                    <div className="card__img-container">
                        <img src={blog02} alt="blog02" />
                    </div>
                    <div className="card__content">
                        <p>Sep 26, 2021</p>
                        <h1>GPT-3 and Open  AI is the future. Let us exlore how it is?</h1>
                        <a href="#">
                            <p> Read Full Article</p>
                        </a>
                    </div>
                </div>
                <div className="card">
                    <div className="card__img-container">
                        <img src={blog03} alt="blog03" />
                    </div>
                    <div className="card__content">
                        <p>Sep 26, 2021</p>
                        <h1>GPT-3 and Open  AI is the future. Let us exlore how it is?</h1>
                        <a href="#">
                            <p> Read Full Article</p>
                        </a>
                    </div>
                </div>
                <div className="card">
                    <div className="card__img-container">
                        <img src={blog04} alt="blog04" />
                    </div>
                    <div className="card__content">
                        <p>Sep 26, 2021</p>
                        <h1>GPT-3 and Open  AI is the future. Let us exlore how it is?</h1>
                        <a href="#">
                            <p> Read Full Article</p>
                        </a>
                    </div>
                </div>
                <div className="card">
                    <div className="card__img-container">
                        <img src={blog05} alt="blog05" />
                    </div>
                    <div className="card__content">
                        <p>Sep 26, 2021</p>
                        <h1>GPT-3 and Open  AI is the future. Let us exlore how it is?</h1>
                        <a href="#">
                            <p> Read Full Article</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog;



