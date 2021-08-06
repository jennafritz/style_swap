# Style Swap
> A virtual clothing swap app that allows users to upload their clothes, view others’ closets, and participate in swap events.

<!-- > Live demo [_here_](https://www.example.com). If you have the project hosted somewhere, include the link here. -->

## Table of Contents
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Acknowledgements](#acknowledgements)
* [Contact](#contact)
<!-- * [General Info](#general-information) -->
<!-- * [Screenshots](#screenshots) -->
<!-- * [License](#license) -->


<!-- ## General Information
- Provide general information about your project here.
- What problem does it (intend to) solve?
- What is the purpose of your project?
- Why did you undertake it?
You don't have to answer all the questions - just the ones relevant to your project. -->


## Technologies Used
- Ruby on Rails
- PostgreSQL
- React
- React Router
- Redux Toolkit
- React Bootstrap
- NodeJS and npm


## Features
Users can:
- Maintain a custom closet of their styles (add, delete, and view clothes)
- Participate in swap events (submit clothes for credit, then use credits to swap clothes)
- Browse other users' closets
- Create new swap events (admin users only)


<!-- ## Screenshots
![Example screenshot](./img/screenshot.png)
If you have screenshots you'd like to share, include them here. -->


## Setup
**Fork and clone this repository**.

Then run:

```sh
bundle install
rails db:create
npm install --prefix client
```


## Usage
You can use the following commands to run the application:

- `rails s`: run the backend on [http://localhost:3000](http://localhost:3000)
- `npm start --prefix client`: run the frontend on
  [http://localhost:4000](http://localhost:4000)
- `rails start`: run the frontend and backend together with one command


## Project Status
Project is in progress but currently inactive.
<!-- _in progress_ / _complete_ / _no longer being worked on_. If you are no longer working on it, provide reasons why. -->


## Room for Improvement
To do:
- Introduce friend request feature by aliasing user model
- Add ability to request private swap of specific clothing from a friend's closet
- More advanced styling (carousel component for "Current Styles" preview section)
- Stricter categorization of clothing to enable filter/search functionality within swaps and within friends' closets (all or individual)
<!-- Include areas you believe need improvement / could be improved. Also add TODOs for future development.

Room for improvement:
- Improvement to be done 1
- Improvement to be done 2 -->


## Acknowledgements
- Base repo setup cloned from [this repo](https://github.com/learn-co-curriculum/project-template-react-rails-api) for easy deployment to Heroku
- Original version created with @pretendprogrammer: [Clothing Swap](https://github.com/pretendprogrammer/Clothing-Swap)
- User profile images courtesy of Unsplash and:
  - [Matthew Hamilton](https://unsplash.com/photos/tNCH0sKSZbA)
  - [Erik Lucatero](https://unsplash.com/photos/d2MSDujJl2g)
  - [Dami Adebayo](https://unsplash.com/photos/k6aQzmIbR1s)
  - [Seth Doyle](https://unsplash.com/photos/vmBik4xv27s)
  - [Annie Spratt](https://unsplash.com/photos/MBjG3mgBEno)
  - [Velizar Ivanov](https://unsplash.com/photos/gk9YUR7SDXo)
- README format based on [this template](https://github.com/ritaly/README-cheatsheet/blob/HEAD/README.md#L1-L82)


## Contact
Created by [@jennafritz](https://www.linkedin.com/in/jenna-fritz/) - feel free to contact me!