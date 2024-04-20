const express = require('express')
const { Client } = require('pg');
const app = express()
const port = 8080

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'testmenumaker',
    password: '123',
    port: 5432,
  });
  
  app.use(express.json());
  client.connect();
 
  async function dropShema() {
    try {
      //удаление данных из бд
      await client.query("BEGIN");
      var query = `
        DROP TABLE IF EXISTS users CASCADE;
        DROP TABLE IF EXISTS fridge CASCADE;
        DROP TABLE IF EXISTS product CASCADE;
        DROP TABLE IF EXISTS fridgehasproduct CASCADE;
      `;
  
      await client.query(query);
      console.log('tables deleted');
      await client.query("COMMIT");
    } catch (err) {
      console.error(err);
      console.error('drop of shema failed');
      await client.query("ROLLBACK");
    }
  }

 async function createUsersTable() {
  try {
    //добавление таблицы Пользователь
    await client.query("BEGIN");
    var query = `
      CREATE TABLE IF NOT EXISTS users (
          id SERIAL UNIQUE,
          login VARCHAR(255) NOT NULL UNIQUE,
          password VARCHAR(255) NOT NULL,
          name VARCHAR(255),
          surname VARCHAR(255),
          age INTEGER,
          height DECIMAL,
          weight DECIMAL,
          activity_level INTEGER,
          sex INTEGER,
          PRIMARY KEY(id, login)
      );
    `;

    await client.query(query);
    console.log('Users table created');
    await client.query("COMMIT");
  } catch (err) {
    console.error(err);
    console.error('Users table creation failed');
    await client.query("ROLLBACK");
  }
}
  
async function createFridgeTable() {
  try {
    await client.query("BEGIN");
    //добавление таблицы Холодильник
    var query = `
      CREATE TABLE IF NOT EXISTS fridge (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL, 
        FOREIGN KEY (user_id) REFERENCES users (id)
      );
    `;

    await client.query(query);
    console.log('Fridge table created');
    await client.query("COMMIT");
  } catch (err) {
    console.error(err);
    console.error('Fridge table creation failed');
    await client.query("ROLLBACK");
  }
}

async function createProductTable() {
  try {
    await client.query("BEGIN");
    //добавление таблицы Продукт
    var query = `
      CREATE TABLE IF NOT EXISTS product (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        caloricity DECIMAL,
        category_id INTEGER,
        category_name VARCHAR(255),
        category_min INTEGER,
        category_max INTEGER
      );
    `;

    await client.query(query);
    console.log('Product table created');
    await client.query("COMMIT");
  } catch (err) {
    console.error(err);
    console.error('Product table creation failed');
    await client.query("ROLLBACK");
  }
}

async function createfridgehasproductTable() {
  try {
    await client.query("BEGIN");
    //добавление таблицы Холодильник_имеет_продукты
    var query = `
      CREATE TABLE IF NOT EXISTS fridgehasproduct (
        fridge_id INTEGER,
        product_id INTEGER,
        gramms INTEGER, 
        FOREIGN KEY (fridge_id) REFERENCES fridge (id),
        FOREIGN KEY (product_id) REFERENCES product (id)
      );
    `;

    await client.query(query);
    console.log('fridgehasproduct table created');
    await client.query("COMMIT");
  } catch (err) {
    console.error(err);
    console.error('fridgehasproduct table creation failed');
    await client.query("ROLLBACK");
  }
}


async function UpdateUsersTable() {
  try {
    await client.query("BEGIN");
    //добавление данных в таблицу Пользователи
    var query = `
      INSERT INTO users  (login, password, name, surname, age, height, weight, activity_level, sex)
      VALUES ('root', 'root', 'root', 'rootov', 21, 164, 45, 1, 0);
    `;

    await client.query(query);
    console.log('Users table updated');
    await client.query("COMMIT");
  } catch (err) {
    console.error(err);
    console.error('Users table updation failed');
    await client.query("ROLLBACK");
  }
}



async function UpdateFridgeTable() {
  try {
    await client.query("BEGIN");
    //добавление данных в таблицу Холодильник
    var query = `
      INSERT INTO fridge  (user_id)
      VALUES (1);
    `;

    await client.query(query);
    console.log('Fridge table updated');
    await client.query("COMMIT");
  } catch (err) {
    console.error(err);
    console.error('Fridge table updation failed');
    await client.query("ROLLBACK");
  }
}


  
async  function UpdateProductTable() {
  try {
    await client.query("BEGIN");
    //добавление данных в таблицу Продукт
    var query = `
      INSERT INTO product  (name, caloricity, category_id, category_name, category_min, category_max)
      VALUES ('Овсянка', 68, 1, 'Каши', 50, 200);

      INSERT INTO product  (name, caloricity, category_id, category_name, category_min, category_max)
      VALUES ('Греча', 343, 2, 'Крупы', 50, 200);

      INSERT INTO product  (name, caloricity, category_id, category_name, category_min, category_max)
      VALUES ('Рис', 360, 2, 'Крупы', 50, 200);

      INSERT INTO product  (name, caloricity, category_id, category_name, category_min, category_max)
      VALUES ('Курица вареная', 170, 3, 'Мясо/рыба', 50, 300);

      INSERT INTO product  (name, caloricity, category_id, category_name, category_min, category_max)
      VALUES ('Яблоко', 52, 4, 'Фрукты', 50, 200);

      INSERT INTO product  (name, caloricity, category_id, category_name, category_min, category_max)
      VALUES ('Банан', 89, 4, 'Фрукты', 50, 200);

      INSERT INTO product  (name, caloricity, category_id, category_name, category_min, category_max)
      VALUES ('Апельсин', 48, 4, 'Фрукты', 50, 200);

      INSERT INTO product  (name, caloricity, category_id, category_name, category_min, category_max)
      VALUES ('Грецкий орех', 654, 5, 'Орехи', 10, 30);
      
      INSERT INTO product  (name, caloricity, category_id, category_name, category_min, category_max)
      VALUES ('Кешью', 553, 5, 'Орехи', 10, 30);

      INSERT INTO product  (name, caloricity, category_id, category_name, category_min, category_max)
      VALUES ('Бородинский хлеб', 259, 6, 'Мучное', 10, 30);

      INSERT INTO product  (name, caloricity, category_id, category_name, category_min, category_max)
      VALUES ('Хлебцы', 366, 6, 'Мучное', 10, 30);

      INSERT INTO product  (name, caloricity, category_id, category_name, category_min, category_max)
      VALUES ('Кефир', 40, 7, 'Молочные продукты', 50, 200);

      INSERT INTO product  (name, caloricity, category_id, category_name, category_min, category_max)
      VALUES ('Творог', 159, 7, 'Молочные продукты', 50, 200);

      INSERT INTO product  (name, caloricity, category_id, category_name, category_min, category_max)
      VALUES ('Огурец', 15, 8, 'Овощи', 50, 150);

      INSERT INTO product  (name, caloricity, category_id, category_name, category_min, category_max)
      VALUES ('Помидор', 18, 8, 'Овощи', 50, 150);
    `;

    await client.query(query);
    console.log('Product table updated');
    await client.query("COMMIT");
  } catch (err) {
    console.error(err);
    console.error('Product table updation failed');
    await client.query("ROLLBACK");
  }
}
  
