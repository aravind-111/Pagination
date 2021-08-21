async function main_data(range1, range2) {
    const data = await fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
    const array_main = await data.json();
      document.body.innerHTML = ``;
      table_head();
    
      for (i=0; i<array_main.length; i++) {
        if ( i>=range1 && i<=range2 ) {
          user_details(array_main[i]);
          console.log(array_main[i]);
        }
      }
    document.body.append(buttons);
  }
  
  // ---------------------------------------------------------------------
  
  function table_head() {
    const table_head = document.createElement("table")
    table_head.setAttribute("class", "table_head");
    
    table_head.innerHTML = `
    <tr>
      <th class="head">ID</th>
      <th class="head">Name</th>
      <th class="head">Email</th>
    </tr>
    `
    document.body.append(table_head);
    
   }
  
  function user_details(array) {
    
    const table = document.createElement("table")
    table.setAttribute("class", "table");
   
    table.innerHTML = `
    <tr>
      <td class="details">${array.id}</td>
      <td class="details">${array.name}</td>
      <td class="details">${array.email}</td>
    </tr>
    `
    const container = document.createElement("div");
    container.setAttribute("class", "container");
    container.append(table);
    document.body.append(container);
   
  }
  
  
  // -------------------------------------------------------------------------
  
  let n;
  
  function one() {
    main_data(0,9);
    n=1
  }
  function two() {
    main_data(10, 19);
    n=2
  }
  function three() {
    main_data(20, 29);
    n=3
  }
  function four() {
    main_data(30, 39);
    n=4
  }
  function five() {
    main_data(40, 49);
    n=5
  }
  function six() {
    main_data(50, 59);
    n=6
  }
  function seven() {
    main_data(60, 69);
    n=7
  }
  function eight() {
    main_data(70, 79);
    n=8
  }
  function nine() {
    main_data(80, 89);
    n=9
  }
  function ten() {
    main_data(90, 99);
    n=10
  }
  
  let num = {
    1:one,
    2:two,
    3:three,
    4:four,
    5:five,
    6:six,
    7:seven,
    8:eight,
    9:nine,
    10:ten
  }
  
  function previous() {
    if (n !== 0) {
      num[n-1]()
    }
  }
  
  function next() {
    if (n !== 10) {
      num[n+1]()
    }
  }
  
  
  // --------------------------------------------------------------------
  
  let buttons = document.createElement("div");
  buttons.setAttribute("class", "pagination")
  buttons.innerHTML = ` <br>
  <button class="previous & next" onclick="previous()">Previous</button>
  <button class="num_button" onclick="one()">1</button>
  <button class="num_button" onclick="two()">2</button>
  <button class="num_button" onclick="three()">3</button>
  <button class="num_button" onclick="four()">4</button>
  <button class="num_button" onclick="five()">5</button>
  <button class="num_button" onclick="six()">6</button>
  <button class="num_button" onclick="seven()">7</button>
  <button class="num_button" onclick="eight()">8</button>
  <button class="num_button" onclick="nine()">9</button>
  <button class="num_button" onclick="ten()">10</button>
  <button class="previous & next" onclick="next()">Next</button>
  `
  
  document.onload(one());
  
  
  
  
  
  
  
  