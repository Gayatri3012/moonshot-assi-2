import csvParser from "csv-parser";
import fs from 'fs';

export default async function handler(req, res) { 
    if(req.method === 'GET'){
    try{
            const data = [];
            await fs.createReadStream('src/util/data.csv')
            .pipe(csvParser())
            .on('data', (row) => data.push(row))
            .on('end', () => {
                res.status(200).json(data);
            })
        }catch(err){
            console.error(err);
            res.status(500).json({error: 'Failed to fetch data'})
        }
    }
   
  
}
