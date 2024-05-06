// See also https://stackoverflow.com/questions/37302958/d3-sankey-minimize-link-crossing

const Data_prod = {
  nodes: [
    // level 1    
    { name: "Agility Game Knowledge", color: "red", url: "/web" },
    //{ name: "B", color: "yellow", url: "https://www.google.com/search?q=B" },
    //{ name: "C", color: "blue", url: "https://www.google.com/search?q=C" },
    // level 2
    //{ name: "D", color: "green", url: "https://www.google.com/search?q=D" },
    //{ name: "E", color: "purple", url: "https://www.google.com/search?q=E" },
    { name: "Box", color: "green", url: "/box" },
    { name: "Smiley", color: "orange", url: "/smiley" },
    { name: "Heart", color: "purple", url: "/heart" },
    { name: "Arrows", color: "yellow", url: "/arrows" },
    // level 3
    //{ name: "F", color: "cyan", url: "https://www.google.com/search?q=F" },
    //{ name: "G", color: "yellow", url: "https://www.google.com/search?q=G" },
    // { name: "Build Bamboo Plan Worker", color: "blue", url: ":8080" },   
    { name: "Parts", color: "orange", url: "/grid?type=parts" },
    { name: "Products", color: "purple", url: "/grid?type=products" },
    { name: "Customers", color: "green", url: "/grid?type=customers" },
    { name: "Employees", color: "violet", url: "/grid?type=employees" },
    { name: "People", color: "cyan", url: "/grid?type=people" },
    { name: "Suppliers", color: "yellow", url: "/grid?type=suppliers" },
    { name: "Purposes", color: "orange", url: "/grid?type=purposes" },
    { name: "Practices", color: "cyan", url: "/grid?type=practices" },
    { name: "Principles", color: "green", url: "/grid?type=principles" },
    { name: "Architecture", color: "orange", url: "/grid?type=architecture" },
    { name: "Engineering", color: "purple", url: "/grid?type=engineering" },
    { name: "Processes", color: "green", url: "/grid?type=processes" }
    // level 4    
  ],
  links: [
    { source: "Agility Game Knowledge", target: "Box", value: 100 },
    { source: "Agility Game Knowledge", target: "Smiley", value: 100 },
    { source: "Agility Game Knowledge", target: "Heart", value: 100 },
    { source: "Agility Game Knowledge", target: "Arrows", value: 100 },
    { source: "Box", target: "Parts", value: 100 },
    { source: "Box", target: "Products", value: 100 },
    { source: "Smiley", target: "Customers", value: 100 },
    { source: "Smiley", target: "Employees", value: 100 },
    { source: "Smiley", target: "People", value: 100 },
    { source: "Smiley", target: "Suppliers", value: 100 },
    { source: "Heart", target: "Purposes", value: 100 },
    { source: "Heart", target: "Practices", value: 100 },
    { source: "Heart", target: "Principles", value: 100 },
    { source: "Arrows", target: "Architecture", value: 100 },
    { source: "Arrows", target: "Engineering", value: 100 },
    { source: "Arrows", target: "Processes", value: 100 }
  ],
  units: "TWh"
};

const Data_dev = {
  nodes: [
    // level 1    
    { name: "Agility Game Knowledge", color: "red", url: "/web" },
    //{ name: "B", color: "yellow", url: "https://www.google.com/search?q=B" },
    //{ name: "C", color: "blue", url: "https://www.google.com/search?q=C" },
    // level 2
    //{ name: "D", color: "green", url: "https://www.google.com/search?q=D" },
    //{ name: "E", color: "purple", url: "https://www.google.com/search?q=E" },
    { name: "Box", color: "green", url: "/box" },
    { name: "Smiley", color: "orange", url: "/smiley" },
    { name: "Heart", color: "purple", url: "/heart" },
    { name: "Arrows", color: "yellow", url: "/arrows" },
    // level 3
    //{ name: "F", color: "cyan", url: "https://www.google.com/search?q=F" },
    //{ name: "G", color: "yellow", url: "https://www.google.com/search?q=G" },
    // { name: "Build Bamboo Plan Worker", color: "blue", url: ":8080" },   
    { name: "Parts", color: "orange", url: "/grid?type=parts" },
    { name: "Products", color: "purple", url: "/grid?type=products" },
    { name: "Customers", color: "green", url: "/grid?type=customers" },
    { name: "Employees", color: "violet", url: "/grid?type=employees" },
    { name: "People", color: "cyan", url: "/grid?type=people" },
    { name: "Suppliers", color: "yellow", url: "/grid?type=suppliers" },
    { name: "Purposes", color: "orange", url: "/grid?type=purposes" },
    { name: "Practices", color: "cyan", url: "/grid?type=practices" },
    { name: "Principles", color: "green", url: "/grid?type=principles" },
    { name: "Architecture", color: "orange", url: "/grid?type=architecture" },
    { name: "Engineering", color: "purple", url: "/grid?type=engineering" },
    { name: "Processes", color: "green", url: "/grid?type=processes" }
    // level 4    
  ],
  links: [
    { source: "Agility Game Knowledge", target: "Box", value: 100 },
    { source: "Agility Game Knowledge", target: "Smiley", value: 100 },
    { source: "Agility Game Knowledge", target: "Heart", value: 100 },
    { source: "Agility Game Knowledge", target: "Arrows", value: 100 },
    { source: "Box", target: "Parts", value: 100 },
    { source: "Box", target: "Products", value: 100 },
    { source: "Smiley", target: "Customers", value: 100 },
    { source: "Smiley", target: "Employees", value: 100 },
    { source: "Smiley", target: "People", value: 100 },
    { source: "Smiley", target: "Suppliers", value: 100 },
    { source: "Heart", target: "Purposes", value: 100 },
    { source: "Heart", target: "Practices", value: 100 },
    { source: "Heart", target: "Principles", value: 100 },
    { source: "Arrows", target: "Architecture", value: 100 },
    { source: "Arrows", target: "Engineering", value: 100 },
    { source: "Arrows", target: "Processes", value: 100 }
  ],
  units: "TWh"
};

const Data = process.env.NODE_ENV === `development` ? Data_dev : Data_prod;

export default Data;