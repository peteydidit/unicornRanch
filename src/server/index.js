import DB from './db';
import express from 'express';
import os from 'os';

const app = express();

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.get('/api/unicorn', async (req, res) => {
    try {
        let unicorns = await DB.unicorns.all();
        res.json(unicorns);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
