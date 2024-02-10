test("how to use `jest.spyOn()`",
    () => {
        // Create a generic object & method, to be spied on 
        const myObject = {
            myMethod: (arg) => `Value: ${arg}`,
        };

        // Create a spy on `myObject.myMethod`
        const spy = jest.spyOn(myObject, 'myMethod');

        // Call the spied method
        myObject.myMethod("cheese");
        myObject.myMethod("biscuits");

        // Print information captured by the spy
        console.log('`spy.mock`:', spy.mock);

        // Assert that the spy was called
        expect(spy).toHaveBeenCalled();

        // Restore the original implementation of the spied-on function
        // Recommendation: do this between test cases! 
        spy.mockRestore();
    }
);