const Sigla = (fullName : string): string => {
    
    if(fullName != undefined) {
        var name = fullName.split(" ");
        var sigla = name[0].substr(0,1) + name[1].substr(0,1);
        return sigla.toUpperCase();
    } else {
        return '';              
    }
}

export default Sigla;