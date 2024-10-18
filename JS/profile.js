const pdiv=document.querySelectorAll('.profile-side-main-div');
pdiv.forEach((element) => {    
    element.addEventListener('click', function (event) {
        pdiv.forEach((element) => {
            element.classList.remove('active');
        })
        this.classList.toggle('active');
    });
});