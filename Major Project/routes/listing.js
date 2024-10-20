const express=require("express");
const router=express.Router();
const Listing=require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const {listingSchema}=require("../schema.js");
const ExpressError=require("../utils/expressError.js");
const {isLoggedIn}=require("../middleware.js");

const validateListing=(req,res,next)=>{
    let {error}=listingSchema.validate(req.body);
    if(error){
        let errMsg=error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else{
        next();
    }
};

//Index route
router.get("/", wrapAsync(async (req, res)=>{
    const allListings=await Listing.find({});
    res.render("listings/index.ejs", {allListings});
}));

//New route 
router.get("/new",isLoggedIn, (req, res)=>{
    res.render("listings/new.ejs");
});

//show route
router.get("/:id", wrapAsync(async (req, res)=>{
    let {id}=req.params;
    const listing= await Listing.findById(id).populate("reviews").populate("owner");
    if(!listing){
        req.flash("error", "listing you requested for does not exist");
        res.redirect("/listings");
    }
    res.render("listings/show.ejs", {listing});
}));

//create route
router.post("/", isLoggedIn, validateListing, wrapAsync(async (req, res)=>{
    const newListing=new Listing(req.body.listing);
    newListing.owner=req.user._id
    await newListing.save();
    req.flash("success","New Listing is created!");
    res.redirect("/listings");
}));

//Edit route
router.get("/:id/edit", isLoggedIn, wrapAsync(async (req, res)=>{
    let {id}=req.params;
    const listing = await Listing.findById(id);
    
    if(!listing){
        req.flash("error", "Listing you requested for does not exist");
        res.redirect("/listings");
    }
    console.log(listing);
    res.render("listings/edit.ejs", {listing});
}));

//Update route
router.put("/:id", isLoggedIn, validateListing, wrapAsync(async (req, res)=>{
    let {id}=req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing}); // here in req.body.listing listing represents the name of various input in update form
    req.flash("success", "Listing Updated");
    res.redirect(`/listings/${id}`);
}));

//Delete route
router.delete("/:id", isLoggedIn, wrapAsync(async (req, res)=>{
    let {id}=req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success","Listing Deleted");
    res.redirect("/listings");
}));

module.exports=router;