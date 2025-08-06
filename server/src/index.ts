import db from '../src/config/db.js';

async function getUsers() {
  try {
    const result = await db.query('SELECT * FROM users');
    console.log(result.rows);
  } catch (err) {
    console.error('Error executing query', err);
  }
}

getUsers();
