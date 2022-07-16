import React from 'react';

class About extends React.Component {
  render() {
    const skills = ['HTML', 'CSS', 'DOM', 'JavaScript', 'React']; // adicione mais habilidades aqui
    const jsxSkills = skills.map((skill) => <li>{skill}</li>); // cria um array de tags <li></li>
    return (
      <div>
        <div className="nome-descricao">
          <h1>Rubens Deola</h1>
          <p>dev adict</p>
        </div>
        <div className="skills">
          <h2>Minhas Habilidades</h2>
          <ul>{jsxSkills}</ul>
        </div>
      </div>
    );
  }
}

export default About;
