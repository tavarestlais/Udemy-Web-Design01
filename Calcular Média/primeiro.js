
    function calcularMedia(){
       
        var total = 0;
        var qnt = arguments.length;     //retorna o numero de elementos passados por parâmetro
        var x = 0;

        while(typeof arguments[x] === 'number'){
            total += arguments[x];
            x++;
        }
        
        return total / qnt; //retorna direto a média
    }

