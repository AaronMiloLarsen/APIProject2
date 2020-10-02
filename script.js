
// //CALENDAR API
const baseURL = 'https://calendarific.com/api/v2/holidays'
// const key = 'eb95acc5c12b1883a250ee52292a18aa7b0dbd99'
const key = 'c287c3661013600aae76ecfb4b7eb040e5ba0432'
const idLabel = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const idLabelTwo = ['aa', 'bb', 'cc', 'dd', 'ee', 'ff', 'gg', 'hh', 'ii', 'jj', 'kk', 'll', 'mm', 'nn', 'oo', 'pp', 'qq', 'rr', 'ss', 'tt', 'uu', 'vv', 'ww', 'xx', 'yy', 'zz']
let i = 0;
let iI = 0;

// ELEMENT SELECTORS
const displayList = document.querySelector('.list-group');
const tabContent = document.querySelector('.tab-content');
const holidaySearchForm = document.querySelector('form');
const countrySelector = document.querySelector('#country-picker');
const monthSelector = document.querySelector('#month-picker');
const daySearch = document.querySelector('#day-picker')
const yearSearch = document.querySelector('#year-picker');
const searchBtn = document.querySelector('#submit');



// ELEMENT STYLE
displayList.style.visibility = 'hidden';


// EVENT LISTENER
holidaySearchForm.addEventListener('submit', fetchHolidays)
holidaySearchForm.addEventListener('submit', addToI)

//LABELING ADD FUNCTION
function addToI (e) {
    i++;
    
};

//FETCH HOLIDAY

function fetchHolidays(e) {
    
    e.preventDefault();
    let url = `${baseURL}?api_key=${key}`
    
    displayList.style.visibility = 'visible';
    
    if (countrySelector.value !== '') {
        url += '&country=' + countrySelector.value;
    }
    
    if (monthSelector.value !== '') {
        url += '&month=' + monthSelector.value;
    }
    
    if (daySearch.value !== '') {
        url += '&day=' + daySearch.value;
    }
    
    if (yearSearch.value !== '') {
        url += '&year=' + yearSearch.value;
    }
    
    fetch(url) 
    .then(function (result) {      
        return result.json();  
    })
    .then(function (json) {  
        displayHolidays(json);   
    });
};

//DISPLAY HOLIDAY

function displayHolidays(json) {
    console.log(json);
    
    let i = 0;
    let iI = 0;

    while (displayList.firstChild) {
        displayList.removeChild(displayList.firstChild);
    }
    
    while (tabContent.firstChild) {
        tabContent.removeChild(tabContent.firstChild);
    }
    //  if (holidayObj.response.holidays.length = '0') {
    //     let div = document.createElement('div');
        
    //  }
    let holidayObj = json
    
    for (let n = 0; n < holidayObj.response.holidays.length; n++) {

        let holidayName = holidayObj.response.holidays[n].name
        let holidayDate = holidayObj.response.holidays[n].date.iso
        let holidayInfo = holidayObj.response.holidays[n].description
        let holidayType = holidayObj.response.holidays[n].type[0]
        
            let newTab = document.createElement('a');
            newTab.className = 'list-group-item list-group-item-action'
            newTab.setAttribute("data-toggle", 'list')
            newTab.role = "tab"
            newTab.innerText = holidayObj.response.holidays[n].name
            
            let pane = document.createElement('div');
            let paneHeader = document.createElement('h2');
            let date = document.createElement('span');
            let description = document.createElement('p');
            let type = document.createElement('span');
            let hr = document.createElement('hr');
            
            
            pane.className = 'tab-pane fade'
            pane.setAttribute("role", 'tabpanel')
            paneHeader.innerText = `${holidayName}`;
            date.innerText = `Celebrated on ${holidayDate}`;
            date.className =  "badge badge-primary";
            description.innerText = holidayInfo;
            description.style.fontSize = '1.5rem';
            description.style.fontWeight = "5";
            type.className = "badge badge-primary";
            type.innerText = 'Type of Holiday: ' + holidayType;
            type.style.fontSize = '1rem';
            date.style.fontSize = '1rem';
            hr.className = 'new';
            
            // ID LABEL LOOPS

            if (idLabel.length = holidayObj.response.holidays.length) {
                newTab.id = `${idLabel[i]}`;
                newTab.href = `#list-${idLabel[i]}`;
                newTab.setAttribute("aria-control", `${idLabel[i]}`);
                pane.id = `list-${idLabel[i]}`;
                pane.setAttribute("aria-labelledby", `${idLabel[i]}`);
                i++;
            };
            
            if (i > 26) {
                newTab.id = `${idLabelTwo[iI]}`;
                newTab.href = `#list-${idLabelTwo[iI]}`;
                newTab.setAttribute("aria-control", `${idLabelTwo[iI]}`);
                pane.id = `list-${idLabelTwo[iI]}`;
                pane.setAttribute("aria-labelledby", `${idLabelTwo[iI]}`);
                iI++;
            };

          
            
            displayList.appendChild(newTab);
            tabContent.appendChild(pane);
            pane.appendChild(paneHeader);
            // pane.appendChild(date);
            pane.appendChild(hr);
            pane.appendChild(description);
            pane.appendChild(hr);
            pane.appendChild(type);
            pane.appendChild(date);
            
        };        
        
    };
    
    // newTab.setAttribute("aria-control", `${holidayName.replace(/ /g,"").replace(/'/g,"").replace(/./g,"")}`)
    //  };
    // if (holidayInfo.length > 70) {
        //     description.style.fontSize = '2rem'
        // } else if (holidayInfo.length < 40) {
            //     description.style.fontSize = '4em'
            // } else {
                //     description.style.fontSize = '2rem'
                // }
                // pane.setAttribute("aria-labelledby", `${holidayName.replace(/ /g,"").replace(/'/g,"").replace(/./g,"").replace(/./g,"")}`)
                // pane.id = `list-${holidayName.replace(/ /g,"").replace(/'/g,"").replace(/./g,"")}`
                // newTab.href = `#list-${holidayName.replace(/ /g,"").replace(/'/g,"").replace(/./g,"")}`
                // newTab.id = `${holidayName.replace(/ /g,"").replace(/'/g,"").replace(/()/g,"").replace(/./g,"")}`
                // tabContent.style.visibility = 'visible';
                // tabContent.style.visibility = 'hidden';