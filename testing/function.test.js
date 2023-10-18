const {returnTwo, greeting, add, multiply, divide, subtract} = require('./function')

test ('function returnTwo should return 2', () => expect(returnTwo()).toEqual(2))

test ('greeting should return Hello name', () => expect(greeting('James')).toEqual('Hello James'))


describe ('Math functions tests', () => {

    test('add function should return the sum of num1 and num2', () => expect(add(1,2)).toBe(3))

    test('multiply function should return 1*2 = 2', () => {
        expect(multiply(1,2)).toBe(2)
    })

    test('divide function should return 4/2 = 2', () => {
        expect(divide(4,2)).toEqual(2)
    })

    test('subtract function should return 2-1 = 1', () => {
        expect(subtract(2,1)).toEqual(1)
    })

})

