const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const listingSchema= new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    image: {
        type: String,
        default: "https://images.hdqwalls.com/wallpapers/gradient-texture-abstract-4k-ar.jpg",
        set:(v)=> v===" "?
        "https://images.hdqwalls.com/wallpapers/gradient-texture-abstract-4k-ar.jpg"
        : v,
    },
    price: {
        type: Number,
    },
    location: {
        type: String,
    },
    country: {
        type: String
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ]
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports=Listing;