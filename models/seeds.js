const Myplaces = require("./project");
const mongoose = require('mongoose');


const Places = [
    { name: 'Berlin', region: "europe", description: 'asdaksjdjkasndkjasn', smalldescription: 'A very nice place in europe', code: '2950158', likes: 1, reviews: [""], price: 1000, img: 'https://i.imgur.com/CFgX3Xx.png', room: false, type: 1 },
    { name: 'Munich', region: "europe", description: ' asdksaldasl', smalldescription: 'A very nice place', code: '2867714', reviews: [""], likes: 1, price: 100, img: 'https://i.imgur.com/CFgX3Xx.png', room: false, type: 1 },
    { name: 'Amesterdam', region: "europe", description: 'asdksakldn', smalldescription: 'A very nice place', code: '3376762', reviews: [""], likes: 1, price: 800, img: 'https://i.imgur.com/CFgX3Xx.png', room: false, type: 1 },
    { name: 'Frankfurt', region: "europe", description: 'sakjdnkasjnd', smalldescription: 'A very nice place', code: '2925533', reviews: [""], likes: 1, price: 100, img: 'https://i.imgur.com/CFgX3Xx.png', room: false, type: 1 },
    { name: 'Dubai', region: "Middleeast", description: 'aksdnmkasd', smalldescription: 'A very nice place in middle east', code: '3128760', reviews: [""], likes: 1, price: 300, img: 'https://i.imgur.com/CFgX3Xx.png', room: false, type: 1 },
    { name: 'Abhudhabi', region: "Middleeast", description: 'lasdlaskdlask', smalldescription: 'A very nice place middle east', code: '3675707', reviews: [""], likes: 1, price: 78, img: 'https://i.imgur.com/CFgX3Xx.png', room: false, type: 1 },
    { name: 'Quatar', region: "Middleeast", description: 'lasdlaskdlask', smalldescription: 'A very nice place middle east', code: '3067696', reviews: [""], likes: 1, price: 78, img: 'https://i.imgur.com/CFgX3Xx.png', room: false, type: 1 },
    { name: 'Southafrice', region: "africa", description: 'lasdlaskdlask', smalldescription: 'A very nice place africa', code: '2661886', reviews: [""], likes: 1, price: 78, img: 'https://i.imgur.com/CFgX3Xx.png', room: false, type: 1 },
    { name: 'Trinidad', region: "africa", description: 'lasdlaskdlask', smalldescription: 'A very nice place africa', code: '4576544', reviews: [""], likes: 1, price: 78, img: 'https://i.imgur.com/CFgX3Xx.png', room: false, type: 1 },
    { name: 'Chennai', region: "india", description: 'a small cute room', smalldescription: 'A very nice place in india', code: '4576544', reviews: [""], likes: 1, price: 500, img: 'https://cdn-static-new.uniplaces.com/property-photos/0a689dc33a2e79f4a1332dfd5b10f4dd17bb79e5843cacf379633aa4114a1223/small.jpg', room: true, type: 1 },
    { name: 'Mumbai', region: "india", description: 'a small cute room', smalldescription: 'A very nice place in india', code: '4576544', reviews: [""], likes: 1, price: 500, img: 'https://cdn-static-new.uniplaces.com/property-photos/0a689dc33a2e79f4a1332dfd5b10f4dd17bb79e5843cacf379633aa4114a1223/small.jpg', room: true, type: 2 },
    { name: 'Bangalore', region: "india", description: 'a small cute mini room', smalldescription: 'A very nice place india', code: '4576544', reviews: [""], likes: 1, price: 670, img: 'https://cdn-static-new.uniplaces.com/property-photos/0a689dc33a2e79f4a1332dfd5b10f4dd17bb79e5843cacf379633aa4114a1223/small.jpg', room: true, type: 3 },



];


const DB_NAME = 'projects-and-tasks';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

Myplaces.create(Places)