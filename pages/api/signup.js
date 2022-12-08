import connection from '../../Database/connect'
import { userModel } from "../../Database/schema";
connection()

export default function handler(req, res){
   if(req.method == "GET"){
        res.send("Hello world!");
   }
   else{
     if(req.method == "POST"){
        let form = new userModel(req.body)
        form.save((err)=>{
            if(err){
                res.json({message: "user not saved", status: false})
            }
            else{
                res.json({message: 'user registered successfully', status: true})
            }
        })
    }
}
}