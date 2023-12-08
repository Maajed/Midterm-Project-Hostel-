const mysql = require("mysql");
const bcrypt = require("bcryptjs");

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
});


exports.login = async(req,res) =>{
    try{
        const email = req.body.email;
        const password = req.body.password;
        if(!email || !password)
        {
            return res.status(400).render("login", {
                msg:"Please Enter your Email and Password",
                msg_type:"error",
            });
        }

        
        else if(email==="admin@gmail.com" && password==="admin")
        {
            res.status(200).redirect("/admin");
        }

        db.query('select * from users where email=?',
        [email],
        async(error,result)=>
        {
            
            console.log(result)
            if(result.length<=0)
            {
                return res.status(401).render("login", {
                    msg:"Please Enter Your Email and Password ",
                    msg_type:"error",
                });
            }

            else
            {
                if(!(await bcrypt.compare(password, result[0].Password)))
                {
                    return res.status(401).render("login", {
                        msg:"Please Enter Your Email and Password ",
                        msg_type:"error",
                    });
                }

                
                
                else
                {
                    res.status(200).redirect("/home");
                }
                
            

            }

        
        })

    } catch(error)
    {
        console.log(error);
    }
}





exports.register =(req,res)=>{
    console.log(req.body);
    const ID = req.body.ID
    const Name = req.body.Name;
    const Email = req.body.Email;
    const Password = req.body.Password;
    const Confirm_Password = req.body.Confirm_Password

    db.query('select Email from users where Email =?', [Email], async (error,result)=>
    {
        if(error)
        {
            confirm.log(error)
        }

        if(result.length>0)
        {
            return res.render('register', {msg:'Email is already taken', msg_type:"error" });
        }
        else if(Password!==Confirm_Password)
        {
            return res.render("register", {msg: "Password do not match",msg_type:"error"});
        }
        let hashedPassword = await bcrypt.hash(Password,8);
        console.log(hashedPassword)
        db.query('insert into users set ?', {ID:ID,Name:Name,Email:Email,Password:hashedPassword}),
        (error,result) => {
          if(error){
            console.log(error);
          }  
          else{
            console.log(result);
            return res.render("register", {msg: "User Registeration Success", msg_type:"good"});


          }
        }
    })
}


exports.logout = async (req, res) => {
    res.status(200).redirect("/");
  };


  exports.maintenance = async(req,res)=>
  {
    const Semester = req.body.Semester;
    const Name = req.body.Name;
    const Email = req.body.Email;
    const RoomNumber = req.body.RoomNumber;
    const MaintenanceNeeds = req.body.MaintenanceNeeds


    db.query('insert into maintenance set ?', {Semester:Semester,Name:Name,Email:Email,RoomNumber:RoomNumber,MaintenanceNeeds:MaintenanceNeeds}),
        (error,result) => {
          if(error){
            console.log(error);
          }  
          else{
            console.log(result);
            return res.render("maintenance", {msg: "Maintenance Needs Sent Successfully", msg_type:"good"});


          }
        }
    };



    exports.checkin = async(req,res)=>
  {
    const Semester = req.body.Semester;
    const RoomNumber = req.body.RoomNumber;
    const Name = req.body.Name;
    const Email = req.body.Email;
    const IDNumber = req.body.IDNumber;
    const PhoneNumber = req.body.PhoneNumber;
    const Bed = req.body.Bed.toString();
    const  StudyDesk= req.body.StudyDesk.toString();
    const Other = req.body.Other.toString();
    const Checkin_Date = req.body.Checkin_Date;
    const IssuedKey = req.body.IssuedKey;

    console.log(req.body)
    


    db.query('insert into checkin set ?', {Semester:Semester,RoomNumber:RoomNumber,Name:Name,Email:Email,IDNumber:IDNumber,PhoneNumber:PhoneNumber,Bed:Bed, StudyDesk:StudyDesk,
         Other:Other,Checkin_Date:Checkin_Date,IssuedKey:IssuedKey}),
         (error,result) => {
           if(error){
             console.log(error);
           }  
           else{
             console.log(result);
             return res.render("checkin", {msg: "You Have Checked-In Successfully", msg_type:"good"});


           }
         }
    };


    exports.checkout = async(req,res)=>
    {
      const Semester = req.body.Semester;
      const RoomNumber = req.body.RoomNumber;
      const Name = req.body.Name;
      const Email = req.body.Email;
      const IDNumber = req.body.IDNumber;
      const PhoneNumber = req.body.PhoneNumber;
      const Bed = req.body.Bed.toString();
      const  StudyDesk= req.body.StudyDesk.toString();
      const Other = req.body.Other.toString();
      const Checkout_Date = req.body.Checkout_Date;
      const Key_Returned= req.body.Key_Returned;
  
      console.log(req.body)
      
  
  
      db.query('insert into checkout set ?', {Semester:Semester,RoomNumber:RoomNumber,Name:Name,Email:Email,IDNumber:IDNumber,PhoneNumber:PhoneNumber,Bed:Bed, StudyDesk:StudyDesk,
           Other:Other,Checkout_Date:Checkout_Date,Key_Returned:Key_Returned}),
           (error,result) => {
             if(error){
               console.log(error);
             }  
             else{
               console.log(result);
               return res.render("checkout", {msg: "You Have Checked-out Successfully", msg_type:"good"});
  
  
             }
           }
      };
  

exports.GetRooms = async(req,res) =>{
    db.query('SELECT * FROM rooms',(err,result)=>{
        if(err) throw err;
        console.log(result)
        return res.status(200).send(result)
    })
}

exports.GetMaintenance = async(req,res) =>{
    db.query('SELECT * FROM maintenance',(err,result)=>{
        if(err) throw err;
        console.log(result)
        return res.status(200).send(result)
    })
}


exports.GetCheckin = async(req,res) =>{
  db.query('SELECT * FROM checkin',(err,result)=>{
      if(err) throw err;
      console.log(result)
      return res.status(200).send(result)
  })
}

exports.GetCheckout = async(req,res) =>{
  db.query('SELECT * FROM checkout',(err,result)=>{
      if(err) throw err;
      console.log(result)
      return res.status(200).send(result)
  })
}

exports.GetUsers = async(req,res) =>{
  db.query('SELECT * FROM users',(err,result)=>{
      if(err) throw err;
      console.log(result)
      return res.status(200).send(result)
  })
}

exports.CheckinRoom = async (req,res)=>{
    console.log(req.body)
    const {id,roomNumber,newSpace} = req.body;

    db.query('SELECT Students FROM rooms where RoomNumber = ?',[roomNumber],(err,result)=>{
        if(err) throw err;
        console.log(result[0].Students)
        const StudentRooms = JSON.parse(result[0].Students)
        console.log(StudentRooms)
        StudentRooms.push(id)

        db.query('UPDATE rooms SET Students = ?,Spaces = ? where RoomNumber = ?',[JSON.stringify(StudentRooms),newSpace,roomNumber],(err,resultant)=>{
            if(err) throw err;
            console.log('STUDENTS ROOMS TABLE UPDATED')
        })    

        db.query('UPDATE users SET RoomNumber = ? where ID = ? ',[roomNumber,id],(err,results)=>{
            if(err) throw err;

        })
    })

}