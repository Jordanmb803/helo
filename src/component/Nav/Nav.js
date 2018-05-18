import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

function Nav(props) {
    console.log(props)
    return (
        <div className='nav'>
            <div>
                <img className='profilePic' src={props.profile_picture} width= '100px' height= '100px'/>
                <p>{props.username}</p>
            <div>
                <Link to='/dashboard'><button>Home</button></Link>
            </div>  
                <Link to='/new'><button>New Post</button></Link>
            </div>
            <Link to='/'><button>Logout</button></Link>
        </div>
    )
}

function mapStateToProps(state){
    return {
        username: state.username,
        profile_picture: state.profile_picture
    }
}

export default connect(mapStateToProps)(Nav)