const car = {
    Manufacturer: "Toyota",
    Make_and_Model: "Corolla AE101",
    Engine: "1.3 2E",
    Body_Type: "Sedan",
  };
  
  document.getElementById("car").innerHTML = `Manufacturer: ${car.Manufacturer} </br> Make and Model: ${car.Make_and_Model} </br> Engine: ${car.Engine} </br> Body Type: ${car.Body_Type}`;