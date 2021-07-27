//Fetch Biryani images using the Biryani API
function getBiryaniImage () {
    fetch("https://biriyani.anoram.com/get", {
    method: "GET",
})
.then((response) =>  {
    return response.json();
})
.then((data) => {
    const biryaniContainer = document.querySelector(".biryani");
    for (let i in data) {
        biryaniContainer.innerHTML = `<img src="${data[i]}" alt="biryani-image" class="biryaniImage">`;
    }
})
.catch((error) => {console.log(error)})
}
getBiryaniImage();

