import React from 'react';
import Projects from '../../components/Projects';

import mealPlanImg from '../../assets/img/projects/mealplan.png';
import socioSynergyImg from '../../assets/img/projects/sociosynergy.png';
import ttbImg from '../../assets/img/projects/ttb.png';
import jateImg from '../../assets/img/projects/jate.png';
import weatherImg from '../../assets/img/projects/weather.png';
import employeeManagerImg from '../../assets/img/projects/employee-manager.png';
import cookLense from '../../assets/img/projects/cooklense.png';

const portfolioProjects = [
  {
    title: 'cookLense',
    description: 'Employee Tracker is a CMS app for efficient employee control. Manage employees, roles, and departments with ease. Built with MySQL and NodeJS for a seamless experience.',
    image: cookLense,
    url: 'https://cooklense-6466eecac055.herokuapp.com/',
    repo: 'https://github.com/kristiyantefov/Cooklense',
  },
  {
    title: 'SocioSynergy',
    description: 'This group project involves creating a Social media platform that allows users to share their thoughts, opinions, and experiences in real-time.',
    image: socioSynergyImg,
    url: 'https://sociosynergy1.herokuapp.com/',
    repo: 'https://github.com/Ze7Hu/SocioSynergy',
  },
  {
    title: 'MealPlan',
    description: 'This group project involves creating an app for searching meal and drink recipes. Users can explore recipes based on categories, ingredients, and regions.',
    image: mealPlanImg,
    url: 'https://abstynent.github.io/project1-meal-plan-app/',
    repo: 'https://github.com/Abstynent/project1-meal-plan-app',
  },
  {
    title: 'The Tech Blog',
    description: 'CMS Tech Blog, a dynamic and informative platform powered by JavaScript, Express, Sequelize and Handlebars.',
    image: ttbImg,
    url: 'https://ttb-478af9121bfb.herokuapp.com/',
    repo: 'https://github.com/Abstynent/the-tech-blog',
  },
  {
    title: 'PWA Text Editor J.A.T.E',
    description: 'The PWA Text Editor is a versatile and intuitive Progressive Web Application (PWA) designed to provide users with a seamless and feature-rich text editing experience.',
    image: jateImg,
    url: 'https://just-a-t-e-pwa-df21c2a4b187.herokuapp.com/',
    repo: 'https://github.com/Abstynent/PWA-text-editor',
  },
  {
    title: '5d Weather Forecast',
    description: 'Your go-to app for hassle-free weather updates! Simply select your desired city, and within seconds, provides you with a comprehensive 5-day weather forecast.',
    image: weatherImg,
    url: 'https://abstynent.github.io/5d-weather-forecast/',
    repo: 'https://github.com/Abstynent/5d-weather-forecast',
  },
];

const Portfolio = () => {
  return (
    <div>
      <h1 className='header-portfolio'>My Portfolio</h1>
      <Projects projects={portfolioProjects} />
    </div>
  );
};

export default Portfolio;