import { MongoClient } from "mongodb";
import bcrypt from 'bcryptjs';
import User from "@/models/user";


export default async function handler(req, res) {
  console.log('in signup handler')
  if(req.method === 'POST'){
    const data = req.body;

    const client = await MongoClient.connect(process.env.MONGO_CONNECTION_URL);
    const db = client.db('data-visualization-dashboard');

    const users = db.collection('users');
    console.log(users)
    try{
      
      const userExists = await users.findOne({email : data.email});
      if(userExists){
          res.status(400).json({message: 'Email already exists.'})
      } else {
        const hashedPw = await bcrypt.hash(data.password, 12);
        const user = new User({
          name: data.name,
          email: data.email,
          password: hashedPw,
        });
        const result = await users.insertOne(user);
        res.status(200).json({ message: 'User created!'});
      }

    } catch(err){
      console.error(err);

    }
   
    client.close();
  }
}
