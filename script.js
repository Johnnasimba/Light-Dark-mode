const toggleSwitch = document.querySelector('input[type="checkbox"');

// 
function switchTheme(event) {
    console.log(event.target.checked);
}
// Event Listener 
toggleSwitch.addEventListener('change',switchTheme)