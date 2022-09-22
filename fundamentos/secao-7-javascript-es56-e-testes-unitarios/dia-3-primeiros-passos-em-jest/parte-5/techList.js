const techList = (lista, nome) => {
    
    if (lista.length === 0){
        return 'Vazio!';
    } else {
        const objs =  [];
        lista.sort();
            for(let k in lista){
                const obj = {}
                obj.tech = lista[k];
                obj.name = nome;
                objs[k] = obj;
            }
            return objs;
        }

}


module.exports = techList;