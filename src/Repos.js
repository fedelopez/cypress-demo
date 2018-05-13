import React, {Component} from 'react';

class Repos extends Component {

    constructor() {
        super();
        this.state = {
            user: null,
            repos: []
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
                    return {name: repo.name, description: repo.description}
                });
                this.setState({repos: newRepos});
            });
    };

    updateUser = (event) => {
        this.setState({user: event.target.value});
    };

    render() {
        return (
            <div style={{marginTop: '2em', maxWidth: '1281px', display: 'inline-block'}}>
                <input onChange={this.updateUser}/>
                <button style={{marginLeft: '1em'}} onClick={this.loadRepos}>Load Repos</button>
                <div>
                    <ul style={{textAlign: 'left'}}>
                        {this.state.repos.map(repo => <li><b>{repo.name}</b> - <em
                            style={{color: 'grey'}}>{repo.description}</em></li>)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Repos;