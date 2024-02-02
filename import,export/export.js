 let export_var=10;

 function exportFunction(export_var){
    export_var++;
    return export_var;
}

export{export_var,exportFunction}