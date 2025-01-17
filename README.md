## Frontend Technical Test


### Task Instructions

During your technical test interview we require you to create a simple Angular application using current frontend development best practices. During the 90 minute Teams interview we'd like you to share your screen so that we can see how you approach this task. At pertinent points we will ask you questions to test your knowledge on topics such as Angular, JavaScript, TypeScript, coding principles, coding patterns, code quality. Although the app has simple functionality, we'd like you to design the code in a scalable and maintainable manner as if you were setting out creating the structure for an enterprise level application with a larger scope and with multiple developers contributing.

Please use your choice of IDE and development tools and feel free to use your usual online sources by way of reference e.g. to check syntax. If you do not complete the test then do not panic. The aim of this interview is to assess your competency level.

Before your interview feel free to create your Angular app and bring in the assets that we have provided so that you have a basic shell of an application to start the exercise from. Also feel free to install any npm packages that you typically use in your projects.

Designs have been provided in the /designs folder for a simple view that displays images of cars along with some basic sales information relevant to each vehicle displayed. Designs have been provided for desktop, mobile and tablet browsers. It is not necessary to demonstrate this working on a mobile or tablet device, but you need to be able to demonstrate how the view would adapt for each device type / resolution.

Using the APIs detailed below, traverse the API data to dynamically build the views according to the design.

Images for each vehicle returned in the API response can be found in the /images folder.

#### Acceptance Criteria
We have a high focus on attention to details in code

* The formatting of the codebase should be consistent and written in a modular approach
* We expect the codebase to be written using ES6+ and libraries kept to a minimum
* We expect the code to be written with unit testing & performance in mind
* We prefer native Browser Api over JS libraries
* Mobile-first development approach using min-width media queries
* Solution should be accessible and meet WCAG 2.1
* No CSS framework allowed
* Internally, we use BEM - but we are open to other CSS naming conventions as long as it's built with scale and maintenance in mind

We have a high focus on attention to details in design

* We expect the designs to match as closely as possible, ready for a designer to review
* Correct semantic HTML mark-up and/or CSS should be used to achieve the size and aspect ratio of the images in the design
* Interactions and animations to be considered but not distracting users away from the experience
* Minimal visual bugs when going resizing to mobile and large screen sizes

#### Nice to have
If you have achieved primary tasks and would like to showcase your skills by implementing additional feature(s) then you can consider the following:

* An accessible modal implementation which displays the additional vehicle information e.g. emission, bodystyle
* Implement "Read more" which Show/Hide additional vehicle information
* A staggered fade in vehicle cards on load
* Anything else which we cannot think of!


#### API URLs
* [https://frontend-code-test-api-jhbwml7vva-nw.a.run.app/api/vehicles/](https://frontend-code-test-api-jhbwml7vva-nw.a.run.app/api/vehicles/)
  Returns a list of vehicles

* [https://frontend-code-test-api-jhbwml7vva-nw.a.run.app/api/vehicles/{id}](https://frontend-code-test-api-jhbwml7vva-nw.a.run.app/api/vehicles/xe)
  Returns detail for one vehicle. The vehicle id (provided in the above API call) should be passed as a parameter

# StoryteqFrontendCodeTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
