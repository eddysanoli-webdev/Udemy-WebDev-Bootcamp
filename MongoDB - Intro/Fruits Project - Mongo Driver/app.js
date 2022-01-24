// Dependencies
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// Connection URL
// (Make sure to add the corresponding credentials)
const url = "mongodb://test:test123@localhost:27017";

// Database name
// (Similar to using "fruitsDB")
const dbName = "fruitsDB";

// Create a new Mongo Client
const client = new MongoClient(url, {useNewUrlParser: true});

// Use connect method to connect to the server
client.connect( (err) => {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    // Get database
    const db = client.db(dbName);

    /*
    // Insert data and then disconnect
    insertDocuments(db, () => {
        client.close();
    })
    */

    // Find all the existing data in the database
    findDocuments(db, () => {
        client.close();
    })

});

// Insert a document
const insertDocuments = (db, callback) => {

    // Get the documents collection
    const collection = db.collection("fruits"); 

    // Insert some documents
    // (Similar to "db.fruits.insert()")
    collection.insertMany ([
        {
            name: "Apple",
            score: 8,
            review: "Great fruit"
        },
        {
            name: "Orange",
            score: 6,
            review: "Kinda sour"
        },
        {
            name: "Banana",
            score: 9,
            review: "Great stuff!"
        }
    ], (err, result) => {

        // Make sure we inserted 3 documents
        assert.equal(err, null);
        //assert.equal(3, result.result.n);
        //assert.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the collection");
        callback(result);
    });

};

// Show data (find documents)
const findDocuments = function(db, callback) {

    // Get document collection
    const collection = db.collection("fruits");

    // Find some documents
    collection.find({}).toArray( (err, fruits) => {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(fruits);
        callback(fruits);
    })
}