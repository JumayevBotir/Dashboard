// const dashboard = (index)=> document.getElementsByClassName(`dashboard${index}`)
const mainR = document.getElementById('main-render')
const body = document.body;
const checkbox = document.getElementById('myCheckbox');
const swtich = document.getElementById('switch')
let count =1;
function menuOnCLick(ind) {
    for(let i=0; i<mainR.children.length; i++) {
        if(ind === i) mainR.children[i].style.display = 'block';
        else mainR.children[i].style.display = 'none';
    }

    // console.log(index, 'men index man', dashboard(index));
    
}


function darkMode () {
    setTimeout(() => {
        console.log(checkbox);
    })
    
    body.classList.toggle('dark-mode')
}
function switchClick () {
   count++;
   darkMode()
   if(count % 2 !==0) {
    swtich.style.justifyContent = 'end'

    swtich.children[1].style.display = 'block'
    swtich.children[0].style.display = 'none';
   } else  {
    swtich.style.justifyContent = 'start'

    swtich.children[0].style.display = 'block'
    swtich.children[1].style.display = 'none'

    
   }

   console.log(count);
   
   
}


// for(let i=0; i<3; i++) {
//     console.log(i, 'i ==>>',addCardInfo, cardInfo);
    
//     // const addElement = ;
//     cardInfo.appendChild(addCardInfo)
// }

