const {addProductToArray} = require('../js/app.js');

describe("Karam", () => {
    test("Should Return Product Object on Array", ()=> {
        let actual = addProductToArray(0, "Men Watch", "Hello World", "15", "https://google.com", "Watch");
        let expected = [
            {
                id: 0,
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