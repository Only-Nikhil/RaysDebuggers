import {allmentors,loadMentors,bookSlot} from './mentorship.js';
document.addEventListener('DOMContentLoaded',function(){
    loadMentors();
    const pdiv=document.querySelectorAll('.profile-side-main-div');
    pdiv.forEach((element) => {    
        element.addEventListener('click', function (event) {
            const profile_section = document.querySelector('.profile-details');
            if (profile_section !==null) {
                const slotSection = profile_section.querySelector(".slot-box");
                if (slotSection !==null) {
                    const selecetd_mentor = this.dataset.mentorId;                    
                    if (selecetd_mentor !== undefined) {  
                        pdiv.forEach((element) => {
                            element.classList.remove('active');
                        })
                        this.classList.toggle('active');
                        const mentor = allmentors.find(m => m.id === parseInt(selecetd_mentor));
                        showSlots(mentor,profile_section);     
                    }
                    else{
                        alert("This mentor doesn't have mentor id!!")
                    }             
                }
                else{
                    alert("Something went wrong!!")
                }
            }
        });
    });
    // Get the current URL
    const url = new URL(window.location.href);

    // Extract the 'id' parameter
    const id = url.searchParams.get('id');
    if (id !== null) {
        const profile_side_main_div = document.querySelectorAll('.profile-side-main-div');
        if(profile_side_main_div.length !==0){
            profile_side_main_div.forEach((profile)=>{
                if(profile.dataset.mentorId === id){
                    profile.click();
                }
            })            
        }
        // const mentor = allmentors.find(m => m.id === parseInt(id));
        // if (mentor !== null) {
        //     const profile_section = document.querySelector('.profile-details');
        //     if (profile_section !==null) {
        //         showSlots(mentor,profile_section)
        //     }
        // }
    }
    else{
        const mentor = allmentors.find(m => m.id === 1);
        const profile_section = document.querySelector('.profile-details');
        if (profile_section !==null) {
            showSlots(mentor,profile_section)
        }
    }
});
function showSlots(mentor,event){
    const img_box = event.querySelector('.img-box img');
    img_box.src=mentor.image;
    const name_part = event.querySelector('.child-boxes2 .name-part');
    name_part.textContent=mentor.name;
    const slotSection = event.querySelector(".slot-box");
    slotSection.innerHTML = '<h5 class="heading" >Book Your Slot</h5>';
    if (slotSection !==null) {
        const slot_book = document.createElement("div");
        slot_book.classList.add("slot-book");
        mentor.availableSlots.forEach(slot => {
            const slotButton = document.createElement("button");
            slotButton.setAttribute('type','button');
            slotButton.innerHTML=`<span>Availabe</span><br>
                            <span>${slot}</span>`;

            // Check if slot is already booked
            if (mentor.bookedSlots.includes(slot)) {
                slotButton.classList.add('booked')
                slotButton.innerHTML=`<span>Booked</span><br>
                                <span>${slot}</span>`;
            }

            // Add event listener to book the slot
            slotButton.addEventListener("click", () => {
                const actionBut = bookSlot(mentor.id, slot);
                if (actionBut) {
                    slotButton.classList.add('booked');// Show confirmation alert
                    alert(`Now, You have successfully booked ${slot} with ${mentor.name}.`);
                }
                else{
                    alert('Something Went Wrong!!');
                }
                
            });

            slot_book.appendChild(slotButton);
        });
        slotSection.appendChild(slot_book);        
    }
}
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