const express = require('express')
const app = express()
const PORT = 3000

app.get('/api/v1/user', (req, res) => {
    const details = {
        name: 'Jaichandar',
        age: 23,
        role: 'Associate Software Engineer',
        Aim: 'Full-stack Developer, blockchain developer',
        Education: [
            {
               name: "Wisdom Matriculation Higher Secondary School",
               percentage: '89%',
               year: '2014' 
            },
            {
                name: 'Indo-American School',
                percentage: '81%',
                year: '2015' 
            },
            {
                name: 'MNM Jain Engineering College',
                percentage: '74%',
                year: '2016 - 2020'
            }
        ],
        Expirence: [
            {
                name: 'Prevaj Consultant Private Limited',
                Experience: '2021-2022',
                role: 'Software Trainee'
            },
            {
                name: 'Kaaylabs Private Limited',
                Expirence: '2022-',
                role: 'Associate Software Engineer'
            }
        ]
    }
    res.status(200).json({
        success: true,
        details
    })
})

app.listen(PORT, () => {
    console.log('PORT listening on port ' + PORT)
})