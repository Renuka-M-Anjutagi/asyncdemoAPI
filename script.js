


async function foo() {
    var container = document.createElement("div")
container.className ="container"

var row = document.createElement("div")
row.className ="row"
    try {
      let data = await fetch("https://restcountries.com/v3.1/all")
      let data1 = await data.json()
      for(var i =0 ; i< data1.length;i++)
    {
        var col = document.createElement("div")
        col.className = "col-md-4"
        col.innerHTML = `<div class="card" style="width: 18rem;">
        <div class="card-header">
        <h5 class="card-title">${data1[i].name.common}</h5>

        </div>
        <img src="${data1[i].flags.png}" class="card-img-top" style="max-width: 540px;" alt="...">
        <div class="card-body">
          <ul class="list-group list-group-flush">
          <li class="list-group-item">Capital: ${data1[i].capital}</li>
          <li class="list-group-item"> Region :  ${data1[i].region}</li>
          <li class="list-group-item"> Population:  ${data1[i].population}</li>
        </ul>
          
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`

        row.append(col)
        container.append(row)
        document.body.append(container)
    }
      let res = await bar();
      console.log(res);
  
  
    } catch (error) {
      console.log(error)
    }
  }
  foo();


  

