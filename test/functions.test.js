const {addProductToArray} = require('../js/app.js');

describe("Karam", () => {
    // Test Add Product Function
    test("Should Return Product Object on Array", ()=> {
        let actual = addProductToArray("Men Watch", "Hello World", "15", "https://google.com", "Watch");
        let expected = [
            {
                id: Date.now(),
                name: "Men Watch", 
                desc: "Hello World",
                price: "15",
                img: "https://google.com",
                category: "Watch"
            }
        ];
    
        expect(actual).toEqual(expected);
    });




});