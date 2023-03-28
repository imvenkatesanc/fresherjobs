const icon = document.querySelector(".icon");
const navList = document.querySelector(".nav ul");

icon.addEventListener("click", () => {
  navList.classList.toggle("show");
});

// Sample data
const jobData = [
  {   
    title: "Web Developer",
    location: "New York", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
  },
  {   
    title: "Marketing Manager",
    location: "London", 
    description: "Nulla facilisi. Aenean id mauris sit amet augue commodo mollis."
  },
  { title: "Data Analyst", 
    location: "San Francisco", 
    description: "Sed sed ipsum libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae." },
  {
    title: "Graphic Designer",
    location: "Los Angeles",
    description: "Curabitur euismod lorem sit amet orci euismod, in mattis libero feugiat. Aenean eu felis eget nisl tincidunt efficitur."
  },
  {
    title: "Customer Service Representative",
    location: "Houston",
    description: "Pellentesque euismod lobortis diam, vel rutrum ex malesuada sit amet. Etiam congue, nibh ac finibus varius, augue eros vestibulum dolor, ut venenatis sapien dolor ac libero."
  },
  {
    title: "Sales Manager",
    location: "Denver",
    description: "In hac habitasse platea dictumst. Aliquam erat volutpat. Curabitur maximus justo quis nibh convallis malesuada."
  },
  {
    title: "Product Manager",
    location: "Seattle",
    description: "Fusce id tellus consectetur, tincidunt nisl non, bibendum eros. Sed blandit mauris mauris, eget consequat nibh elementum eu."
  },
  {
    title: "Human Resources Coordinator",
    location: "Boston",
    description: "Mauris faucibus, purus id imperdiet porttitor, turpis sapien pulvinar ex, vitae vulputate justo mauris in metus."
  },
  {
    title: "Web Developer",
    location: "Austin",
    description: "Nullam sit amet justo sit amet nibh finibus mollis. Pellentesque euismod libero sit amet massa suscipit varius."
  },
  {
    title: "Accountant",
    location: "Washington D.C.",
    description: "Donec rhoncus pharetra nisi, vel pulvinar leo ultricies vel. Integer ac euismod purus, a consequat libero."
  },
  {
    title: "Project Manager",
    location: "Atlanta",
    description: "Maecenas pharetra, urna non pharetra tristique, neque dui euismod tellus, ut vehicula nisi metus at tellus."
  },
  {
    title: "Content Writer",
    location: "Portland",
    description: "Morbi auctor bibendum felis, at pulvinar nisl accumsan eget. Aenean in elit in elit viverra pulvinar."
  }
];

// Get the container element where the cards will be added
const container = document.querySelector("#jobcontainer");

// Generate HTML for each job card using map() function
const jobCardsHTML = jobData.map((job) => {
return  `
<div class="card" id="card">
<div class="card-content" id="jobtitle">${job.title}</div>
<div class="location" id="location">${job.location}</div>
<div class="description" id="description">${job.description}</div>
<button class="subbtn" action="submit">Apply now</button>
</div>
`;
});

// Add the generated HTML to the container element
container.innerHTML = jobCardsHTML.join("");