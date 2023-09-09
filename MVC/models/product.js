// const products = [];
// we used file method instead of just storing value in Array 
const fs = require('fs');
const path = require('path');

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        // products.push(this);
        const p = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            'products.json'
        );

        fs.readFile(p,(err,fileContent) =>{ //use her arrow type otherwise 'this' is not work here
            // console.log(err);
            let products = [];
            if( !err ){
                products = JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(p,JSON.stringify(products), (err)=>{ //convert object data to json string
                console.log(err);
            }); 

        })
    }

    static fetchAll(cb) {  //this works on uding fetch

        const p = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            'products.json'
        );

        // return products;
        fs.readFile(p,(err,fileContent)=>{ //this function behave asynchronous (callback)
            if(err){
                cb([]);
            }
            cb(JSON.parse(fileContent)); //Converts a JavaScript Object Notation (JSON) string into an object.
        })
    }
}

///--> in callbacks what behind the scenes happen - 
//  ===>  so callback function are only created initially and the parent function 
//        where it calls is ended, so initially what we write in call back does not happen.
//        it happen after some time. that's why above callback function return undefind instead of [] 