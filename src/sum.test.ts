import {sum, sub} from "./server";

describe("testes", ()=>{
    let sumResult: number

    beforeAll(()=>{
        sumResult = 3
        console.log("Executado antes de todos os testes", sumResult)
    })

    afterAll(()=>{
        sumResult = 0
        console.log("Executado depois de todos os testes", sumResult)
    })

    it("Somar", ()=>{
        const result = sum(1 , 2)
        
        
        expect(result).toBe(sumResult)
        
    })
    
    test("Subtrair", ()=>{
        const result2 = sub(1, 2)
    
        expect(result2).toBe(-1)
    })
})