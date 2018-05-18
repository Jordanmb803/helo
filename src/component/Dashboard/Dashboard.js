import React, { Component } from 'react'

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            searchInput: '',
            checkbox: true,
        }
    }

    seeMyPosts(){
        this.set
    }

    render() {
        console.log(this.state)
        return (
            <div className='dashboard'>
                <div className='dashSearchHeader'>
                    <div>
                        <input />
                        <button>search</button>
                        <button>reset</button>
                    </div>
                    <div>
                        <label for='My Post'>My Post</label>
                        <input type='checkbox' id='My Post' value={this.state.checkbox} onClick={
                            e => this.setState({checkbox: !this.state.checkbox})
                            }/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;