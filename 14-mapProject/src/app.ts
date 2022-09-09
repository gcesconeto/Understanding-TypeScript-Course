// import axios from 'axios';

// const form = document.querySelector('form')!;
// const addressInput = document.getElementById('address')! as HTMLInputElement;

// type GeocodingResponse = {
//   results: {geometry: { location: {lat: number; lng: number}}}[];
//   status: 'OK' | 'ZERO_RESULTS';
// };

// async function searchAddressHandler(event: Event) {
//   event.preventDefault();
//   const searchInput = addressInput.value;
//   try {
//     const response = await axios.get<GeocodingResponse>(
//       `${BASE_URL}${encodeURI(searchInput)}&key=${KEY}`
//     );

//     if (response.data.status !== 'OK') throw new Error('Request error')

//     const coordinates = response.data?.results[0]?.geometry?.location;

//     const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
//       center: coordinates,
//       zoom: 16,
//     });

//     new google.maps.Marker({ position: coordinates, map: map })

//     console.log(map);

//   } catch (error) {
//     alert(error);
//     console.log(error);
//   }

// }

// form.addEventListener('submit', searchAddressHandler)