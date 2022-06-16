const { sum, mul, sub, div } = require('../math')


describe('Test de operciones matemáticas', ()=>{

    describe('Test de sumas', () => {

        test('Adding 1 + 1 equals 2', () => {
            expect(sum(1, 1)).toBe(2)
        })
        test('Adding 1 + 1 does not equals 3', () => {
            expect(sum(1, 1)).not.toBe(3)
        })
    
        test('Adding 1 + "1" equals 11', () => {
            expect(sum(1, '1')).toBe("11")
        })

    })

    test('Multiplying 1 * 1 equals 1', () => {
    expect(mul(1, 1)).toBe(1)
    })
    test('Subtracting 1 - 1 equals 0', () => {
    expect(sub(1, 1)).toBe(0)
    })

    describe('Test de divisiones', ()=>{

        test('Dividing 1 / 1 equals 1', () => {
        expect(div(1, 1)).toBe(1)
        })
        test('Dividing `string` / `strong`', () =>{
        expect(div('string', 'strong')).toBe(NaN)
        })

    })

 



})

