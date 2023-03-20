import React from 'react';
import {Link} from 'react-router-dom';

export default class LogoBox extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <div className="logo-box">
                    <Link to={process.env.PUBLIC_URL + `/`}>
                        <img src={publicUrl+"assets/images/resources/stricky-logo.png"} alt="Logo" />
                    </Link>
                </div>
            </>
        )
    }
}