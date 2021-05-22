import React from 'react'
import '../Component/bluebar.css'
import discover from '../Asset/discover.webp'

const Bluebar = () => {
    return (
        <section className='discover-main-div'>
            <div className='banner-spacer1'>
                <div className='banner-content1'>
                    <h2 className='text-banner-content1'>
                        Earn up to $25 worth of crypto
                    </h2>
                    <p className='discover-banner-content1'>
                        Discover how specific cryptocurrencies work — and get a bit of each crypto to try out for yourself.
                    </p>
                    <a href className='button-start1'>
                        <button className='button-container-start1'>
                            <span className='text-button-start1'>Start earning

                            </span>

                        </button>

                    </a>
                </div>

            </div>
            <div className='banner-spacer2'>
                <div className='div-banner-spacer2'>
                    <picture className='discover-picture'>
                        <img src={discover} alt='Discover' />

                    </picture>

                </div>

            </div>

        </section>
    );
}

export default Bluebar