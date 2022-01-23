-- Update price of second product
UPDATE products
SET price = 0.8
WHERE id = 2;

-- Add "stock" column with ints
ALTER TABLE products
ADD stock INT

-- Add stock values to "stock" column
UPDATE products
SET stock = 32
WHERE id = 1;

UPDATE products
SET stock = 12
WHERE id = 2;