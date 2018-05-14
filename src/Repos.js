import React, {Component} from 'react';

class Repos extends Component {

    constructor() {
        super();
        this.state = {
            user: null,
            repos: [],
            review: null
        }
    }

    loadRepos = () => {
        const {user} = this.state;
        fetch(`https://api.github.com/users/${user}/repos`)
            .then(result => {
                return result.json();
            })
            .then(json => {
                console.log('Repo count: ' + json.length);
                const newRepos = json.map(repo => {
                    return {name: repo.name, description: repo.description, url: repo.html_url}
                });
                this.setState({repos: newRepos});
            });
    };

    updateUser = (event) => {
        this.setState({user: event.target.value});
    };

    getReview = () => {
        const awesome = 'http://www.mocky.io/v2/5af97caf2e00005800278c37?mocky-delay=5000ms';
        fetch(awesome)
            .then(result => {
                return result.json();
            })
            .then(json => {
                this.setState({review: json.review});
            });
    };

    render() {
        return (
            <div style={{marginTop: '2em', maxWidth: '1281px', display: 'inline-block'}}>
                <input onChange={this.updateUser}/>
                <button style={{marginLeft: '1em'}} onClick={this.loadRepos}>Load Repos</button>
                {this.state.review && <p><b>{this.state.review}</b></p>}
                <div>
                    <ul style={{textAlign: 'left'}}>
                        {this.state.repos.map(repo => <li key={repo.name} onClick={this.getReview}>
                            <b>{repo.name}</b> - <em
                            style={{color: 'grey'}}>{repo.description}</em></li>)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Repos;