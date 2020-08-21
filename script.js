document.querySelectorAll('input').forEach((e, i) => e.addEventListener('click', function(){
    closeMenu(i)
}))

document.querySelectorAll('label').forEach((e, i) => e.addEventListener('click', function(){
    setTimeout(goToSubMenu, 300, i)  
}))

function closeMenu(i){
    if(i === 1){
        document.querySelectorAll('input')[1].checked === true ? document.querySelectorAll('input')[4].checked = false : null
    } else if(i === 4){
        document.querySelectorAll('input')[4].checked === true ? document.querySelectorAll('input')[1].checked = false : null
    } else if(i === 2){
        document.querySelectorAll('input')[2].checked === true ? document.querySelectorAll('input')[3].checked = false : null
    } else if(i === 3){
        document.querySelectorAll('input')[3].checked === true ? document.querySelectorAll('input')[2].checked = false : null
    }
}

function goToSubMenu(e){
    e === 1 ? window.location.hash = 'el2': e === 2 ? window.location.hash = 'sub_m2-1' : e === 3 ? window.location.hash = 'sub_m2-2' : e === 4 ?  window.location.hash = 'el3': null
}
