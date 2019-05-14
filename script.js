function makeCalendar (id, year, month) {
  const days = ['пн', 'вт', 'ср', 'чт', 'пн', 'сб', 'вс'];
  const table = document.createElement('table');
  const date = new Date(year, month - 1);
  const day = date.getDay();
  const parent = document.getElementById(id);
  let startFrom;
  let dayNumber = 1;
  let daysAmount;
  let th;
  let tr;
  let td;

  for (let i = 29; i < 33; i++) {
    if (new Date(year, month - 1, i).getDate() !== i) {
      daysAmount = i - 1;
      break;
    }
  }

  if (!date.getDay()){
    startFrom = 6;
  } else {
    startFrom = date.getDay() - 1;
  }

  for (let i = 0; i <= Math.ceil((daysAmount + startFrom) / 7); i++) {
    tr = document.createElement('tr');
    table.appendChild(tr);
    for (let j = 0; j < 7; j++) {
      if (i === 0) {
        th = document.createElement('th');
        th.innerHTML = days[j];
        tr.appendChild(th);
      } else {
        td = document.createElement('td');
        tr.appendChild(td);
      }
    }
  }

const tdArray = Array.from(table.getElementsByTagName('td'));

for (let i = startFrom; i < tdArray.length; i++) {
  tdArray[i].innerHTML = dayNumber;
  dayNumber++;
  if (dayNumber > daysAmount) {
    break;
  }
}
  
parent.appendChild(table);

}

makeCalendar("wrapper", 2012, 9);