let content = document.getElementsByClassName("contentContainer")[0];
let audioPath = '';
let data = '';
document.addEventListener('keydown',function(event){
     
    if(event.keyCode == 13){
      postMeaning();
    }
})
const changeFont = (value)=>{
    console.log(value)
    document.getElementById('root').style.fontFamily=value;
}
const showfont = ()=>{
    let font = document.getElementsByClassName('radioDiv')[0];
    console.log(font)
    if(font.style.display=='flex'){
        font.style.display='none'
    }
    else{
        font.style.display='flex'
    }
}
const postMeaning = ()=>{
    let value = document.getElementsByClassName('inputBoxSearch')[0].value;
    if(value !="" && value!= undefined){
        window.location.href=`/index?word=${value}&value=${theme}`;
    }
}
