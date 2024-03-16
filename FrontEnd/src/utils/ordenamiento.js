export default function ordenar(cat,products,tipo){
    switch (tipo){
        case 1:
            (cat)
            ?
            (products.sort((a,b)=> {
                const temA = a.detalle.toLowerCase();
                const temB = b.detalle.toLowerCase();
                
                if(temA<temB){
                    return -1;
                }else if(temA>temB){
                    return 1;
                }else{
                    return 0;
                }
            } ))
            :
            (products.sort((a,b)=> {
                const temA = a.detalle.toLowerCase();
                const temB = b.detalle.toLowerCase();
                
                if(temA>temB){
                    return -1;
                }else if(temA<temB){
                    return 1;
                }else{
                    return 0;
                }
            } ))
            break;
        case 2:
            (cat)
            ?
            (products.sort((a,b)=> {
                const temA = a.categoria.toLowerCase();
                const temB = b.categoria.toLowerCase();
                
                if(temA<temB){
                    return -1;
                }else if(temA>temB){
                    return 1;
                }else{
                    return 0;
                }
            } ))
            :
            (products.sort((a,b)=> {
                const temA = a.categoria.toLowerCase();
                const temB = b.categoria.toLowerCase();
                
                if(temA>temB){
                    return -1;
                }else if(temA<temB){
                    return 1;
                }else{
                    return 0;
                }
            } ))
            break;
        case 3:
            (cat)
            ?
            (products.sort((a,b)=> a.precio - b.precio ))
            :
            (products.sort((a,b)=> b.precio - a.precio ));
            break;
        case 4:
            (cat)
            ?
            (products.sort((a,b)=> a.cantidad - b.cantidad ))
            :
            (products.sort((a,b)=> b.cantidad - a.cantidad ));
            break;
    }
  
    return(!cat);
}
