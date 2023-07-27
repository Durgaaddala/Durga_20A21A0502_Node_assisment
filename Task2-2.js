const { connection, createDatabase, createTable } = require('./Task2-2');

const databaseName = 'employees';

createDatabase(databaseName);

connection.end((error) => {
  if (error) throw error;
  console.log('MySQL connection closed.');
});