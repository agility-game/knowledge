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
    { name: "Foo", color: "green", url: "/foo" },
    { name: "Bar", color: "orange", url: "/bar" },
    { name: "Another Service (Placeholder)", color: "purple", url: "https://www.google.com/search?q=Another+Service" },
    { name: "Yet Another Service (Placeholder)", color: "yellow", url: "https://www.google.com/search?q=Yet+Another+Service" },
    // level 3
    //{ name: "F", color: "cyan", url: "https://www.google.com/search?q=F" },
    //{ name: "G", color: "yellow", url: "https://www.google.com/search?q=G" },
    // { name: "Build Bamboo Plan Worker", color: "blue", url: ":8080" },
    // { name: "Business Applications Management (BAM)", color: "brown", url: ":4002" },    
    // { name: "Modeler", color: "orange", url: ":8091" },
    // { name: "Chat", color: "purple", url: ":7080" },
    // { name: "Content Management Systems (CMS)", color: "green", url: ":1436" },
    // { name: "Infrastructure Management (IM)", color: "violet", url: ":50" },
    //{ name: "Knowledge Management (KM)", color: "cyan", url: ":6000" }
    // level 4    
  ],
  links: [
    { source: "Agility Game Knowledge", target: "Foo", value: 100 },
    { source: "Agility Game Knowledge", target: "Bar", value: 100 },
    { source: "Agility Game Knowledge", target: "Another Service (Placeholder)", value: 100 },
    { source: "Agility Game Knowledge", target: "Yet Another Service (Placeholder)", value: 100 }
    // { source: "Bar", target: "Modeler", value: 100 },
    // { source: "Agility Game Knowledge", target: "Chat", value: 100 },
    // { source: "Agility Game Knowledge", target: "Content Management Systems (CMS)", value: 100 },
    // { source: "Agility Game Knowledge", target: "Infrastructure Management (IM)", value: 100 },
    // { source: "Agility Game Knowledge", target: "Knowledge Management (KM)", value: 100 }  
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
    { name: "Foo", color: "green", url: "/d2iq" },
    { name: "Bar", color: "orange", url: "/ddp-arch" },
    { name: "Another Service (Placeholder)", color: "purple", url: "https://www.google.com/search?q=Another+Service" },
    { name: "Yet Another Service (Placeholder)", color: "yellow", url: "https://www.google.com/search?q=Yet+Another+Service" },
    // level 3
    //{ name: "F", color: "cyan", url: "https://www.google.com/search?q=F" },
    //{ name: "G", color: "yellow", url: "https://www.google.com/search?q=G" },
    // { name: "Build Bamboo Plan Worker", color: "blue", url: ":8080" },
    // { name: "Business Applications Management (BAM)", color: "brown", url: ":4002" },    
    // { name: "Modeler", color: "orange", url: ":8091" },
    // { name: "Chat", color: "purple", url: ":7080" },
    // { name: "Content Management Systems (CMS)", color: "green", url: ":1436" },
    // { name: "Infrastructure Management (IM)", color: "violet", url: ":5080" },
    // { name: "Knowledge Management (KM)", color: "cyan", url: ":6001" } 
    // level 4    
  ],
  links: [
    { source: "Agility Game Knowledge", target: "Foo", value: 100 },
    { source: "Agility Game Knowledge", target: "Bar", value: 100 },
    { source: "Agility Game Knowledge", target: "Another Service (Placeholder)", value: 100 },
    { source: "Agility Game Knowledge", target: "Yet Another Service (Placeholder)", value: 100 }
    // { source: "Agility Game Knowledge", target: "Business Process Management (BPM)", value: 100 },
    // { source: "Business Process Management (BPM)", target: "Modeler", value: 100 },
    // { source: "Agility Game Knowledge", target: "Chat", value: 100 },
    // { source: "Agility Game Knowledge", target: "Content Management Systems (CMS)", value: 100 },
    // { source: "Agility Game Knowledge", target: "Infrastructure Management (IM)", value: 100 },
    // { source: "Agility Game Knowledge", target: "Knowledge Management (KM)", value: 100 }
  ],
  units: "TWh"
};

const Data = process.env.NODE_ENV === `development` ? Data_dev : Data_prod;

export default Data;
