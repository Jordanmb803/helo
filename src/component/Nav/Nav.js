import React from 'react';
import {Link} from 'react-router-dom';

export default function Nav() {
    return (
        <div>
            <div>
                <Link to='/dashboard'><button>Home</button></Link>
                <Link to='/new'><button>New Post</button></Link>
            </div>
            <Link to='/'><button>Logout</button></Link>
        </div>
    )
}