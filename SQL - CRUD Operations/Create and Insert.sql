-- Create Products Table
CREATE TABLE products (
    id INT NOT NULL,
    name STRING,
    price MONEY,
    PRIMARY KEY (id)
);

-- Add complete product
INSERT INTO products
VALUES (1, "Pen", 1.20);

-- Add product without price
INSERT INTO products (id, name)
VALUES (2, "Pencil");