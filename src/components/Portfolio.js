import React from 'react';
import Projects from './Projects';

const portfolioProjects = [
  {
    title: 'MealPlan',
    description: 'This group project involves creating an app for searching meal and drink recipes. Users can explore recipes based on categories, ingredients, and regions.',
    image: '/img/projects/mealplan.png',
    url: 'https://abstynent.github.io/project1-meal-plan-app/',
    repo: 'https://github.com/Abstynent/project1-meal-plan-app',
  }
];

const Portfolio = () => {
  return (
    <div>
      <h1>My Portfolio</h1>
      <Projects projects={portfolioProjects} />
    </div>
  );
};

export default Portfolio;