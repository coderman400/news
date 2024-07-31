const express = require('express')
const newsRouter = express.Router()
const axios = require('axios')

// newsRouter.get('', async(req,res) => {
//     // res.render('news')
    
//     try{
//         const newsAPI = await axios.get(`https://newsapi.org/v2/top-headlines?country=fr&from=2024-07-30&sortBy=popularity&apiKey=${process.env.apikey}`)
//         res.render('news', {articles: newsAPI.data.articles})
//     }catch(err){
//         if(err.response){
//             console.log(err.response.data)
//             console.log(err.response.status)
//             console.log(err.response.header)
//         }else if(err.request){
//             console.log(err.request)
//         }else{
//             console.error('ERROR',err.message)
//         }
//     }
// })


newsRouter.get('', async (req, res) => {
    const country = req.query.country || 'us';
    console.log("CALLED THIS WITH VALUE: " + country)
    try {
        const newsAPI = await axios.get(`https://api.goperigon.com/v1/all?apiKey=${process.env.apikey}&country=${country}&from=2024-07-25&to=2024-07-30`);
        res.render('news', { country, articles: newsAPI.data.articles });
    } catch (err) {
        console.error('Error fetching news:', err);
        res.status(500).send('An error occurred while fetching news');
    }
});
module.exports = newsRouter