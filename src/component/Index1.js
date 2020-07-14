import React from 'react';
import './Index1.module.css'
import { Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Product from './Product'
import Pricing from './Pricing'
import Style from './Index1.module.css'


const Routing = () => {
    return (
        <>
            <div className='bg-secondary'>
                <nav className="navbar fixed-top navbar-light bg-light p-3 shadow-sm bg-white rounded">
                    <div className='container'>
                        <Link to='/'><img src='/logo.svg' alt='logo' className='float-left' /></Link>
                        <div className='float-left list'>
                            <Link to='/'></Link>
                            <Link to='/About'><span>About</span></Link>
                            <Link to='/Product'><span>Product</span></Link>
                            <Link to='/Pricing'><span>Pricing</span></Link>
                            <span>Support</span>
                            <Link ><span><button style={{ backgroundColor: '#387ed1' }} className="btn text-light pr-4 pl-4">Sign up</button></span></Link>
                        </div>
                    </div>
                </nav>
            </div>


            <Route path='/' exact component={Home} />
            <Route path='/About' exact component={About} />
            <Route path='/Product' exact component={Product} />
            <Route path='/Pricing' exact component={Pricing} />


            <footer>
                <div class='container'>
                    <div className='row mb-5 p-4'>
                        <div className='col-md-3 col-12 pt-4'>
                            <img src='/logo.svg' alt='logo' className={Style.logo} style={{ marginBottom: '15px' }} />

                            <div>
                                <img src='/tele.png' alt='telephone' className={Style.social} />
                                +91 80 7418 1888
                            </div><br />

                            <div>
                                <img src='/c.png' alt='copyright' className={Style.social} />
                                <small>2010 - 2020, Zerodha Broking Ltd.<br />All rights reversed.</small>
                            </div><br />

                            <div className='container'>
                                <div className='row'>
                                    <div className='col-2'>
                                        <img src='twitter.png' alt='twitter' className={Style.social} />
                                    </div>
                                    <div className='col-2'>
                                        <img src='f.png' alt='facebook' className={Style.social} />
                                    </div>
                                    <div className='col-2'>
                                        <img src='i.png' alt='instagram' className={Style.social} />
                                    </div>
                                    <div className='col-2'>
                                        <img src='l.png' alt='linkedin' className={Style.social} />
                                    </div>
                                    <div className='col-2'>
                                        <img src='t.png' alt='telegram' className={Style.social} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-3 col-12  pt-4'>
                            <h5 className={Style.footer}>Company</h5><br />
                            <p>About</p>
                            <p>Products</p>
                            <p>Pricing</p>
                            <p>Referral programme</p>
                            <p>Careers</p>
                            <p>Zerodha.tech</p>
                            <p>Press & media</p>
                            <p>Zerodha Cares (CSR)</p>
                        </div>

                        <div className='col-md-3 col-12  pt-4'>
                            <h5 className={Style.footer}>Support</h5><br />
                            <p>Contact</p>
                            <p>Support portal</p>
                            <p>Z-Connect blog</p>
                            <p>List of charges</p>
                            <p>Downloads & resources</p>
                        </div>

                        <div className='col-md-3 col-12  pt-4'>
                            <h5 className={Style.footer}>Account</h5><br />
                            <p>Open an account</p>
                            <p>Fund tranfer</p>
                            <p>60 day challenge</p>
                        </div>
                    </div>

                </div>
            </footer>

        </>
    );
}

export default Routing;