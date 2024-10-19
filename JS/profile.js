import {allmentors,loadMentors,bookSlot} from './mentorship.js';
const mentors_profile=[
    {
        id:1,
        department:'Computer Science & Engineering',
        qualification:'Ph.D., M.E.',
        phoneo:'+91-1672-253208',
        phoner:'+91-1672-253209',
        mobile:'+91-98159-80400',
        email:'birmohansingh@sliet.ac.in, birmohans@gmail.com',
        experience:["About 30 years SUBJECTS TAUGHT","Software Engineering","Operating system","System Software","Object-Oriented programing","System Analysis and Design","Data Structures","Computer Graphic"],
        membership:["Life member ISTE","Member, IACSIT","Member, IAENG","Member, IEEE","Member CSI"],
        research:["Medical Image Processing and Signal Processing","Machine Learning"],
        publications:"<div>1. Sharma, S.R., Singh, B. & Kaur, M. Hybrid SFO and TLBO optimization for biodegradable classification. Soft Comput (2021).</div><div>2. Singh, H., Singh, B. & Kaur, M. An improved elephant herding optimization for global optimization problems. Engineering with Computers (2021).</div><div>3. Kashyap, D., Singh, B., & Kaur, M. (2021). Chaotic approach for improving global optimization in Yellow Saddle Goatfish. Engineering Reports, e12381.</div><div>4. Sharma, S. R., Singh, B., & Kaur, M. (2021). Classification of Parkinson disease using binary Rao optimization algorithms. Expert Systems, e12674.</div><div>5. Singh, G., Kaur, M., & Singh, B. (2021). Detection of epileptic seizure EEG signal using multiscale entropies and complete ensemble empirical mode decomposition. Wireless Personal Communications, 116(1), 845-864.</div><div style='color: blue; cursor: pointer;'>And Many More.....</div>"
    },
    {
        id:7,
        department:'Computer Science & Engineering',
        qualification:'Ph.D., M. Tech., B. Tech.',
        phoneo:'01672-253610',
        phoner:'+91 7579215524',
        mobile:'+91 9917037538',
        email:'amarnath@sliet.ac.in',
        experience:["January 13, 2020, to October  29, 2020, worked as an Assistant Professor in the Department of School of Computing, DIT University, Dehradun","July 01, 2014, to December 31, 2014, Junior Research Fellow (JRF) at the Department of Computer Science & Engineering, Indian Institute of Technology Roorkee, India"],
        membership:[],
        research:[],
        publications:"<div>1. Sharma, S.R., Singh, B. & Kaur, M. Hybrid SFO and TLBO optimization for biodegradable classification. Soft Comput (2021).</div><div>2. Singh, H., Singh, B. & Kaur, M. An improved elephant herding optimization for global optimization problems. Engineering with Computers (2021).</div><div>3. Kashyap, D., Singh, B., & Kaur, M. (2021). Chaotic approach for improving global optimization in Yellow Saddle Goatfish. Engineering Reports, e12381.</div><div>4. Sharma, S. R., Singh, B., & Kaur, M. (2021). Classification of Parkinson disease using binary Rao optimization algorithms. Expert Systems, e12674.</div><div>5. Singh, G., Kaur, M., & Singh, B. (2021). Detection of epileptic seizure EEG signal using multiscale entropies and complete ensemble empirical mode decomposition. Wireless Personal Communications, 116(1), 845-864.</div><div style='color: blue; cursor: pointer;'>And Many More.....</div>"
    },
    {
        id:4,
        department:'Computer Science & Engineering',
        qualification:'Ph.D., M. Tech., B. Tech.',
        phoneo:'01672-253320',
        phoner:'01672-253527',
        mobile:'+91-94587-29314',
        email:'jagdeep@sliet.ac.in; jagdeepknit@gmail.com',
        experience:["Assistant Professor in the Department of Computer Science and Engineering, at Sant Longowal Institute of Engineering and Technology, Longowal, Punjab from  November  2020 – to till date.","Teaching-Cum-Research Fellow in the Division of Information Technology,  Netaji Subhas Institute of Technology, University of Delhi, New Delhi from August 2017 – October 2020."],
        membership:["IEEE Senior Member","International Association of Engineers – Member"],
        research:[],
        publications:"<div>1. Sharma, S.R., Singh, B. & Kaur, M. Hybrid SFO and TLBO optimization for biodegradable classification. Soft Comput (2021).</div><div>2. Singh, H., Singh, B. & Kaur, M. An improved elephant herding optimization for global optimization problems. Engineering with Computers (2021).</div><div>3. Kashyap, D., Singh, B., & Kaur, M. (2021). Chaotic approach for improving global optimization in Yellow Saddle Goatfish. Engineering Reports, e12381.</div><div>4. Sharma, S. R., Singh, B., & Kaur, M. (2021). Classification of Parkinson disease using binary Rao optimization algorithms. Expert Systems, e12674.</div><div>5. Singh, G., Kaur, M., & Singh, B. (2021). Detection of epileptic seizure EEG signal using multiscale entropies and complete ensemble empirical mode decomposition. Wireless Personal Communications, 116(1), 845-864.</div><div style='color: blue; cursor: pointer;'>And Many More.....</div>"
    },
    {
        id:3,
        department:'Computer Science & Engineering',
        qualification:'B.E., M.S., Ph.D',
        phoneo:'+91-1672-253326',
        phoner:'+91-1672-253544',
        mobile:'+91-9417588161',
        email:'gurjinder13@yahoo.com',
        experience:["Joined as Lecturer in August 1997 at SLIET and presently working as Associate Professor.","Worked as Warden of Girls Hostel for 12 years","Coordinated various committees in Techfest"],
        membership:["Lifetime Member, ISTE"," Life Member IEEE"],
        research:[],
        publications:"<div>1. Sharma, S.R., Singh, B. & Kaur, M. Hybrid SFO and TLBO optimization for biodegradable classification. Soft Comput (2021).</div><div>2. Singh, H., Singh, B. & Kaur, M. An improved elephant herding optimization for global optimization problems. Engineering with Computers (2021).</div><div>3. Kashyap, D., Singh, B., & Kaur, M. (2021). Chaotic approach for improving global optimization in Yellow Saddle Goatfish. Engineering Reports, e12381.</div><div>4. Sharma, S. R., Singh, B., & Kaur, M. (2021). Classification of Parkinson disease using binary Rao optimization algorithms. Expert Systems, e12674.</div><div>5. Singh, G., Kaur, M., & Singh, B. (2021). Detection of epileptic seizure EEG signal using multiscale entropies and complete ensemble empirical mode decomposition. Wireless Personal Communications, 116(1), 845-864.</div><div style='color: blue; cursor: pointer;'>And Many More.....</div>"
    },
    {
        id:6,
        department:'Computer Science & Engineering',
        qualification:'Ph.D., M.E., B. Tech.',
        phoneo:'+91-1672-253214',
        phoner:'+91-1672-253215',
        mobile:'9463067527',
        email:'manojsachan@sliet.ac.in, manojsachan@gmail.com',
        experience:["As Research Assistant in TCRDC (now TCIRD) , Patiala , 4 months (Jan 1992- April 1992)","As Lecturer in Computer Science and Engineering , TIET (now Thapar Univ ) Patiala , 7.5 years (1992-1999)","As Assistant Professor in Computer Science & Engineering , SLIET Longowal , 7 years (1999-2006)"],
        research:["Real Word Error Detection and Correction in Hindi Text","Rule based approach for Detection and Normalization of the Temporal Expression in Hindi Text","Character Segmentation of Handwritten Hindi Words using Hybrid Approach"],
        membership:["Life Member , Indian Society for Technical Education","Life Member, Computer Society of India (CSI)"],
        publications:"<div>1. Sharma, S.R., Singh, B. & Kaur, M. Hybrid SFO and TLBO optimization for biodegradable classification. Soft Comput (2021).</div><div>2. Singh, H., Singh, B. & Kaur, M. An improved elephant herding optimization for global optimization problems. Engineering with Computers (2021).</div><div>3. Kashyap, D., Singh, B., & Kaur, M. (2021). Chaotic approach for improving global optimization in Yellow Saddle Goatfish. Engineering Reports, e12381.</div><div>4. Sharma, S. R., Singh, B., & Kaur, M. (2021). Classification of Parkinson disease using binary Rao optimization algorithms. Expert Systems, e12674.</div><div>5. Singh, G., Kaur, M., & Singh, B. (2021). Detection of epileptic seizure EEG signal using multiscale entropies and complete ensemble empirical mode decomposition. Wireless Personal Communications, 116(1), 845-864.</div><div style='color: blue; cursor: pointer;'>And Many More.....</div>"
    },
    {
        id:5,
        department:'Computer Science & Engineering',
        qualification:'Ph.D., M.E., B. Tech.',
        phoneo:'01672-253212',
        phoner:'01672-253213',
        mobile:'+91-9417430477',
        email:'mjrsingh@yahoo.comm',
        experience:["Professor, SLIET Longowal since 30/09/2019","Associate Professor, SLIET, Longowal from 22/06/2010 to 29/09/2019","Assistant Professor, SLIET, Longowal from 22/06/2007 to 21/06/2010"],
        research:["Green Computing","Cloud computing,","Distributed Systems"],
        membership:["Computer Society of India"],
        publications:"<div>1. Sharma, S.R., Singh, B. & Kaur, M. Hybrid SFO and TLBO optimization for biodegradable classification. Soft Comput (2021).</div><div>2. Singh, H., Singh, B. & Kaur, M. An improved elephant herding optimization for global optimization problems. Engineering with Computers (2021).</div><div>3. Kashyap, D., Singh, B., & Kaur, M. (2021). Chaotic approach for improving global optimization in Yellow Saddle Goatfish. Engineering Reports, e12381.</div><div>4. Sharma, S. R., Singh, B., & Kaur, M. (2021). Classification of Parkinson disease using binary Rao optimization algorithms. Expert Systems, e12674.</div><div>5. Singh, G., Kaur, M., & Singh, B. (2021). Detection of epileptic seizure EEG signal using multiscale entropies and complete ensemble empirical mode decomposition. Wireless Personal Communications, 116(1), 845-864.</div><div style='color: blue; cursor: pointer;'>And Many More.....</div>"
    },
    {
        id:2,
        department:'Computer Science & Engineering',
        qualification:'Ph.D., M.Tech., B. Tech.',
        phoneo:'+91-1672-253210',
        phoner:'+91-1672-253211',
        mobile:'+91-94640-96000',
        email:'damanpreets@sliet.ac.in',
        experience:["Teaching Experience 25 Years","Associate Dean (ERP/SAMARTH and ACSS), SLIET","Faculty Incharge of Network Laboratory, SLIET"," Faculty Incharge of Hardware Laboratory, SLIET"],
        research:["Machine Learning","Wireless Sensor Networks","Optimization Techniques"],
        membership:["Member of Institute of Electrical and Electronics Engineers (IEEE)","Member of Computer Society of India (CSI)","Life member of Indian Society for Technical Education (ISTE)","Member of International Association of Engineers (IAENG)"],
        publications:"<div>1. Sharma, S.R., Singh, B. & Kaur, M. Hybrid SFO and TLBO optimization for biodegradable classification. Soft Comput (2021).</div><div>2. Singh, H., Singh, B. & Kaur, M. An improved elephant herding optimization for global optimization problems. Engineering with Computers (2021).</div><div>3. Kashyap, D., Singh, B., & Kaur, M. (2021). Chaotic approach for improving global optimization in Yellow Saddle Goatfish. Engineering Reports, e12381.</div><div>4. Sharma, S. R., Singh, B., & Kaur, M. (2021). Classification of Parkinson disease using binary Rao optimization algorithms. Expert Systems, e12674.</div><div>5. Singh, G., Kaur, M., & Singh, B. (2021). Detection of epileptic seizure EEG signal using multiscale entropies and complete ensemble empirical mode decomposition. Wireless Personal Communications, 116(1), 845-864.</div><div style='color: blue; cursor: pointer;'>And Many More.....</div>"
    },
]
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
    // const name_part = event.querySelector('.child-boxes2 .name-part');
    // name_part.textContent=mentor.name;
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
    const mentor_details = mentors_profile.find(m => m.id === mentor.id);
    if(mentor_details !==undefined){
        const name_part = event.querySelector('.main-box .child-boxes2');
        if (name_part !==null) {
            name_part.innerHTML = `<div style="display: flex;"><div style="font-weight: 600; min-width: 40%; color: rgb(62, 62, 62);">Name &nbsp;&nbsp;:</div><div class="name-part">${mentor.name}</div></div>
                        <div style="display: flex;"><div style="font-weight: 600; min-width: 40%; color: rgb(62, 62, 62);">Designation &nbsp;&nbsp;:</div><div>${mentor.designation}</div></div>
                        <div style="display: flex;"><div style="font-weight: 600; min-width: 40%; color: rgb(62, 62, 62);">Department &nbsp;&nbsp;:</div><div>${mentor_details.department}</div></div>
                        <div style="display: flex;"><div style="font-weight: 600; min-width: 40%; color: rgb(62, 62, 62);">Educational Qualification &nbsp;&nbsp;:&nbsp;&nbsp;</div><div> ${mentor_details.qualification}</div></div>`;
        }
        const contact_div = event.querySelector(".main-box .contact-div");
        if(contact_div !==null){
            contact_div.innerHTML = `<div><div style="color: rgb(62, 62, 62); font-weight: 600;">Phone (O) &nbsp;&nbsp;:</div><div>${mentor_details.phoneo}</div></div>
                            <div><div style="color: rgb(62, 62, 62); font-weight: 600;">Phone(R) &nbsp;&nbsp;:</div><div>${mentor_details.phoner}</div></div>
                            <div><div style="color: rgb(62, 62, 62); font-weight: 600;">Mobile &nbsp;&nbsp;:</div><div>${mentor_details.mobile}</div></div>
                            <div><div style="color: rgb(62, 62, 62); font-weight: 600;">E-Mail &nbsp;&nbsp;:</div><div>${mentor_details.email}</div></div>`;
        }
        if (mentor_details.experience.length !==0) {
            const exp_box = event.querySelector(".main-box .experience-div")        
            if(exp_box !==null){
                const res_div = document.createElement('div');
                res_div.classList.add('child-boxes');
                res_div.innerHTML = "<h5>Experience :- </h5>";
                const res_div_div = document.createElement('div');
                res_div_div.classList.add('texts');
                mentor_details.experience.forEach((r)=>{
                    const text_div = document.createElement("div");
                    text_div.textContent=r;
                    res_div_div.appendChild(text_div);
                });
                res_div.appendChild(res_div_div);
                exp_box.innerHTML="";
                exp_box.appendChild(res_div);
                // pub_box.innerHTML = mentor_details.publications
            } 
        } 
        else{
            const exp_box = event.querySelector(".main-box .experience-div")
            if(exp_box !==null){
                exp_box.innerHTML = "";
            }
        }
        if (mentor_details.membership.length !==0) {      
            const mem_box = event.querySelector(".main-box .membership-div")        
            if(mem_box !==null){
                const res_div = document.createElement('div');
                res_div.classList.add('child-boxes');
                res_div.innerHTML = "<h5>Professional Membership :- </h5>";
                const res_div_div = document.createElement('div');
                res_div_div.classList.add('texts');
                mentor_details.membership.forEach((r)=>{
                    const text_div = document.createElement("div");
                    text_div.textContent=r;
                    res_div_div.appendChild(text_div);
                });
                res_div.appendChild(res_div_div);
                mem_box.innerHTML="";
                mem_box.appendChild(res_div);
                // pub_box.innerHTML = mentor_details.publications
            }
        }
        else{
            const mem_box = event.querySelector(".main-box .membership-div")
            if(mem_box !==null){
                mem_box.innerHTML = "";
                }
                }
        if (mentor_details.research.length !==0) {      
            const res_box = event.querySelector(".main-box .research-div")        
            if(res_box !==null){
                const res_div = document.createElement('div');
                res_div.classList.add('child-boxes');
                res_div.innerHTML = "<h5>Research/Projects :- </h5>";
                const res_div_div = document.createElement('div');
                res_div_div.classList.add('texts');
                mentor_details.research.forEach((r)=>{
                    const text_div = document.createElement("div");
                    text_div.textContent=r;
                    res_div_div.appendChild(text_div);
                });
                res_div.appendChild(res_div_div);
                res_box.innerHTML="";
                res_box.appendChild(res_div);
                // pub_box.innerHTML = mentor_details.publications
            }
        }
        else{
            const res_box = event.querySelector(".main-box .research-div")
            if(res_box !==null){
                res_box.innerHTML = "";
                
            }
        }        
        const pub_box = event.querySelector(".publication-boxes .texts")
        if(pub_box !==null){
            pub_box.innerHTML = mentor_details.publications;
        }        
    }
    
}