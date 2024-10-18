const pdiv=document.querySelectorAll('.profile-side-main-div');
pdiv.forEach((element) => {    
    element.addEventListener('click', function (event) {
        pdiv.forEach((element) => {
            element.classList.remove('active');
        })
        this.classList.toggle('active');
    });
});
const mentors_profile=[
    {
        id:'1',
        name:'John Doe',
        image:'https://via.placeholder.com/150',
        designation:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        qualification:['HTML', 'CSS', 'JavaScript'],
        phoneo:'',
        phoner:'',
        mobile:'',
        email:'',
        experience:'',
    }
]