async function UpdatefridgehasproductTable() {
  try {
    await client.query("BEGIN");
    //добавление данных в таблицу Холодильник_имеет_продукты
    var query = `
      INSERT INTO fridgehasproduct (fridge_id, product_id, gramms)
      VALUES (1, 1, 200);

      INSERT INTO fridgehasproduct (fridge_id, product_id, gramms)
      VALUES (1, 2, 300);

      INSERT INTO fridgehasproduct (fridge_id, product_id, gramms)
      VALUES (1, 3, 200);

      INSERT INTO fridgehasproduct  (fridge_id, product_id, gramms)
      VALUES (1, 4, 500);

      INSERT INTO fridgehasproduct  (fridge_id, product_id, gramms)
      VALUES (1, 5, 200);

      INSERT INTO fridgehasproduct  (fridge_id, product_id, gramms)
      VALUES (1, 6, 200);

      INSERT INTO fridgehasproduct  (fridge_id, product_id, gramms)
      VALUES (1, 7, 150);

      INSERT INTO fridgehasproduct  (fridge_id, product_id, gramms)
      VALUES (1, 8, 40);

      INSERT INTO fridgehasproduct  (fridge_id, product_id, gramms)
      VALUES (1, 9, 50);

      INSERT INTO fridgehasproduct  (fridge_id, product_id, gramms)
      VALUES (1, 10, 300);

      INSERT INTO fridgehasproduct  (fridge_id, product_id, gramms)
      VALUES (1, 11, 150);

      INSERT INTO fridgehasproduct  (fridge_id, product_id, gramms)
      VALUES (1, 12, 1000);

      INSERT INTO fridgehasproduct  (fridge_id, product_id, gramms)
      VALUES (1, 13, 500);

      INSERT INTO fridgehasproduct  (fridge_id, product_id, gramms)
      VALUES (1, 14, 200);

      INSERT INTO fridgehasproduct  (fridge_id, product_id, gramms)
      VALUES (1, 15, 200);
    `;

    await client.query(query);
    console.log('fridgehasproduct table updated');
    await client.query("COMMIT");
  } catch (err) {
    console.error(err);
    console.error('fridgehasproduct table updation failed');
    await client.query("ROLLBACK");
  }
}

 async function main(){
  dropShema();
  createUsersTable();
  UpdateUsersTable();
  
  createFridgeTable();
  UpdateFridgeTable();
  
  createProductTable();
  UpdateProductTable();
  
  createfridgehasproductTable();
  UpdatefridgehasproductTable();
}

main();

app.post('/users/add', async (req, res) => {
  // Validate the incoming JSON data
  const { login, password, name, surname, age, height, weight, activity_level, sex } = req.body;
  console.log(req.body);
  if (!login || !password ) {
    return res.status(400).send('One of the login or password is missing in the data');
  }

  try {
   
    await client.query("BEGIN");
    // try to send data to the database
    const query = `
    INSERT INTO users (login, password, name, surname, age, height, weight, activity_level, sex)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    RETURNING id;
    `;
    const values = [ login, password, name, surname, age, height, weight, activity_level, sex ];

    const result = await client.query(query, values);
    console.log(result.id);
    
    await client.query("COMMIT");
    res.status(201).send({ message: 'New user created', UserId: result.rows[0].id });
  } catch (err) {
    console.error(err);
    res.status(500).send('error: this login is already in use');
    await client.query("ROLLBACK");
  }
});

app.get('/users/getin', async (req, res) => {
  const { login, password } = req.body;
  console.log(req.body);
  if (!login || !password ) {
    return res.status(400).send('One of the login or password is missing in the data');
  }
  try {
    await client.query("BEGIN");
    const query = 
    'SELECT password FROM users WHERE login = $1;';
    const values = [ login, password ];
    const { rows } = await client.query(query, [login]);
    if (rows[0].password == password){
      return res.status(200).send({ message: 'Access accepted.' });
    }
    else{
        return res.status(404).send('This user is not in the database');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('error');
  }
});



app.listen(port, () => {
  console.log(`Аpp is listening on port ${port}`)
})