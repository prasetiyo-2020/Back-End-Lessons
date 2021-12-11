


let penumpang = [];
let tambahPenumpang = function(namaPenumpang, penumpang) {
    if(penumpang.length === 0) {
        penumpang.push(namaPenumpang);
        return penumpang;
    } else {
        for(let i = 0; i < penumpang.length; i++) {
            if(penumpang[i] == undefined) {
                penumpang[i] = namaPenumpang;
                return penumpang;
            } else if(i == penumpang.length - 1){
                penumpang.push(namaPenumpang);
                return penumpang;
            }
        }
    }
}




