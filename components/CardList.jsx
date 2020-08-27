import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card.jsx';

export default props => {
  const [githubData, setGithubData] = useState([]);
  useEffect(() => {
    axios
      .get(
        'https://raw.githubusercontent.com/juejin-im/repo-data/master/repos.json',
      )
      .then(({ data }) => {
        setGithubData(data);
      });
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}
    >
      {props.repos.map(repo => {
        return (
          <Card
            key={repo}
            data={githubData.find(item => item.full_name === repo)}
          />
        );
      })}
    </div>
  );
};
