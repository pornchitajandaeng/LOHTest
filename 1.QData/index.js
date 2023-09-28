const express = require('express')
const app = express()
const port = 3001
require('dotenv').config()

const mongoose = require('mongoose');


var url = process.env.MONGODB_URI;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => {
                console.log('Connected to MongoDB Atlas');
            })
            .catch((err) => {
                console.error('Error connecting to MongoDB Atlas:', err);
            });


app.get('/', (req, res) => {
    res.send('Hello Wan ja!')
})


app.get('/navigations', (req, res) => {

    //var url = "mongodb+srv://lohtester:MLjU7nEYl3Ek50NH@cluster0.tz5piwv.mongodb.net/";
    

    // Define the schema for the "navigation" collection
    const navigationSchema = new mongoose.Schema({
        // Define your schema fields here based on your collection structure
        // For example:
        id: Number,
        key: String,
        name: String,
        type: String,
        icon: String,
        navigation_id: Number,
        comment: String,
        sequence: Number,
        active: Boolean
    });

    // Create a Mongoose model for the "navigation" collection
    const Navigation = mongoose.models.Navigations || mongoose.model('Navigations', navigationSchema);

    // Using async/await
    async function queryNavigation() {
        
        try {
            
            const navigationData = await Navigation.find({}).limit(10) ;
            console.log('Navigation data:', navigationData);
            res.send(navigationData);
        } catch (error) {
            console.error('Error querying navigation collection:', error);
        } finally {
            // Close the database connection
            //mongoose.connection.close();
        }
    }

    queryNavigation();
})

app.get('/webcategories', (req, res) => {
    //    var url = "mongodb+srv://lohtester:MLjU7nEYl3Ek50NH@cluster0.tz5piwv.mongodb.net/";

    // Define the schema for the "webcategories" collection
    const webcategoriesSchema = new mongoose.Schema({
        // Define your schema fields here based on your collection structure
        // For example:
        id: Number,
        title_th: String,
        title_en: String,
        parent_id: Number,
        link: String,
        image: String,
        status: String,
        sequence: Number
    });

    // Create a Mongoose model for the "Webcategories" collection
    const Webcategories = mongoose.models.web_categories || mongoose.model('web_categories', webcategoriesSchema);

    // Using async/await
    async function queryWebcategories() {
   
        try {
            const webcategoriesData = await Webcategories.find({}).limit(10) ;
            console.log('Webcategories data:', webcategoriesData);
            res.send(webcategoriesData);
        } catch (error) {
            console.error('Error querying webcategories collection:', error);
        } finally {
            // Close the database connection
            // mongoose.connection.close();
        }
    }

    queryWebcategories();
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


