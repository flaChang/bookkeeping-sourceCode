const getIntext=(inText:string,output='0')=>{
    switch(inText){
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
            if(output==="0"){
                return inText
            }else{
                return output+inText
            }
        case '.':
            if(output.indexOf('.')>=0){return output;}
            return output+'.'
        case '删除':
            if(output.length===1){
                return ''
            }else{
                return output.slice(0,-1)
            }
        case '清空':
            return ''
        default:
            return ''
    }
}

export {getIntext}