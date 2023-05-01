const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require("cors")
app.use(cors())
const chefsData=require("./data/chefs.json")
const recipeData=require("./data/recipes.json")
const foodData=require("./data/foodData.json")
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/chefs', (req, res) => {
    res.send(chefsData)
})
app.get('/food', (req, res) => {
    res.send(foodData)
})
app.get('/chefs/:id', (req, res) => {
    const id = req.params.id
    const singlaChefData=chefsData.find(Cdata=>Cdata.chef_recipe_id===id)
    res.send(singlaChefData)
})
app.get('/recipe/:id', (req, res) => {
    const id=req.params.id
    const chefsRecipes=recipeData.filter(recipe=>recipe._recipe_id===id)
    res.send(chefsRecipes)
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})