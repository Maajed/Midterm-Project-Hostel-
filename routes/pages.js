const express = require("express");
const router = express.Router();


router.get("/",(req,res)=>{
    res.render("login")
})

router.get("/register",(req,res)=>{
    res.render("register")
})

router.get("/profile",(req,res)=>{
    res.render("profile")
})

router.get("/home",(req,res)=>{
    res.render("home")
})

router.get("/admin",(req,res)=>{
    res.render("admin")
})
router.get("/checkin",(req,res)=>{
    res.render("checkin")
})
router.get("/checkout",(req,res)=>{
    res.render("checkout")
})
router.get("/maintenance",(req,res)=>
{
    res.render("maintenance");
})
router.get("/adminMaintenance",(req,res)=>{
    res.render("adminMaintenance")
})

router.get("/adminCheckin",(req,res)=>{
    res.render("adminCheckin")
})

router.get("/adminCheckout",(req,res)=>{
    res.render("adminCheckout")
})

router.get("/adminUsers",(req,res)=>{
    res.render("adminUsers")
})



module.exports = router;