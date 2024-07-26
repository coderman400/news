const express = require('express')
const newsRouter = express.Router()
const axios = require('axios')

newsRouter.get('', async(req,res) => {
    // res.render('news')

    try{
        const newsAPI = await axios.get(`https://newsapi.org/v2/everything?q=Apple&from=2024-07-25&sortBy=popularity&apiKey=faf2c2fe4aae4cd0ae17e75c9200b37b`)
        res.render('news', {articles: newsAPI.data.articles})
    }catch(err){
        if(err.response){
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.header)
        }else if(err.request){
            console.log(err.request)
        }else{
            console.error('ERROR',err.message)
        }
    }
})
module.exports = newsRouter