## Commands Inside Mongosh (CRUD)

- Basic usage

```bash
# Show databases
show dbs

# Create new database
use newDatabaseName

# Get database in which we are currently working
db

# Show collections in current database
show collections
```

- Create (C) data

```bash
# Create data inside collection
# (Collections are similar to tables in SQL)
db.collection.insertOne()

# Insert data for "Pen" and "Pencil" products
db.products.insertOne({_id: 1, name: "Pen", price: 1.20})
db.products.insertOne({_id: 2, name: "Pencil", price: 0.8, stock: 12})
```

- Read (R) data

```bash

db.collection.find(query, projection)

# All products
db.products.find()

# Find products with name "Pencil"
db.products.find({name: "Pencil"})

# Find products with price greater than ($gt) 1
db.products.find({price: {$gt: 1}})

# Return the name (and ID by default) of the products with ID of 1
db.products.find({_id: 1}, {name: 1})

# Return exclusively the name of all products with ID 1
db.products.find({_id: 1}, {name: 1, _id: 0})
```

- Update (U) data

```bash
db.collection.updateOne()
db.collection.updateMany()

# Add a stock value to the "Pen" product (ID = 1) and "Pencil" product (ID = 2)
#   - $set: Set a property of the object
db.products.updateOne({_id: 1}, {$set: {stock: 32}})
db.products.updateOne({_id: 2}, {$set: {stock: 12}})
```

- Delete (D) data

```bash
db.collection.deleteOne()
db.collection.deleteMany()

# Delete the product with ID of 1
db.products.deleteOne({_id: 1})
```

- Data relationships

```bash
# One to many
db.products.insertOne(
  {
    _id: 3,
    name: "Pencil",
    price: 0.8,
    stock: 12,
    reviews: [
      {
        authorName: "Eddy",
        rating: 5,
        review: "Fuck... this pencil good"
      },
      {
        authorName: "Renata",
        rating: 3,
        review: "Too much water"
      }
    ]
  }
)

# Reference other IDs in other collections
{
  _id: 1,
  name: "Pen",
  price: 1.20,
  stock: 32
}
{
  _id: 2,
  name: "Pencil",
  price: 0.8,
  stock: 12
}

{
  orderNumber: 3243,
  productsOrdered: [1,2]   # Referencing IDs
}

```
