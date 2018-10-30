var KB = 1024;
var MB = 1048576;
var GB = 1073741824;
var TB = 1099511627776;

function getReadableSize(size){
    var TB_a;
    var GB_a;
    var MB_a;
    var KB_a;
    var B_a;

    TB_a = (size - (size % TB))/TB;
    size = size % TB;
    GB_a = (size - (size % GB))/GB;
    size = size % GB;
    MB_a = (size - (size % MB))/MB;
    size = size % MB;
    KB_a = (size - (size % KB))/KB;
    size = size % KB;
    B_a = size;
    if (TB_a == 0) {
        if (GB_a == 0) {
            if (MB_a == 0) {
                if (KB_a == 0) {
                    return String(B_a) + " Байт";
                } 
                else {
                    return String(KB_a) + " KБайт " + String(B_a) + " Байт";
                } 


            }
    
            else {

                return String(MB_a) + " МБайт " + String(KB_a) + " KБайт "+String(B_a) + " Байт";
            }
     
        }

        else {

            return String(GB_a)+" ГБайт " + String(MB_a)+" МБайт" + String(KB_a) + " KБайт " + String(B_a ) + " Байт";
        }

    }
    else {

        return String(TB_a)+" ТБайт "+ String(GB_a)+" ГБайт "+String(MB_a)+" МБайт "+ String(KB_a)+" KБайт "+String(B_a)+" Байт";
    }
}
