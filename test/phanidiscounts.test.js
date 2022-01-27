//We can group tests here in describe -- as a parent
describe("Product Discounts", () => {
    let actualAmount = 0;
    beforeEach(() => {
       actualAmount = 500;
       console.log("Runs only once before all tests of Product Discounts" );
    });
    
    afterEach(() => {
       // actualAmount = 0;
       console.log("Runs only once after all tests of Product Discounts" );
    });
       
    // Nested describes for product discount tests
    describe("Basic Customer Discount Test", () => {
       beforeEach(() => {
          console.log( "Runs before each test for Basic customer" );
       });
    
       // it is used for every one test
       test("Is return 50 discount amount when basic customer discount is 10 percent for amount 500", () => {
          expect(actualAmount/10).toEqual(50);
       });
    
       test("Is return 52 discount amount when basic customer discount is 10 percent for amount 500 plus promotion discount of 2", () => {
          expect(actualAmount/10 + 2).toEqual(52);
       });
    });
    
    describe("Intermediate Customer Discount Test", () => {
       beforeEach(() => {
          console.log( "Runs before each test for Intermediate Customer" );
       });
    
       // it is used for every one test
       test("Is return 33.33 discount amount when intermediate customer discount is 15 percent for amount 500", () => {
          let amount = Number((actualAmount/15).toFixed(2));
          expect(amount).toEqual(33.33);
       });
    
       test("Is return 35.33 discount amount when intermediate customer discount is 15 percent for amount 500 plus promotion of 2 percent", () => {
        let amount = Number((actualAmount/15).toFixed(2)) + Number(2);  
        expect(amount).toEqual(35.33);
       });
    });
    
    describe("Advanced Customer Discount Test", () => {
       beforeEach(() => {
          console.log( "Runs before each test for Advanced Customer" );
       });
    
       // it is used for every one test
       test("Is return 25 discount amount when advanced customer discount is 20 percent for amount 500", () => {
          let amount =  Number((actualAmount/20).toFixed(2));
          expect(amount).toEqual(25);
       });
    
       test("Is return 27 discount amount when advanced customer discount is 20 percent for amount 500 plus promotion discount of 2", () => {
          let amount = Number((actualAmount/20).toFixed(2)) + Number(2);
          expect(amount).toEqual(27);
       });
    });
    });