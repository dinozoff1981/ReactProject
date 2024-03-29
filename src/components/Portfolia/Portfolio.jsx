import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './Portfolio.css';

const Portfolio = () => {
    const [loading, setLoading] = useState(true);
    const [repos, setRepos] = useState([]);
    const [htmlUrls, setHtmlUrls] = useState([]);

    useEffect(() => {
        const delay = setTimeout(() => {
            fetch("https://api.github.com/users/dinozoff1981/repos")
                .then((response) => response.json())
                .then((result) => {
                    setRepos(result);
                    setHtmlUrls(result.map(repo => repo.html_url));
                    setLoading(false);
                })
                .catch((error) => {
                    console.log(error);
                    setLoading(false);
                });
        }, 2000);

        return () => clearTimeout(delay);
    }, []);

    return (
        <div>
            <h1>MY PROJECTS</h1><br /><br />
            {loading && <ProgressBar now={100} label="Loading... Please Wait" />}
            <div className="wrapper">
                {repos.map((repo, id) => (
                    <div className="cards" key={repo.id}>
                        <h3 className="card-title">{repo.name}</h3>
                        <p className="card-content">{repo.description}</p>
                        <h2 className='lang'>{repo.language}</h2>
                        <p>{repo.created_at}</p>
                        <Button className="card-btn" href={htmlUrls[id]} target="_blank">Go To Git Repo</Button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
