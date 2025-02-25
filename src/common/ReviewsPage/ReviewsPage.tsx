import "react-google-reviews/dist/index.css";

export function ReviewsPage({}) {
  const myHeaders = new Headers();
  const myInit: RequestInit = {
    method: "POST",
    headers: myHeaders,
    mode: "cors",
    cache: "default",
  };
function fetchReviews() {
  //   const myRequest = new Request(
  //     `https://places.googleapis.com/v1/places/ChIJs5ydyTiuEmsR0fRSlU0C7k0?fields=id,displayName&key=` +
  //       process.env.GOOGLE_REVIEWS_API_KEY,
  //     myInit
  //   );
    const myRequest = new Request(
      `https://maps.googleapis.com/maps/api/place/details/json
  ?fields=name%2Crating%2Cformatted_phone_number
  &place_id=ChIJs5ydyTiuEmsR0fRSlU0C7k0
  &key=` +
        process.env.GOOGLE_REVIEWS_API_KEY,
      myInit
    );
    const data = fetch(myRequest)
      .then(function (response) {
        return response.blob();
      })
      .then(function (myBlob) {
        console.log(myBlob);
      });
    console.log("data",data);
  }
  return 
  <>
  <button onClick={fetchReviews}>asdfasdf</button>;
  <script async
    src={`https://maps.googleapis.com/maps/api/js?key=`+process.env.GOOGLE_REVIEWS_API_KEY +`&loading=async&libraries=places&callback=initMap`}>
</script>
  </>
}
