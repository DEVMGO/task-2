import React from 'react'
import style from './header.module.css'

const HeaderComPonent = () => {
  return (
    <div className={style.header}>
        <div className={style.header_titles}>
            <h3>GEOMAN.AI</h3>
            <h3>SOLUTIONS</h3>
            <h3>PROJECTS</h3>
        </div>
        <div className={style.header_text}>
            <div>
                <h2>REAL-TIME</h2>
                <h2>MANAGEMENT</h2>
                <h2>AND ANALYSIS</h2>
            </div>
            <div>
                <h4>HIGH</h4>
                <h4>QUALITY</h4>
            </div>
            <div>
                <button>Get stared</button>
            </div>
        </div>
    </div>
  )
}

export default HeaderComPonent