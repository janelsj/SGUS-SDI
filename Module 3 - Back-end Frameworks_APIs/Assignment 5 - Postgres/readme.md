# Introduction to PostgreSQL: Assignment

## Brief

Refer to the ERD (same as lesson).

<img src="./assets/images/car-park-erd.png" />

In the lesson, you have finished:
1. Create drivers table
2. Create vehicles table
3. Create one-to-one relationship between drivers and vehicles.

In this assignment, you will continue to work on:
1. Create car_park table.
2. Create parking_histories table.
3. Create foreign keys to associate:
    - one car_park has zero to many parking_histories
    - one vehicle has zero to many parking-histories

Demonstrate your understanding by inserting SQL Queries related to table creation and foreign key creation below.

You may use `pg_dump` to export your database and include the file in this repository.


```sql
CREATE TABLE car_park (
    id serial PRIMARY KEY, 
    address varchar(500) not null, 
    number_of_slots int not null
    );
INSERT INTO car_park (address, number_of_slots) VALUES ('Blk 209 Ang Mo Kio', 3);
CREATE TABLE parking_histories (
    id serial PRIMARY KEY, 
    vehicle_id int, 
    CONSTRAINT fk_vehicle_id FOREIGN KEY (vehicle_id) REFERENCES vehicles(id), 
    slot_number int not null, 
    car_park_id int, 
    CONSTRAINT fk_car_park_id FOREIGN KEY (car_park_id) REFERENCES car_park(id)
    );
INSERT INTO parking_histories (vehicle_id, slot_number, car_park_id) VALUES (5, 302, 1);
```

## Submission Guidelines

- Cite any relevant sources consulted during your research
- Solve the problems using your own code
- Do not copy and paste solutions from the source material
- Submit your assignment to black board.
