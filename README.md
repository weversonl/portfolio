# Weverson Portfolio

## About

This is my portfolio! Here you will see a little more about me and my projects. TypeScript, React, Vite and Tailwind stack.

To view the website live, [click here](https://weverson.dev/)

## Technologies used

- React 18.3.1
- TypeScript 5.7.2
- Vite 6.4.1
- Tailwind CSS 3.4.17
- Docker

## Features

- 🌓 Dark/Light theme toggle
- 🌍 i18n support (PT-BR / EN-US)
- 📱 Fully responsive design
- 🚀 SEO optimized
- 🐳 Docker ready for production

## SEO Optimization

This portfolio includes comprehensive SEO configuration:

### Meta Tags

- **Title**: "Weverson Lemos - Desenvolvedor Backend Java | Spring Boot, Docker, PostgreSQL"
- **Description**: Detailed description with main technologies and experience
- **Keywords**: weverson lemos, desenvolvedor java, desenvolvedor backend, spring boot, java developer, backend developer
- **Open Graph**: Full social media sharing optimization
- **Twitter Cards**: Twitter-specific metadata
- **Structured Data (JSON-LD)**: Schema.org Person markup for rich snippets

### Files

- ✅ `robots.txt` - Search engine crawling instructions
- ✅ `sitemap.xml` - Site structure for search engines
- ✅ Canonical URLs
- ✅ hreflang tags for internationalization

### Google Search Console Setup

After deployment, register your site:

1. Access [Google Search Console](https://search.google.com/search-console)
2. Add your property: `https://weverson.dev`
3. Verify ownership (HTML file or DNS record)
4. Submit sitemap: `https://weverson.dev/sitemap.xml`

### Keywords to Index

The site is optimized for these search terms:

- Weverson Lemos
- Desenvolvedor Java
- Desenvolvedor Backend
- Spring Boot Developer
- Java Developer São Paulo
- Backend Developer Brazil

## Requirements

1. [Docker](https://docs.docker.com/engine/install/)
2. [Docker-compose](https://docs.docker.com/compose/)

### Optional dependencies

1. [Nodejs / npm](https://nodejs.org/en/download)

## Get Started

### Running the application with docker-compose

1.  Clone the repository or download the source code

        git clone https://github.com/weversonl/portfolio.git
        cd portfolio

2.  Start with docker-compose

        docker-compose up -d

3.  Open your browser and type in the URL bar

        http://localhost:3000/

### Running the application with docker run

1.  Clone the repository or download the source code

        git clone https://github.com/weversonl/portfolio.git
        cd portfolio

2.  Start with docker run command

        docker run --name portfolio -p 3000:3000 weversonlemos/portfolio:latest

3.  Open your browser and type in the URL bar

        http://localhost:3000/

### Run using npm

Make sure you have Nodejs and NPM installed on your machine.

1.  Clone the repository or download the source code

        git clone https://github.com/weversonl/portfolio.git
        cd portfolio

2.  Download npm dependencies

        npm install

3.  Run the npm project

        npm run dev

4.  Open your browser and type in the URL bar

        http://localhost:3000/

⚠️ Still in development

## License

`portfolio` is released under the [GNU General Public License, Version 2](LICENSE)

        Copyright (C) 2022 Weverson Lemos

        This program is free software; you can redistribute it and/or
        modify it under the terms of the GNU General Public License
        as published by the Free Software Foundation; either version 2
        of the License, or (at your option) any later version
