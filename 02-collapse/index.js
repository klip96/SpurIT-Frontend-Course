/*const BUTHIDE = document.querySelector(".collapsible__button");
const BUTIDE1 = document.querySelector('.collapsible__button active');
const TEXT = document.querySelector('.collapsible__content');

    BUTHIDE.addEventListener('click', function() {
        this.classList.toggle('active');
        let content = this.nextElementSibling;
        if  (content.style.display = 'block'){ 
         content.style.display = 'none';
         } else{
            return;
         }
     })
     BUTIDE1.addEventListener('click', function() {
        let content = this.nextElementSibling;
        if  (content.style.display = 'none'){ 
         content.style.display = 'block';
         } 
     })
*/

/* 1 Рабочий вариант*/

let But = document.getElementsByClassName('collapsible__button');
document.getElementsByClassName('collapsible__action collapsible__action--hidden')[0].style.display='none';
for (let i = 0; i < But.length; i++) {
    But[i].addEventListener('click', function(){
        this.classList.toggle('active');
        let content = this.nextElementSibling;
        if (this.classList.contains('active')) {
            content.style.display = 'none';
            document.getElementsByClassName('collapsible__action collapsible__action--visible')[0].style.display='none';
            document.getElementsByClassName('collapsible__action collapsible__action--hidden')[0].style.display='block';
        } else{
            content.style.display = 'block';
            document.getElementsByClassName('collapsible__action collapsible__action--visible')[0].style.display='block';
            document.getElementsByClassName('collapsible__action collapsible__action--hidden')[0].style.display='none';

        }
        
    })
}

/*------------------------------------------------------------------------------------------------------------------------------ */




