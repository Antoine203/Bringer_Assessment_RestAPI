const express = require('express')
const jwt = require('jsonwebtoken')
const axios = require('axios')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()


// Secret Key for JWT Token
const secretKey = 'jwtSecretKey'

app.use(cors({
    origin: '*'
}));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json()) // for parsing application/json


// Endpoint to generate a JWT token
// Tested on Postman -> Body -> x-www-form-urlencoded
app.post('/Generate_Token', (req, res) => {
    const {login, password} = req.body
    console.log("req.body: ", req.body)

    if (!login || !password){
        return res.status(400).json({error: 'Login and password are required.'})
    }
    const token = jwt.sign({login, password}, secretKey)
    res.json({token})
})

// Endpoint to track a parcel
app.get('/Tracking_parcel', async (req, res) => {
    const {tracking_number} = req.query;

    if (!tracking_number) {
        return res.status(400).json({error: 'Tracking_number is required.'})
    }
    try {
        // Make a request to the third-party API with the Bearer token
        const response = await axios.get(`https://bps.bringer.io/public/api/v2/get/parcel/tracking.json?tracking_number=${tracking_number}`, {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE2NzIzMjY1NTUsImV4cCI6MTcwMzg2MjU1NSwiYXVkIjoiaHR0cHM6Ly9icmluZ2VycGFyY2VsLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiNTI1eXM2YWh4d3UyIiwianRpIjoiZDdlZGE3NDgtNzMxOS00YWIzLWI2MGEtMDEzMzI0NmVkNmY2In0.uJi6d6-E2zDWj24wryh2sVWKs4ceny4QllbrHrzK5L0'
            }
        })
        // Returns API data
        res.send(response.data)
        // console.log(response)
        // console.log(response.data)
    } catch (error){
        res.status(500).json({error: 'Failed to fetch parcel tracking data.'})
    }
})

// Start the server
const port = 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})