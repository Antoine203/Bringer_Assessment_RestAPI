# Bringer_Assessment_RestAPI

### Project Requirements

### Develop a small public Rest API application in NODE.JS
####      this API will contain 2 endpoints:
####      Generate_Token
####      Tracking_parcel

#### The Generate_token endpoint will receive 2 parameters ( login and password ), combine this 2 parameters (login+password) and return it as a JWT token parameter.

#### The Tracking Parcel will receive one parameter ( Tracking_number ) and will consume a 3rd party endpoint ( https://bps.bringer.io/public/api/v2/get/parcel/tracking.json?tracking_number=BPS1EP58YI5SKBR ) For this endpoint use this Bearer token below eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE2NzIzMjY1NTUsImV4cCI6MTcwMzg2MjU1NSwiYXVkIjoiaHR0cHM6Ly9icmluZ2VycGFyY2VsLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiNTI1eXM2YWh4d3UyIiwianRpIjoiZDdlZGE3NDgtNzMxOS00YWIzLWI2MGEtMDEzMzI0NmVkNmY2In0.uJi6d6-E2zDWj24wryh2sVWKs4ceny4QllbrHrzK5L0 and return the json information to the frontend.

## Installation
```bash
npm install body-parser
npm install cors
npm install express
npm install jsonwebtoken
npm install nodemon
```

## Run Program
```bash
nodemon app.js
```


## Browser Url Paths
### http://localhost:3001/Tracking_parcel
### http://localhost:3001//Generate_Token
