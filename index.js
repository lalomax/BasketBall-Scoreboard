const markerHome = document.getElementById("home-result")
const markerGuest = document.getElementById("guest-result")

put = (e) => { //e represents the current object, on wich user interacts
  if (e.name === "home") { 
    markerHome.innerHTML = parseInt(markerHome.innerHTML) + parseInt(e.value)
  } else {
    markerGuest.innerHTML = parseInt(markerGuest.innerHTML) + parseInt(e.value)
  }
}

make = (e) => { 
    if (e.name === "home") {
    markerHome.innerHTML = "0"
  } else {
    markerGuest.innerHTML = "0"
  }
}