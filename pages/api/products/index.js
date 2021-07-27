// import {Database} from '../../../database/db';
const Database = require('../../../database/db');

const db = new Database();

const Server = async (req, res) => {
  
  if (req.method === 'GET') {
      try {
        const allData = await db.getAll();
        res.status(200).send({ data: allData });
      } catch (e) {
        console.error(e);
        res.status(500).send({ data, error: 'Something went wrong' });
    }
  } else {
    res.status(404).send({ data, error: 'Something went wrong...' });
  }

}

export default Server