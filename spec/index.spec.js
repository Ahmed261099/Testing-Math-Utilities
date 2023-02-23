const index = require("../index");

describe("Testing Math Utilities", () => {
    let positiveValues = [3,4,5];
    let negativeValues = [-5,-6,-7];
    let allValues = [3,4,5,-5,-6,-7];
    let sumOfValues = -6;
  
     
    beforeAll( () => {
        const posVal = index.positive(allValues);
        console.log(posVal);
    });

    beforeEach( () => {
        console.log(allValues)
    });

    afterAll( () => {
        allValues=0;
        negativeValues=0;
        positiveValues=0;
        sumOfValues=0
    });

    afterEach( () => {
        console.log("It's Done")
    });

    it("positive function should equal to positive values", () => {
        expect(index.positive(allValues)).toEqual(positiveValues)
  
    });

    it("sum function should equal to sum of the values", () => {
      expect(index.sum(allValues)).toEqual(sumOfValues)
    });
  
    xit("Check positivity function",function(){
        expect(index.positive(allValues)).toBeFalsy()
    });

  });