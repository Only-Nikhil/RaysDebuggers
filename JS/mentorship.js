// data for creating mentors slots
export const allmentors = [
    {
        id: 1,
        image: "Media/Dr_Birmohan_singh.jpg",
        name: "Dr. Birmohan Singh",
        typeOfRespond: "Quick Responder",
        designation: "Professor",
        where:"SLIET",
        experience: "Teaching expert with 30 years experience in Software Engineering,Operating system,System Software....",
        rating: {
            star: "5",
            review: "76"
        },
        guidance: ["Software Engineering", "Operating system", "System Software", "Object-Oriented programing", "System Analysis and Design", "Data Structures", "Computer Graphics"],
        availableSlots: ["10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM", "1:00 PM"],
        bookedSlots: [] // this will keep booked slots
    },
    {
        id: 2,
        image: "Media/Dr_Damanpreet_singh.jpg",
        name: "Dr. Damanpreet Singh",
        typeOfRespond: "Top Mentor",
        designation: "Professor",
        where:"SLIET",
        experience: "Teaching expert with 25 years experience and role as Associate Dean at SLIET",
        rating: {
            star: "4",
            review: "25"
        },
        guidance: ["Computer Science & Engineering"],
        availableSlots: ["10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM", "1:00 PM"],
        bookedSlots: [] // this will keep booked slots
    },
    {
        id: 3,
        image: "Media/Dr_Gurjinder_Kaur.jpg",
        name: "Dr. Gurjinder Kaur",
        typeOfRespond: "Top Mentor",
        designation: "Associate Professor",
        where:"SLIET",
        experience: "Joined as Lecturer in August 1997 at SLIET and presently working as Associate Professor.",
        rating: {
            star: "4",
            review: "22"
        },
        guidance: ["Course counsellor","Academic Activities"],
        availableSlots: ["2:00 PM", "4:00 PM - 5:00 PM"],
        bookedSlots: [] // this will keep booked slots
    },
    {
        id: 4,
        image: "Media/Dr_Jagdeep_singh.jpg",
        name: "Dr. Jagdeep Singhr",
        typeOfRespond: "Quick Responder",
        designation: "Assistant Professor",
        where:"SLIET",
        experience: "Assistant Professor in the Department of Computer Science and Engineering at SLIET & Teaching-Cum-Research Fellow in the Division of Information Technology at NSIT",
        rating: {
            star: "5",
            review: "56"
        },
        guidance: ["UGC-NET","GATE","Electronics and Information Technology"],
        availableSlots: ["2:00 PM", "4:00 PM - 5:00 PM"],
        bookedSlots: [] // this will keep booked slots
    },
    {
        id: 5,
        image: "Media/Dr_Major_singh_foraya.jpg",
        name: "Dr. Major Singh Goraya",
        typeOfRespond: "Quick Responder",
        designation: "Professor",
        where:"SLIET",
        experience: "<ul><li>Professor, SLIET Longowal since 30/09/2019</li><li>Associate Professor, SLIET, Longowal from 22/06/2010 to 29/09/2019</li><li>Assistant Professor, SLIET, Longowal from 22/06/2007 to 21/06/2010</li><li>Lecturer, Punjabi University from 07/08/1998 to 21/06/2007</li></ul>",
        rating: {
            star: "4",
            review: "23"
        },
        guidance: ["Computer Science and Engineering"],
        availableSlots: ["8:00 PM - 9:00 PM", "12:00 AM - 1:00 AM"],
        bookedSlots: [] // this will keep booked slots
    },
    {
        id: 6,
        image: "Media/Dr_Manoj_sachan.jpg",
        name: "Dr. Manoj Sachan",
        typeOfRespond: "Top Mentor",
        designation: "Professor",
        where:"SLIET",
        experience: "<ul><li>As Professor in Computer Science & Engineering , SLIET Longowal  (since 2019 till date)</li><li>As Associate Professor in Computer Science & Engineering , SLIET Longowal , 13 years (2006-2019)</li></ul>",
        rating: {
            star: "4",
            review: "23"
        },
        guidance: ["Computer Science and Engineering"],
        availableSlots: ["6:00 PM - 7:00 PM", "6:00 AM - 7:00 AM"],
        bookedSlots: [] // this will keep booked slots
    },
    {
        id: 7,
        image: "Media/Dr_amar_nath.jpg",
        name: "Dr. Amar Nath",
        typeOfRespond: "Quick Responder",
        designation: "Assistant Professor",
        where:"SLIET",
        experience: "<ul><li>January 13, 2020, to October  29, 2020, worked as an Assistant Professor in the Department of School of Computing, DIT University, Dehradun.</li><li>July 01, 2014, to December 31, 2014, Junior Research Fellow (JRF) at the Department of Computer Science & Engineering, Indian Institute of Technology Roorkee, India.</li></ul>",
        rating: {
            star: "4",
            review: "23"
        },
        guidance: ["Computer Science and Engineering"],
        availableSlots: ["6:00 PM - 7:00 PM", "6:00 AM - 7:00 AM"],
        bookedSlots: [] // this will keep booked slots
    },
];
// show mentors slots
function showAllMentors() {
    const mentorList = document.getElementById("mentor-list");
    if (mentorList !== null) {
        mentorList.innerHTML = ""; // Clear all prevoius content
    }
    else {
        alert("Something went wrong!!")
        return false;
    }
    allmentors.forEach(mentor => {
        // Create mentor div
        const mentorCard = document.createElement("div");
        mentorCard.classList.add("mentor-slide");
        const bookedSlotsLen = mentor.bookedSlots.length;
        var topMsg='';
        if(bookedSlotsLen === 0){
            topMsg= `<div>
                        <img src="Media/slot-machine.png" alt="slot-icon">
                    </div>
                    Only ${mentor.availableSlots.length} Slots Left`;
        }
        else if(bookedSlotsLen === mentor.availableSlots.length){
            topMsg = `<div>
            <img src="Media/slot-machine.png" alt="slot-icon"></div>
            Booked`;
        }
        else{
            topMsg = `<div>
            <img src="Media/slot-machine.png" alt="slot-icon"></div>
            ${parseInt(mentor.availableSlots.length)-parseInt(bookedSlotsLen)} Slots Left`;
        }
        if(topMsg !==''){
            const topMsgDiv = document.createElement("div");
            topMsgDiv.classList.add("legend-top");
            if (topMsg.includes('Booked')) {
                topMsgDiv.classList.add("booked")
            }
            topMsgDiv.innerHTML = topMsg;
            mentorCard.appendChild(topMsgDiv);
        }
        // create mentor start
        const mentor_start = document.createElement('div');
        mentor_start.classList.add('mentor-start');
        // create mentor image
        const mentorImageDiv = document.createElement("div");
        mentorImageDiv.classList.add("mentor-image");
        mentorImageDiv.innerHTML = `<a href="profile.html?id=${mentor.id}" style="position: relative;" data-mentor-id="${mentor.id}">
                            <img src="${mentor.image}" alt="mentor pic" class="wid-100 h-100">
                            <div></div>
                        </a>`;
        mentor_start.appendChild(mentorImageDiv);
        // end mentor image
        const mentor_description = document.createElement('div');
        mentor_description.classList.add('mentor-description');
        // create name
        const nameDiv = document.createElement("div");
        nameDiv.classList.add("m-name");
        nameDiv.innerHTML = `<a href="profile.html?id=${mentor.id}" data-mentor-id="${mentor.id}">
                                <h3>${mentor.name}</h3>
                            </a>
                            <div class="respond">
                                    <img src="Media/auto-reply.png" alt="">
                                    ${mentor.typeOfRespond}
                            </div>`
        mentor_description.appendChild(nameDiv);
        // end name
        // create designation div
        const desgDiv = document.createElement('div');
        desgDiv.classList.add('m-deg');
        desgDiv.innerHTML = `<span>${mentor.designation} at </span><b>${mentor.where}</b>`;
        mentor_description.appendChild(desgDiv);
        // end designation
        // create experience
        const expDiv = document.createElement('div');
        expDiv.classList.add('m-exp');
        expDiv.innerHTML = `<span>${mentor.experience}</span>`;
        mentor_description.appendChild(expDiv);
        // end experience
        // create star rating
        const starDivCont = document.createElement('div');
        starDivCont.classList.add('m-star');
        const starInnerDivCont = document.createElement('div');
        for (let index = 0; index < parseInt(mentor.rating.star); index++) {
            const imgElemnt = document.createElement('img');
            imgElemnt.src = "Media/star.png";
            imgElemnt.alt = "star";
            starInnerDivCont.appendChild(imgElemnt);            
        }
        starDivCont.appendChild(starInnerDivCont);
        const spanStar = document.createElement('span');
        spanStar.innerHTML = `<b>${mentor.rating.star}</b> (${mentor.rating.review} review)`;
        starDivCont.appendChild(spanStar);
        mentor_description.appendChild(starDivCont);
        // end star rating
        // create career section
        const careerContainer = document.createElement("div");
        careerContainer.classList.add("m-career");
        careerContainer.innerHTML ="<h3>Career Guidelines: </h3";
        const careerInnerContainer = document.createElement("div");
        mentor.guidance.forEach(guide => {
            const spanElemnt = document.createElement("span");
            spanElemnt.textContent = guide;
            careerInnerContainer.appendChild(spanElemnt);
        });
        // end creation of career section
        // add inner slot conatiner in outer slot conatiner
        careerContainer.appendChild(careerInnerContainer);
        // add slot conatiner in mentor Card div
        mentor_description.appendChild(careerContainer);
        // show available slots
        const slotsContainer = document.createElement("div");
        slotsContainer.classList.add("m-slots");
        slotsContainer.innerHTML ="<h3>Available Time Slots</h3>";
        const slotInnerContainer = document.createElement("div");
        mentor.availableSlots.forEach(slot => {
            const slotButton = document.createElement("button");
            slotButton.setAttribute('type','button');
            slotButton.classList.add("slot");
            slotButton.textContent = slot;

            // Check if slot is already booked
            if (mentor.bookedSlots.includes(slot)) {
                slotButton.classList.add("booked");
                slotButton.textContent = "Booked";
            }

            // Add event listener to book the slot
            slotButton.addEventListener("click", () => {
                bookSlot(mentor.id, slot);
            });

            slotInnerContainer.appendChild(slotButton);
        });
        // end creation of availableSlots
        // add inner slot conatiner in outer slot conatiner
        slotsContainer.appendChild(slotInnerContainer);
        // add slot conatiner in mentor Card div
        mentor_description.appendChild(slotsContainer);
        // create profile view button
        const profile_view = document.createElement("div");
        profile_view.classList.add("view-div");
        profile_view.innerHTML=`<div><span>Free</span></div> <a href="profile.html?id=${mentor.id}" data-mentor-id="${mentor.id}"><button type="button">View Profile</button></a>`;
        // add profile button in mentor Card div
        mentor_description.appendChild(profile_view);
        mentor_start.appendChild(mentor_description);
        mentorCard.appendChild(mentor_start);
        // add mentor Card div in main mentor div
        mentorList.appendChild(mentorCard);
    });
}

// Book a slot
export function bookSlot(mentorId, slot) {
    console.log(mentorId);
    console.log(slot);
    
    const mentor = allmentors.find(m => m.id === mentorId);

    // Mark the slot as booked
    mentor.bookedSlots.push(slot);

    // Optionally, save booking data to localStorage
    localStorage.setItem("selectedMentors", JSON.stringify(allmentors));
    const pathUrl = window.location.href;
    if (pathUrl.includes('mentorship.html')) { 
        // Redisplay mentors with updated booking status
        showAllMentors();
    }
    else{
        return true;
    }

    // Show confirmation alert
    alert(`Now,You have successfully booked ${slot} with ${mentor.name}.`);
}

// Load data from localStorage if available
export function loadMentors() {
    const storedMentors = localStorage.getItem("selectedMentors");
    if (storedMentors) {
        allmentors.forEach((mentor, index) => {
            allmentors[index] = JSON.parse(storedMentors)[index];
        });
    }
}

// load content on page open
const pathUrl = window.location.href;
if (pathUrl.includes('mentorship.html')) { 
    window.onload = () => {
        loadMentors();
        showAllMentors();
    };
}
