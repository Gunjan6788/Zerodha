import React from 'react';
import Style from './Product.module.css'

const Product = () => {
    return (
        <>
            <div style={{ marginTop: '100px' }}>

                <div className='container'>
                    <div className='m-5 p-5 '>
                        <p style={{ color: '#454545' }} className='text-center display-4'>Technology - <span style={{ color: '#808080' }}>Investments</span></p>
                        <p style={{ color: '#454545' }} className='text-center lead'>Sleek, modern, and intuitive trading platforms</p>
                    </div>
                    <hr />
                </div>

                <div className='container p-5'>
                    <div className='row'>
                        <div className='col-lg-7 col-12'>
                            <img src='/product1.png' alt='product1_img' className={Style.img}></img>
                        </div>
                        <div className='col-lg-5 col-12 pl-5 pt-5'>
                            <div className='ml-5 pl-5'>
                                <h1 style={{ color: '#454545' }}>Kite</h1>
                                <p className='text-justify'>Our ultra-fast flagship platform with streaming market data, advanced charts, an elegant UI, and more.Enjoy the Kite experience seamlessly on your Android and iOS devices</p>
                                <p className='text-primary'>Learn more -></p>
                                <img src='/googlePlay.png' alt='google play' className={Style.logo} style={{ marginTop: '10px' }} />
                                <img src='/appStore.jpeg' alt='app store' className={Style.logo} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container p-5'>
                    <div className='row'>
                        <div className='col-lg-5 col-12 order-sm-12 order-lg-0 pr-5 pt-5'>
                            <div className='mr-5 pr-5 pt-5'>
                                <h1 style={{ color: '#454545' }}>Console</h1>
                                <p className='text-justify'>The central dashboard for your Zerodha account. Gain insights into your trades and investment with in-depth reports and visualisations.</p>
                                <p className='text-primary'>Learn more -></p>
                            </div>
                        </div>
                        <div className='col-lg-7 col-12 order-sm-1 order-lg-0'>
                            <img src='/product2.png' alt='product2_img' className={Style.img}></img>
                        </div>
                    </div>
                </div>

                <div className='container p-5'>
                    <div className='row'>
                        <div className='col-lg-7 col-12 '>
                            <img src='/product3.png' alt='product3_img' className={Style.img}></img>
                        </div>
                        <div className='col-lg-5 col-12 pl-5 pt-5'>
                            <div className='ml-5 pl-5 pt-5'>
                                <h1 style={{ color: '#454545' }}>Coin</h1>
                                <p className='text-justify'>Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.</p>
                                <p className='text-primary'>Coin -></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container p-5'>
                    <div className='row'>
                        <div className='col-lg-5 col-12 order-sm-12 order-lg-0 pr-5 pt-5'>
                            <div className='mr-5 pr-5 pt-5'>
                                <h1 style={{ color: '#454545' }}>Kite Connect API</h1>
                                <p className='text-justify'>Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.</p>
                                <p className='text-primary'>Kite Connect -></p>
                            </div>
                        </div>
                        <div className='col-lg-7 col-12 order-sm-1 order-lg-0'>
                            <img src='/product4.png' alt='product4_img' className={Style.img}></img>
                        </div>
                    </div>
                </div>

                <div className='container p-5'>
                    <div className='row'>
                        <div className='col-lg-7 col-12 pl-5'>
                            <img src='/product5.png' alt='product5_img' className={Style.mobile}></img>
                        </div>
                        <div className='col-lg-5 col-12 pl-5 pt-5'>
                            <div className='ml-5 pl-5 pt-5'>
                                <h1 style={{ color: '#454545' }}>Varsity mobile</h1>
                                <p className='text-justify'>An easy to grasp, collection of stock market lessons with in-depth coverage and illustration. Content is broken down into bite-size cards to help you learn on to go.</p>
                                <img src='/googlePlay.png' alt='google play' className={Style.logo} style={{ marginTop: '10px' }} />
                                <img src='/appStore.jpeg' alt='app store' className={Style.logo} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container p-5'>
                    <div className='row'>
                        <div className='col-lg-5 col-12 order-sm-12 order-lg-0 pr-5 pt-5'>
                            <div className='mr-5 pr-5 pt-5'>
                                <h1 style={{ color: '#454545' }}>Sential</h1>
                                <p className='text-justify'>Create powerful market alerts on the cloud for stocks, futures and options, and more for free.</p>
                                <p className='text-primary'>Sentinel -></p>
                            </div>
                        </div>
                        <div className='col-lg-7 col-12 order-sm-1 order-lg-0'>
                            <img src='/product6.png' alt='product6_img' className={Style.img}></img>
                        </div>
                    </div>
                </div>
            
                <div className="container text-center p-5">
                    <div className='mb-4'>
                        <h1 style={{ color: '#454545' }}>The Zerodha Universe</h1><br />
                        <p style={{ color: '#808080' }}>Extend your trading and investment experience even further with our partner platforms</p><br />
                        <p><button style={{ backgroundColor: '#387ed1', fontSize: '20px', fontWeight: 'bold' }} className="btn text-light p-2 pr-4 pl-4">Sign up now</button></p>
                    </div>
                </div>

                <hr/>
            </div>
        </>
    )
}

export default Product
