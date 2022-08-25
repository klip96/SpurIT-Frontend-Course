let But = document.getElementsByClassName('collapsible__button');
let hid = document.getElementsByClassName('collapsible__action collapsible__action--hidden')[0];
let vis = document.getElementsByClassName('collapsible__action collapsible__action--visible')[0];
let col = document.getElementsByClassName('collapsible__content')[0];
col.style.display='none';
vis.style.display='none';
for (let i = 0; i < But.length; i++) {
    But[i].addEventListener('click', function(){
        this.classList.toggle('active');
        let content = this.nextElementSibling;
        if (this.classList.contains('active')) {
            content.style.display = 'block';
            vis.style.display='block';
            hid.style.display='none';
        } else{
            content.style.display = 'none';
            vis.style.display='none';
            hid.style.display='block';
        }
    })
}





