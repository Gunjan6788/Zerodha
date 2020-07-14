import React from 'react';

const Pricing = () => {
    return (
        <>
            <div style={{ marginTop: '100px' }}>
                <div className='container'>
                    <div className='m-5 p-5 '>
                        <p style={{ color: '#454545' }} className='text-center display-4'>Pricing</p>
                        <p style={{ color: '#454545' }} className='text-center lead'>Free equity investment and flat Rs 20 intraday and F & O trades</p>
                    </div>
                    <hr />
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4 col-12 p-5 text-center'>
                            <div className='pl-lg-5'>
                                <img src='/0.png' alt='product6_img' style={{height:'220px',width:'200px'}}></img>
                            </div>
                            <div className='pl-lg-5'>
                                <h2 style={{ color: '#454545' }}>Free equity delivery</h2>   
                                <p style={{color:'grey'}} className='lead'>All equity delivery investments (NSE, BSE),are absolutely free --Rs 0 brokerage</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-12 p-5 text-center'>
                            <div className='pl-lg-5'>
                                <img src='/20.png' alt='product6_img' style={{height:'220px',width:'230px'}}></img>
                            </div>
                            <div className='pl-lg-5'>
                                <h2 style={{ color: '#454545' }}>Indraday and F&O trades</h2>   
                                <p style={{color:'grey'}} className='lead'>Flat Rs 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency and commodity trades</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-12 p-5 text-center'>
                            <div className='pl-lg-5'>
                                <img src='/0.png' alt='product6_img' style={{height:'220px',width:'200px'}}></img>
                            </div>
                            <div className='pl-lg-5'>
                                <h2 style={{ color: '#454545' }}>Free direct MF</h2>   
                                <p style={{color:'grey'}} className='lead'>All direct mutual fund investments are absolutely free --Rs 0 commissions & DP charges.</p>
                            </div>
                        </div>
                    </div>
                <hr></hr>
                </div>
                <div className="container text-center p-5">
                    <div className='mb-4'>
                        <h2 style={{ color: '#454545' }}>Open a Zerodha account</h2><br />
                        <p style={{ color: '#808080' }}>Excellent platform and apps. Rs0 investments and flat Rs20 intraday and F&O trades.</p><br />
                        <p><button style={{ backgroundColor: '#387ed1', fontSize: '20px', fontWeight: 'bold' }} className="btn text-light p-2 pr-4 pl-4">Sign up now</button></p>
                    </div>
                </div>
                <div className='container pt-5 pb-5'>
                    <div className='row'>
                        <div className='col-12 offset-lg-1 col-lg-4 text-center p-4'>
                            <h5  style={{ color: '#387ed1'}}>Brokerage calculator</h5>
                        </div>
                        <div className='col-12 offset-lg-2 col-lg-4 text-center p-4 '>
                            <h5 style={{ color: '#387ed1'}}>List of charges</h5>
                        </div>
                    </div>
                    <ul style={{color:'grey'}}>
                        <li><small>Call & Trades and RMS auto-squareoff: Additional charges of Rs50 per executes order</small></li>
                        <li><small>Digital contract notes will be sent via e-mail</small></li>
                        <li><small>Physical copies of contract notes, if required, shall be charges Rs20 per contract note. Courier charges apply</small></li>
                        <li><small>For NRI's:Rs200 or 0.1% (whichever lower) per executed order</small></li>
                        <li><small>A brokerage charge of 0.25% will be applied on all trades done in any cash-settled commodity contracts in the last two days of trading in any expiry</small></li>
                    </ul>
                </div>
                <hr />
            </div>
        </>
    )
}

export default Pricing