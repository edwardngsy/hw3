// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.
  
  // Retrieve the first and last name from the data file, store it in memory.
  let passengerFirstName = ride.passengerDetails.first
  let passengerLastName = ride.passengerDetails.last

  // Display the name in the console 
  console.log(`passengerFirstName: ${ride.passengerDetails.first}`)
  console.log(`passengerLastName: ${ride.passengerDetails.last}`)

  // Retrieve the phone number from the data file, store it in memory.
  let passengerPhoneNumber = ride.passengerDetails.phoneNumber

  // Display the phone number in the console 
  console.log(`passengerPhoneNumber: ${ride.passengerDetails.phoneNumber}`)

  // Retrieve the pickup location from the data file, store it in memory.
  let passengerPickUpaddress = ride.pickupLocation.address
  let passengerPickUpCity = ride.pickupLocation.city
  let passengerPickUpState = ride.pickupLocation.state
  let passengerPickUpZip = ride.pickupLocation.zip

  // Display the pickup location in the console 
  console.log(`passengerPickUp Location: ${ride.pickupLocation.address} ${ride.pickupLocation.city} ${ride.pickupLocation.state} ${ride.pickupLocation.zip} `)

  // Retrieve the dropoff location from the data file, store it in memory.
  let passengerDropOffaddress = ride.dropoffLocation.address
  let passengerDropoffCity = ride.dropoffLocation.city
  let passengerDropoffState = ride.dropoffLocation.state
  let passengerDropoffZip = ride.dropoffLocation.zip

  // Display the dropoff location in the console 
  console.log(`passengerDropoff Location: ${ride.dropoffLocation.address} ${ride.dropoffLocation.city} ${ride.dropoffLocation.state} ${ride.dropoffLocation.zip} `)

  // Retrieve the number of passengers in the party from the data file, store it in memory.
  let NumberofPassengers = ride.numberOfPassengers

  // Display the number of passengers in the console
  console.log(`Number of Passengers: ${ride.numberOfPassengers}`)

  // Retrieve passenger's service level and display their service levels accordingly.
  let luxuryservice = ride.purpleRequested
  if (luxuryservice == 1) {
    console.log(`Noober Purple Passenger: ${ride.passengerDetails.first} ${ride.passengerDetails.last}`)
  }  else if (luxuryservice ==0 && NumberofPassengers > 3) {
  console.log(`Noober XL Passenger: ${ride.passengerDetails.first} ${ride.passengerDetails.last}`)
  }  else if (luxuryservice ==0 && NumberofPassengers <=3) {
  console.log(`${ride.passengerDetails.first} ${ride.passengerDetails.last} is a Noober X passenger`)
  }
  // 🔥 YOUR CODE ENDS HERE 🔥
})
