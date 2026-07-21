
const categories = [
["home","Sofas","3-seater, 2-seater, sectionals, sofa-cum-beds and coordinated sets."],
["home","Recliners & Lounge Chairs","Manual, motorised, single and multi-seat comfort solutions."],
["home","Beds & Bedroom Sets","King, queen, upholstered, hydraulic-storage and complete bedroom sets."],
["home","Wardrobes","Sliding, hinged, mirror, walk-in and customised modular wardrobes."],
["home","Dining Tables","Wood, glass, stone and marble-finish dining collections."],
["home","Centre & Side Tables","Nesting, occasional, console, coffee and end tables."],
["home","TV & Display Units","Wall units, media consoles, display storage and coordinated panels."],
["home","Dressers & Storage","Dressers, chest of drawers, shoe storage and utility cabinets."],
["home","Mattresses","Comfort and support options for different sleep preferences."],
["home","Kids Furniture","Beds, study desks, storage and playful room solutions."],
["home","Outdoor Furniture","Balcony, terrace, garden and leisure seating."],
["office","Executive Tables","Statement desks, side returns and coordinated executive storage."],
["office","Manager & Staff Tables","Functional individual desks for modern workplaces."],
["office","Workstations","Linear, cluster, cubicle and collaborative workstation systems."],
["office","Office Chairs","High-back, mid-back, task, computer and ergonomic mesh chairs."],
["office","Visitor & Training Chairs","Visitor, conference, training, cafeteria and multipurpose seating."],
["office","Conference Tables","Boardroom, meeting and modular conference solutions."],
["office","Reception Counters","Customisable reception desks and visitor-area coordination."],
["office","Storage & Filing","Pedestals, filing cabinets, bookcases, credenzas and compactors."],
["office","Cabins & Partitions","Modular cabins, partitions, counters and space-division systems."],
["office","Office Sofas","Reception, lounge and executive seating."],
["institutional","Classroom Furniture","Student desks, teacher tables, chairs and storage."],
["institutional","Hostel Furniture","Bunk beds, study units, wardrobes and room packages."],
["institutional","Canteen Furniture","Dining tables, benches, cafeteria chairs and service-area furniture."],
["institutional","Hospital Furniture","Beds, couches, stretchers, trolleys, lockers and clinical furniture."],
["institutional","Library Furniture","Book stacks, reading tables, chairs, counters and display units."],
["institutional","Auditorium Seating","Fixed seating, writing tablets and tiered-space solutions."],
["institutional","Laboratory Furniture","Work benches, island tables, storage and instrument tables."],
["institutional","Hotel Furniture","Guest-room, lounge, restaurant, reception and public-area furniture."],
["institutional","Stadium & Public Seating","Durable seating and public-space furniture."],
["institutional","Lockers & Steel Furniture","Personal lockers, almirahs, racks and wrought-iron furniture."],
["furnishing","Curtains","Custom stitching, tracks, rods, sheers, blackout and decorative curtains."],
["furnishing","Blinds","Roller, vertical, zebra, Roman and motorised blind systems."],
["furnishing","Wallpaper","Residential, commercial, textured and customised wallcoverings."],
["furnishing","Wooden Flooring","Laminate, engineered and coordinated floor-finishing solutions."],
["furnishing","Vinyl Flooring","Commercial, healthcare, institutional and residential vinyl floors."],
["furnishing","Carpets","Broadloom, rugs, runners and modular carpet tiles."],
["furnishing","Wall Panels & Louvers","Decorative, fluted, acoustic and feature-wall systems."],
["furnishing","Sofa Fabrics","Upholstery fabrics across textures, colours and performance levels."],
["furnishing","Bedding & Linens","Bedsheets, comforters, pillows, towels and coordinated linen."],
["furnishing","Window Screens","Practical screen and shading solutions."],
["av","Interactive Flat Panels","Interactive displays for education, training and collaboration."],
["av","Professional LED Walls","Indoor and outdoor large-format display solutions."],
["av","Video Conferencing","AI cameras, PTZ cameras, soundbars, microphones and room integration."],
["av","Smart Classrooms","Interactive learning, digital podiums, audio and content systems."],
["av","Digital Signage","Notice boards, kiosks, wayfinding and commercial display networks."],
["av","Control Rooms","Command-centre displays, monitoring and integrated control systems."],
["av","Language Labs","Technology-enabled language learning environments."],
["av","Audio & PA Systems","Speakers, microphones, amplifiers, DSP and public-address systems."],
["av","Recording & Streaming","Lecture capture, broadcasting, recording and streaming solutions."],
["av","Queue Management","Token, self-service, payment and customer-flow systems."]
];
const grid=document.getElementById("catalogueGrid");
const label={home:"Home Furniture",office:"Office Furniture",institutional:"Institutional",furnishing:"Furnishings",av:"Audio Visual"};
function render(filter="all"){
 grid.innerHTML=categories.filter(c=>filter==="all"||c[0]===filter).map(c=>`
 <article class="product-category" data-group="${c[0]}">
  <small>${label[c[0]]}</small><h3>${c[1]}</h3><p>${c[2]}</p>
  <a target="_blank" rel="noopener" href="https://wa.me/919334999123?text=${encodeURIComponent("Hello Furniture World, I am interested in "+c[1]+".")}">Enquire about ${c[1]} →</a>
 </article>`).join("");
}
render();
document.querySelectorAll(".filter").forEach(btn=>btn.addEventListener("click",()=>{
 document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));btn.classList.add("active");render(btn.dataset.filter);
}));
const toggle=document.querySelector(".menu-toggle"),nav=document.querySelector(".main-nav");
toggle.addEventListener("click",()=>{nav.classList.toggle("open");toggle.setAttribute("aria-expanded",nav.classList.contains("open"))});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".section-head,.statement-grid,.purchase-card,.visit-info").forEach(el=>{el.classList.add("reveal");observer.observe(el)});
