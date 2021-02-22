function checkSNT(a){
    let count = 1;
    let i = 2;
    while (i <= a) {
        if(a % i == 0){
            count++;
        }
        i++;
    }
    if(count == 2)
        return true;
        return false;    
}
function printSNT() {
    let count = 0;
    let i = 2;
    while(count <= 20) {
        if(checkSNT(i) == true) {
            document.write(i + ' ');    
            count++;       
        }
      
        i++;
    }
}