-- Create customers table
CREATE TABLE customers (
    id INT NOT NULL,
    first_name STRING,
    last_name STRING,
    adress VARCHAR(25),
    PRIMARY KEY (id)
);

-- Create products table
CREATE TABLE products (
    id INT NOT NULL,
    name STRING,
    price MONEY,
    stock INT
);

-- Add products
INSERT INTO products
VALUES (1, "Pen", 1.20, 32);

INSERT INTO products
VALUES (2, "Pencil", 0.8, 12);

-- Create order table
CREATE TABLE orders (
    id INT NOT NULL,
    order_number INT,
    customer_id INT,
    product_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (customer_id) REFERENCES customers(id),
    FOREIGN KEY (product_id) REFERENCES products(id),
);

-- Add orders
INSERT INTO orders 
VALUES (1, 4362, 2, 1);
INSERT INTO orders
VALUES (2, 3254, 1, 1);


-- Join multiple tables
SELECT
    orders.order_number,
    customers.first_name,
    customers.last_name, 
    customers.address,
    products.name,
    products.price,
    products.stock
FROM orders
INNER JOIN products ON orders.product_id = product.id
INNER JOIN customers ON orders.customer_id = customers.id;