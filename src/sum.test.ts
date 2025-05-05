import {sum, sub, divis} from "./sum";

describe("testes", ()=>{
    let sumResult: number

    beforeAll(()=>{
        sumResult = 3
        console.log("Executado antes de todos os testes", sumResult)
    })

    afterAll(()=>{
        sumResult = 3
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
    
    it("dividir", ()=>{
        const result3 = divis(4,2)

        expect(result3).toBe(2)
    })
})