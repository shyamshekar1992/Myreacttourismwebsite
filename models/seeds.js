const Myplaces = require("./project");
const mongoose = require('mongoose');


const Places = [
    { name: 'Berlin', description: 'asdaksjdjkasndkjasn', smalldescription: 'ss', code: '2950158', likes: 1, reviews: [""], price: 1000, img: 'https://i.imgur.com/CFgX3Xx.png', room: false, type: 1 },
    { name: 'Munich', description: ' asdksaldasl', smalldescription: 'ss', code: '2867714', reviews: [""], likes: 1, price: 100, img: 'https://i.imgur.com/CFgX3Xx.png', room: false, type: 1 },
    { name: 'Amesterdam', description: 'asdksakldn', smalldescription: 'ss', code: '3376762', reviews: [""], likes: 1, price: 800, img: 'https://i.imgur.com/CFgX3Xx.png', room: false, type: 1 },
    { name: 'Frankfurt', description: 'sakjdnkasjnd', smalldescription: 'ss', code: '2925533', reviews: [""], likes: 1, price: 100, img: 'https://i.imgur.com/CFgX3Xx.png', room: false, type: 1 },
    { name: 'Barcelona', description: 'aksdnmkasd', smalldescription: 'ss', code: '3128760', reviews: [""], likes: 1, price: 300, img: 'https://i.imgur.com/CFgX3Xx.png', room: false, type: 1 },
    { name: 'Madrid', description: 'lasdlaskdlask', smalldescription: 's', code: '3675707', reviews: [""], likes: 1, price: 78, img: 'https://i.imgur.com/CFgX3Xx.png', room: false, type: 1 },
    { name: 'Prague', description: 'lasdlaskdlask', smalldescription: 'ss', code: '3067696', reviews: [""], likes: 1, price: 78, img: 'https://i.imgur.com/CFgX3Xx.png', room: false, type: 1 },
    { name: 'Sweden', description: 'lasdlaskdlask', smalldescription: 'ss', code: '2661886', reviews: [""], likes: 1, price: 78, img: 'https://i.imgur.com/CFgX3Xx.png', room: false, type: 1 },
    { name: 'Denmark', description: 'lasdlaskdlask', smalldescription: 'ss', code: '4576544', reviews: [""], likes: 1, price: 78, img: 'https://i.imgur.com/CFgX3Xx.png', room: false, type: 1 },
    { name: 'sydney', description: 'a small cute room', smalldescription: 'ss', code: '4576544', reviews: [""], likes: 1, price: 500, img: 'https://cdn-static-new.uniplaces.com/property-photos/0a689dc33a2e79f4a1332dfd5b10f4dd17bb79e5843cacf379633aa4114a1223/small.jpg', room: true, type: 1 },
    { name: 'newyork', description: 'a small cute room', smalldescription: 'ss', code: '4576544', reviews: [""], likes: 1, price: 500, img: 'https://cdn-static-new.uniplaces.com/property-photos/0a689dc33a2e79f4a1332dfd5b10f4dd17bb79e5843cacf379633aa4114a1223/small.jpg', room: true, type: 2 },
    { name: 'chennai', description: 'a small cute mini room', smalldescription: 'ss', code: '4576544', reviews: [""], likes: 1, price: 670, img: 'https://cdn-static-new.uniplaces.com/property-photos/0a689dc33a2e79f4a1332dfd5b10f4dd17bb79e5843cacf379633aa4114a1223/small.jpg', room: true, type: 3 }



];


const DB_NAME = 'projects-and-tasks';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

Myplaces.create(Places)