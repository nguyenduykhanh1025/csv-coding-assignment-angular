# Coding Assignment

## Getting Started

*Do not fork* this repo. Instead download the zip.

Then install the packages and you're good to go!

```bash
npm install

# run app
npm run start

# run tests
npm run test
```

## Project Dependency Rules

### Feature
Developers should consider feature libraries as libraries that implement smart UI (with access to data sources) for specific business use cases or pages in an application.

## UI
A UI library contains only presentational components (also called "dumb" components).

## Data-access
A data-access library contains code for interacting with a back-end system. It also includes all the code related to state management.

## Utility
A utility library contains low-level utilities used by many libraries and applications.

Reference: https://nx.dev/concepts/decisions/project-dependency-rules

## Notes
- The search feature only supports for searching the description of the task
- The project is using NGRX for the state management library
- I can not install NGRX with the angular version 12.2.3 therefore I decided to upgrade it to 12.2.17