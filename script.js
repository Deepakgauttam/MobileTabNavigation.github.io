let img = document.querySelector('img')
let btn1 = document.querySelector('#home');
let btn2 = document.querySelector('#work');
let btn3 = document.querySelector('#blog');
let btn4 = document.querySelector('#about_us');

btn1.addEventListener('click', () =>{
    img.src='https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixideyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80';
    this.className += " active";
})
btn2.addEventListener('click', () =>{
    img.src='https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib-rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80';
})
btn3.addEventListener('click', () =>{
    img.src='https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid-eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80';
})
btn4.addEventListener('click', () =>{
    img.src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid-eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80';
})

