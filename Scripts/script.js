const month = document.querySelector('#month');
const monthName=document.querySelector('#monthname');
const select = document.querySelector('#theme');
const html = document.querySelector('html');
document.body.style.padding = '10px';
const list = document.querySelector('ul');

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.onchange = function() {
  ( select.value === 'black' ) ? update('black','white') : update('white','black');
}

function buildCalander(){
	monthName.textContent=month.value;
	let choice=month.value;
	 let days = 31;
	 if(choice === 'February') {
	 days = 28;
	 } else if(choice === 'April' || choice === 'June' || choice === 'September'|| choice === 'November') {
	 days = 30;
	 }

	 createCalendar(days, choice);
	}

function createCalendar(days, choice) {
	 list.innerHTML = '';
	 for(let i = 1; i <= days; i++) {
	 const listItem = document.createElement('li');
	 listItem.textContent = i;
	 list.appendChild(listItem);
	 }
	 }

month.addEventListener('change',buildCalander);