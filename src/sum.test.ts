import {sum, sub} from "./server";

test("example", ()=>{
    const result = sum(1 , 2)
    const result2 = sub(1, 2)
    
    expect(result).toBe(3)
    expect(result2).toBe(-1)
})