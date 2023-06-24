# Weverson Portfolio

## About

This is my portfolio! Here you will see a little more about me and my projects. The project was inspired by [Matheus Battisti's](https://github.com/matheusbattisti/react_sass) React and Sass class, but with some modifications to my liking

To view the website live, [click here](https://weversonl.com/)

## Technologies used

- React
- Vite
- Sass
- Docker

## Requirements

1. [Docker](https://docs.docker.com/engine/install/)
2. [Docker-compose](https://docs.docker.com/compose/)

### Optional dependencies

1. [Nodejs / npm](https://nodejs.org/en/download)

## Get Started

### Running the application with docker-compose

1. Clone the repository or download the source code

        git clone https://github.com/WeversonL/portfolio.git
        cd portfolio

2. Start with docker-compose

        docker-compose up -d

3. Open your browser and type in the URL bar

        http://localhost:3000/

### Running the application with docker run

1. Clone the repository or download the source code

        git clone https://github.com/WeversonL/portfolio.git
        cd portfolio

2. Start with docker run command

        docker run --name portfolio -p 3000:3000 weversonlemos/portfolio:latest

3. Open your browser and type in the URL bar

        http://localhost:3000/

### Run using npm

Make sure you have Nodejs and NPM installed on your machine.

1. Clone the repository or download the source code

        git clone https://github.com/WeversonL/portfolio.git
        cd portfolio

2. Download npm dependencies

        npm install

3. Run the npm project

        npm run dev

4. Open your browser and type in the URL bar

        http://localhost:3000/

⚠️ Still in development

## License

`portfolio` is released under the [GNU General Public License, Version 2](LICENSE)
    
        Copyright (C) 2022 Weverson Lemos

        This program is free software; you can redistribute it and/or
        modify it under the terms of the GNU General Public License
        as published by the Free Software Foundation; either version 2
        of the License, or (at your option) any later version
