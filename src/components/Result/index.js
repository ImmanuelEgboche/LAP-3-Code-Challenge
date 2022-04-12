import React from 'react';

export default function ({ result }) {
    return (
        <div id="result">
            <p>Name:<a href = {result.html_url}>{result.name}</a></p>
            <p>star:{result.stargazers_count}</p>
            <p>watcher:{result.watchers_count}</p>
            <p>Fork:{result.forks_count}</p>
        </div>
    )
}