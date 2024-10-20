import { MongoClient } from "mongodb";
import bcrypt from 'bcryptjs';


export default async function handler(req, res) {
  
    const data = req.body;
    
    const client = await MongoClient.connect(process.env.MONGO_CONNECTION_URL);
    const db = client.db('data-visualization-dashboard');
    console.log(db)

    const users = db.collection('users');

    try{
        const user = await users.findOne({email : data.email});
        if(!user){
          res.status(400).json({message: 'Please enter valid credentials.'})
        }
        const isEqual = await bcrypt.compare(data.password, user.password);
        if(!isEqual){
            res.status(400).json({message: 'Incorrect password.'})
        }

        res.status(200).json({message: 'Login successful', userId: user._id});
    }catch(err){
        console.error(err);
    }
   
    client.close();
 
}
