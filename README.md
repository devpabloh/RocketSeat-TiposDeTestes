Você pode criar o arquivo do jest através do comando npx ts-jest config:init, no qual ele vai fazendo perguntas e criando o arquivo de configuração do jest.

jest.config.ts ou js - utilizamos esse arquivo para configurar o jest.

nomeDoArquivo.spec.ts ou js - utilizamos esse arquivo para testar o arquivo que queremos testar. colocando o .spec no final do nome do arquivo, nós estamos dizendo que é um arquivo de teste. Podendo utilizar também o .test.ts ou .test.js.

test("", ()=>{})

spec("", ()=>{})

Também podemos agrupar testes, ou seja, ter um switch de testes. Para isso, podemos utilizar o describe. Você pode criar um switch de testes, ou seja, um grupo de testes. Nele é recomendado em vez de utilizar o test, utilizar o it.

describe("", ()=>{
    it("somar", ()=>{

    })

    it("subtrair", ()=>{

    })
})

beforeAll - Quando você precisa que algo seja executado antes de todos os testes, você pode utilizar o beforeAll.

beforeAll(()=>{
    console.log("Antes de todos os testes")
})

beforeEach - Quando você precisa que algo seja executado antes de cada teste, você pode utilizar o beforeEach.

afterAll - Quando você precisa que algo seja executado depois de todos os testes, você pode utilizar o afterAll.

afterEach - Quando você precisa que algo seja executado depois de cada teste, você pode utilizar o afterEach.

Você pode utilizar o beforeEach e o afterEach para limpar o banco de dados, por exemplo.
