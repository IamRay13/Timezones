function updateClock() {
     const stateDropdown = document.getElementById('stateDropdown');
     const timeZone = stateDropdown.value;
     const clockDiv = document.getElementById('clock');
    if (timeZone) {
         setInterval(() => {
             const now = new Date();
             const options = { timeZone, hour: '2-digit', minute: '2-digit', second: '2-digit' };
             const timeString = now.toLocaleTimeString('en-US', options);
             clockDiv.textContent = `Current time in ${stateDropdown.options[stateDropdown.selectedIndex].text}: ${timeString}`;
         }, 1000);
     } else {
         clockDiv.textContent = '';
     }
 }
  
