import { connection } from './index';

export const all = async () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * from unicorn', (err, results) => {
            if (err) {
                console.log(err);
                return reject(err);
            }
            resolve(results);
        });
    })
};

export default {
    all
}