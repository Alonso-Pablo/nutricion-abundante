const Database = require('../../../database/db');

const db = new Database()

const getProducts = async (req, res) => {
  
  if (req.method === 'GET') {
      try {
        const allData = await db.getAll()
        res.status(200).send({
          "statusCode": 200,
          data: allData 
        });
      } catch (e) {
        console.error(e)
        res.status(500).send({
          "statusCode": 500,
          "data": 'Something went wrong'
        });
    }
  } else {
    res.status(409).json({
      "statusCode": 405,
      "data": 'Method Not Allowed'
    });
  }

}

export default getProducts

