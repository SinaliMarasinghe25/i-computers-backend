
import express from "express"
import mongoose from "mongoose"
import userRouter from "./routes/userRouter.js"
import jwt from "jsonwebtoken"
import productRouter from "./routes/productRouter.js"


const mongoURI="mongodb+srv://adminone:123@cluster0.xzkhzpz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(mongoURI).then(
    ()=>{
    console.log("Connected to MongoDB Cluster")
}
)

const app =express()

//middleware
app.use(express.json())

//middleware for encryption
app.use((req,res,next)=>{

//checking for token from authorization header
const authorizationheader = req.header("Authorization")

if(authorizationheader !=null){

    const token = authorizationheader.replace("Bearer ", "")

    console.log(token) //token without bearer because we dont need bearer if its there it wont decrypt

    jwt.verify(token , "secretKey96$2025",
    (error,content)=>{

        if(content == null){
            console.log("invalid token")
            res.json({
                            message : "invalid token"
                        })

        }else{
             req.user = content

                        next()

        }
}
        
        
    
)


}else {

//console.log(authorizationheader) //token with bearer added

next()  //function used to pass to next



}
}
)



//app.get("/", (req, res)=>{

//    Student.find().then(
    
//    (students)=>{
//        res.json(students)

//    }
//)
 
//})

//app.post("/", (req,res)=>{
    //read request
//    console.log(req.body)
    //create a student in the student collection
//    const student = new Student(req.body)
//    student.save()
  

//})


//app.delete("/", (req,res)=>{
//    res.json({
//        message : "Goodbye "+ req.body.name
//    })
//})

   
//connecting students department to main localhost:5000 or 3000

app.use("/users", userRouter)  
app.use("/products", productRouter) 
app.listen( 3000, ()=>{console.log("server running")})
