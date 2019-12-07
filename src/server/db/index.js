import mysql from 'mysql';
import config from '../config/dbconfig';
import unicorns from './unicorn';

export const connection = mysql.createConnection(config.mysql);


connection.connect(err => {
    if (err) console.log(err);
});

export default {
    unicorns
}