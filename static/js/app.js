// from data.js
var tableData = data;

// YOUR CODE HERE!
// select tbody
let tbody = d3.select("tbody")
function createTable(tableData){
tbody.html("")
tableData.forEach(ufoSighting => {
    var tableRow = tbody.append("tr")
    Object.values(ufoSighting).forEach(value => {
        tableRow.append("td").text(value)
    })
})}
createTable(tableData)
// filtering
// Select the button


// Complete the event handler function for the form
function runFilter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("input");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(data);

  var filteredData = data.filter(data => data.datetime == inputValue);

  console.log(filteredData);

// filteredData.forEach(dataFilter => {
//     Object.entries(dataFilter).foreach(([key,value]) => {
//         tbody.append("tr").append("td").text(value)
//     })
createTable(filteredData)
}
var button = d3.selectAll("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers 
button.on("click", runFilter);
form.on("submit",runFilter);