import csv from "csv-parser";
import fs from 'fs';
import path from "path";
import { fileURLToPath } from "url";



export default async function handler(req, res) { 
    if(req.method === 'GET'){
    try{
    
        // const __filename = fileURLToPath(import.meta.url);
        // const __dirname = path.dirname(__filename);
        // const filePath = path.resolve(__dirname, "../../util/data.csv");
        const filePath = path.join(process.cwd(), 'public', 'data.csv')

            const data = [];
            await fs.createReadStream(filePath)
            .pipe(csv())
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
