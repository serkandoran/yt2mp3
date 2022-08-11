
const express = require('express')
const cors = require('cors')
const fetch = require('node-fetch')
const bodyParser = require('body-parser')


const app = express()
app.use(cors())
app.use(bodyParser.json())

const options = {
   method: 'GET',
   headers: {
      'X-RapidAPI-Key': 'dbc33279bemsh645e756f92fcbf7p1ab19ajsnab2a63ab43c9',
      'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
   }
 };


app.get('/',(req,res)=>{
   res.send('')
})

app.post('/',async (req,res)=>{
   let data = req.body.veri
   let response = await fetch(`https://youtube-mp36.p.rapidapi.com/dl?id=${data}`, options)
   let responseJson = await response.json()
   return res.send(responseJson)
})

app.listen(3000)



