import "react-google-reviews/dist/index.css";

export function ReviewsPage({}) {
  const myHeaders = new Headers();
  const myInit: RequestInit = {
    method: "GET",
    headers: myHeaders,
    mode: "cors",
    cache: "default",
  };
  function fetchReviews() {
    const myRequest = new Request(
      `https://places.googleapis.com/v1/places/ChIJs5ydyTiuEmsR0fRSlU0C7k0?fields=id,displayName&key=` +
        process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
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
  return <button onClick={fetchReviews}>asdfasdf</button>;
}
