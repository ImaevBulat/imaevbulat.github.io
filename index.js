const but = document.querySelector('.button');
const input = document.querySelector('.input');
const rus0 = document.querySelector('.rus0');
const trans0 = document.querySelector('.trans0');
const buttonf = document.querySelector('.buttonf')


input.addEventListener("keyup", function(e) {
   if (e.code === 'Enter') {
       but.click();
   }
});

let obj ={
   а:'a',
   б:'b',
   в:'v',
   г:'g',
   д:'d',
   е:'e',
   ё:'yo',
   ж:'zh',
   з:'z',
   и:'i',
   й:'j',
   к:'k',
   л:'l',
   м:'m',
   н:'n',
   о:'o',
   п:'p',
   р:'r',
   с:'s',
   т:'t',
   у:'u',
   ф:'f',
   х:'h',
   ц:'ts',
   ч:'ch',
   ш:'sh',
   щ:'sch',
   ь: "'",
   ъ:'"',
   ы:'y',
   э:'e',
   ю:'yu',
   я:'ya',
   А:'A',
   Б:'B',
   В:'V',
   Г:'G',
   Д:'D',
   Е:'E',
   Ё:'Yo',
   Ж:'Zh',
   З:'Z',
   И:'I',
   Й:'J',
   К:'K',
   Л:'L',
   М:'M',
   Н:'N',
   О:'O',
   П:'P',
   Р:'R',
   С:'S',
   Т:'T',
   У:'U',
   Ф:'F',
   Х:'H',
   Ц:'Ts',
   Ч:'Ch',
   Ш:'Sh',
   Щ:'Sch',
   Ь: "'",
   Ъ:'"',
   Ы:'Y',
   Э:'E',
   Ю:'Yu',
   Я:'Ya',
}

but.addEventListener('click',function start(){
    let inp = input.value;
   
   if (inp.length != 0 && inp != '' && inp != ' '){
   const indexes = document.querySelectorAll('.index');
   const newDivRus = document.createElement('div');
   const newIndex = document.createElement('a');
   const newDiv = document.createElement('div');
   newDivRus.className = 'rus';
   newIndex.className = 'index';
   newDiv.className = 'textR';
   newDiv.innerText = inp;
   newIndex.innerText = indexes.length + 1;
   newDivRus.style.borderTop = '1px solid black';
   rus0.append(newDivRus);
   newDivRus.append(newIndex);
   newDivRus.append(newDiv);

   function abv(newDiv){
       let res = '';
       for(let i = 0; i < inp.length; i++){
           let a = inp[i];
           if (obj[a] != undefined){
           res = `${res}${obj[a]}`;
           } else {
               res = `${res}${a}`;
           }
       }
       return res;
   }


   // function abv(newDiv){
   //     let res = '';
   //     for(let i = 0; i < inp.length; i++){
   //         let a = inp[i];
   //         res = `${res}${obj[a]}`
   //     }
   //     return res;
   // }

   const newDivTrans = document.createElement('div');
   const newDiv1 = document.createElement('div');
   const newButtonTrans = document.createElement('button');
   newDivTrans.className = 'trans';
   newDiv1.className = 'textT';
   newButtonTrans.className = 'buttonT';
   trans0.append(newDivTrans);
   newDivTrans.append(newDiv1);
   newDivTrans.append(newButtonTrans);
   newDiv1.innerText = abv();
   newDivTrans.style.borderTop = '1px solid black';

   newButtonTrans.addEventListener('click', () => {
   newDivTrans.remove()
   newDivRus.remove()
   });

   buttonf.addEventListener('click', () => {
       newDiv1.parentElement.remove();
       newDiv.parentElement.remove();
    });

    
    if(inp.length>15){
        const inpFull = document.createElement('div');
        inpFull.className = 'inpFull'
        inpFull.innerText = inp;
        const inpFull1 = document.createElement('div');
        inpFull1.className = 'inpFull1'
        inpFull1.innerText = abv();
        newDivRus.append(inpFull)
        newDivTrans.append(inpFull1)
        newDiv.addEventListener('mouseenter', ()=>{
            inpFull.style.display = 'unset'
        });
        newDiv.addEventListener('mouseleave', ()=>{
            inpFull.style.display = 'none'
        });
        newDiv1.addEventListener('mouseenter', ()=>{
            inpFull1.style.display = 'unset'
        });
        newDiv1.addEventListener('mouseleave', ()=>{
            inpFull1.style.display = 'none'
        });
    }

    const mediaQuery = window.matchMedia('(max-width: 767px)')
        function handleTabletChange(e) {
        if (e.matches) {
            if(inp.length>11){
                const inpFull = document.createElement('div');
                inpFull.className = 'inpFull'
                inpFull.innerText = inp;
                const inpFull1 = document.createElement('div');
                inpFull1.className = 'inpFull1'
                inpFull1.innerText = abv();
                newDivRus.append(inpFull)
                newDivTrans.append(inpFull1)
                newDiv.addEventListener('mouseenter', ()=>{
                    inpFull.style.display = 'unset'
                });
                newDiv.addEventListener('mouseleave', ()=>{
                    inpFull.style.display = 'none'
                });
                newDiv1.addEventListener('mouseenter', ()=>{
                    inpFull1.style.display = 'unset'
                });
                newDiv1.addEventListener('mouseleave', ()=>{
                    inpFull1.style.display = 'none'
                });
            }
        }
        }
        mediaQuery.addListener(handleTabletChange)
        handleTabletChange(mediaQuery)

    }

})