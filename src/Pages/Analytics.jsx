import React from 'react';
import './page.css'
import SideNav from '../components/SideNav';
import Card_Card from '../components/Card';

const Aanalytics = () => {
    return (
        <>
            <SideNav />
            <div className='margin'>
                <h1 className='text-center'>Aanalytics</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mx-auto d-flex justify-content-around gap-20 flex-wrap items-center">
                            <Card_Card />
                            <Card_Card />
                            <Card_Card />
                            <Card_Card />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Aanalytics



