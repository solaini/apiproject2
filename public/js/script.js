// Drum Arrays
let kicks = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let snares = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let hiHats = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let rideCymbals = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let ind;
let drums;



const toggleDrum = (drum, ind) => {
    if(ind > 15 || ind < 0 || ind === null){
        return;
    }
    
    setDrum(drum);
    if(!drums){
        return;
    }

    if(!drums[ind]){
        drums[ind] = true;
    }else{
        drums[ind] = false;
    }

    /*switch (drum){
        case 'kicks':
            if(!kicks[ind]){
                kicks[ind] = true;
            }else{
            kicks[ind] = false;
            }
            break;
        
        case 'snares':
            if(!snares[ind]){
                snares[ind] = true;
            }else{
                snares[ind] = false;
            }

        case 'hiHats':
            if(!hiHats[ind]){
                hiHats[ind] = true;
            }else{
            hiHats[ind] = false;
            }
            break;

        case 'rideCymbals':
            if(!rideCymbals[ind]){
                rideCymbals[ind] = true;
            }else{
                rideCymbals[ind] = false;
            }
        }*/
};

const setDrum = (drum) => {
    switch(drum){
        case 'kicks':
            drums = kicks;
            break;
        case 'snares':
            drums = snares;
            break;
        case 'hiHats':
            drums = hiHats;
            break;
        case 'rideCymbals':
            drums = rideCymbals;
            break;
        default:
            return false;
    }
}

const clear = (drum) => {
    setDrum(drum);
    if(!drums){
        return;
    }
    if(drums){
    for(let i = 0; i < 15; i++){
        drums[i] = false;
        }
    }
};

const invert = (drum) => {
    setDrum(drum);
    if(!drums){
        return;
    }
    let status; 
    if(drums){
        if(drums[0] === false){
            status = true;
        }else{
            status = false;
        }
        for(let i = 0; i < 15; i++){
            drums[i] = status;
        }
    }
}

