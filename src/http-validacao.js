function extrairLinks (arrLinks){
    return arrLinks.map((objetoLink) => Object.values(objetoLink).join())

}

async function checaStatus(listaURLs){
    const arrStatus = await Promise.all(
        listaURLs.map(async (url)=>{
            try {
                const response = await fetch(url)
                return `${response.status} - ${response.statusText}`;
            } catch (error) {
                return tratamentoErros(error);
            }
        })
    )
    return arrStatus;
}


function tratamentoErros(erro) {
    return erro.cause.code === 'ENOTFOUND' ? 'Link não encontrado!' : 'Ocorreu algum erro';
}

export default async function listaValidada(listaDeLinks){
    const links = extrairLinks(listaDeLinks);
    const status = await checaStatus(links);
    return listaDeLinks.map((objeto, indice) => ({
        ...objeto,
        status: status[indice]
    }))
}

