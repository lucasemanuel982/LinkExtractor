import pegaArquivo from "./index.js";
import chalk from "chalk";
import fs from 'fs';
import listaValidada from "./http-validacao.js";

const caminho = process.argv;

async function imprimeLista(valida, resultado, identificadorArquivo = ''){
    if(valida){
        console.log(chalk.yellow('Lista Validada: ' +identificadorArquivo ), await listaValidada(resultado), "\n");
    }else{
        console.log(chalk.yellow('Lista de Links ' +identificadorArquivo ), resultado, "\n");
    }
}

async function processarTexto(argumentos){
    const caminhoDiretorio = argumentos[2];
    const valida = argumentos[3] === 'valida';
    console.log("Processo em andamento, aguarde!");

    try {
        fs.statSync(caminhoDiretorio);
    } catch (error) {
        if(error.code === 'ENOENT'){
            console.log(chalk.red("Caminho incorreto ou arquivo não existe!"));
            return;
        }
    }

    if(fs.lstatSync(caminhoDiretorio).isFile()) {
        const resultado = await pegaArquivo(caminhoDiretorio);
        imprimeLista(valida, resultado, caminhoDiretorio);
    }else if(fs.lstatSync(caminhoDiretorio).isDirectory()){
        const arquivos = await fs.promises.readdir(caminhoDiretorio);
        arquivos.forEach(async (nomeDoArquivo) =>{
            const lista = await pegaArquivo(`${caminhoDiretorio}/${nomeDoArquivo}`)
            imprimeLista(valida, lista, nomeDoArquivo); 
        })
        console.log(arquivos);
    }
};

processarTexto(caminho);

