import type { Config } from 'jest';

const config: Config = {
    bail: true, // configuração para o jest parar quando encontrar o primeiro erro
    preset: 'ts-jest', // configuração para o jest usar o ts-jest
    testEnvironment: 'node', // configuração para o jest usar o node, também podemos utilizar ele em outros ambientes.
}

export default config;