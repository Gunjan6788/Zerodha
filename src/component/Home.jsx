import React from 'react';
import Style from './Home.module.css'
const Home = () => {
    return (
        <>
            <div>
                <div className='d-flex justify-content-center mb-5 mt-5 pb-5'>
                    <div>
                        <img src='/home.png' alt='home1_img' className={Style.img}></img>
                        <p style={{ color: '#454545' }} className='text-center mt-5 pt-3 display-4'>Invest in everything</p>
                        <p style={{ color: '#808080' }} className='lead'>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                        <button style={{ backgroundColor: '#387ed1', fontSize: '20px', fontWeight: 'bold', marginLeft: '250px' }} className="btn text-light p-2 pr-4 pl-4">Sign up now</button>
                    </div>
                </div>
                
                <div className='container mb-5 pb-2'>
                    <div className='row'>
                        <div className='col-md-6 col-12 p-lg-5 p-3'>
                            <img src='/home2.svg' alt='hom2e_img' className={Style.line2}></img>
                        </div>
                        <div className='col-md-6 col-12 p-lg-5 p-3'>
                            <img src='/home3.png' alt='home3_img' className={Style.line21}></img>

                        </div>
                    </div>
                </div>
                
                <div className='d-flex justify-content-center mb-5'>
                    <div>
                        <h2 style={{ color: '#454545' }} className='text-center'>The Zerodha Universe</h2><br></br>
                        <p style={{ color: '#808080' }} className='lead text-center'>A whole ecosystem of modern investment apps<br />
                            tailored to specific needs, built from the ground up</p>
                        <img src='/home4.png' alt='home_img' className={Style.box}></img>
                        <p className='text-center text-primary'>Explore our products-></p>
                    </div>
                </div>
                
                <div className='container'>
                    <div className='row mt-5 mb-5'>
                        <div className='col-md-6 col-12'>
                            <h2 style={{ color: '#454545' }}>Unbeatable pricing</h2><br></br>
                            <p style={{ color: '#808080' }} className='lead'>We pioneered the concept of discount broking and price<br></br>
                                transparency in India. Flat fees and no hidden charges.</p>
                            <p className='text-primary'>See pricing-></p>
                        </div>
                        <div className='col-md-6 col-12 '>
                            <div className='row mr-md-5 mb-3'>
                                <div className='col-6 border text-center h2 p-4'>
                                    Rs0
                                    <p className={Style.text}>Free eqity delivery and <br />direct mutual funds</p>
                                </div>
                                <div className='col-6 border text-center h2 p-4'>
                                    Rs20
                                    <p className={Style.text}>Intraday and F&O</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='container'>
                    <div className='row mt-5 mb-5 pb-3'>
                        <div className='col-md-6 col-12'>
                            <img src='/home5.svg' alt='home5_img' className={Style.varsityImg}></img>
                        </div>
                        <div className='col-md-6 col-12 mt-5'>
                            <h3 style={{ color: '#454545' }}>Free and Open market education</h3><br />
                            <p>Varsity, the largest online stock market education book in the world<br/>
                                covering everything from the basics to advanced trading.</p>
                            <p className='text-primary'>Varsity-></p><br />
                            <p>TradingQ&A, the most active trading and investment community in <br />India for all your market releated queries</p>
                            <p className='text-primary'>TradingQ&A-></p><br />
                        </div>
                    </div>
                </div>
                
                <div className="container text-center p-5">
                    <div className='mb-4'>
                        <h2 style={{ color: '#454545' }}>Open a Zerodha account</h2><br />
                        <p style={{ color: '#808080' }}>Excellent platform and apps. Rs0 investments and flat Rs20 intraday and F&O trades.</p><br />
                        <p><button style={{ backgroundColor: '#387ed1', fontSize: '20px', fontWeight: 'bold' }} className="btn text-light p-2 pr-4 pl-4">Sign up now</button></p>
                    </div>
                </div>
            </div>
            
            <hr></hr>
            
        </>
    )
}

export default Home