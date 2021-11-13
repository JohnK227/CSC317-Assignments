/**
 * Change the function that is assigned to the onclick
 * attribute of the button element.
 * NOTE: for the 25 gif version, you will need to disable the 
 * same origin policy for file:// objects. The request will be
 * blocked by the browser for security reasons.
 * For Firefox you can type about:config in the URL bar, then search for security.file and toggle the value to false.
 * 
 * 
 */
 document.getElementById("getgif").onclick = getRndGifInnerHTML;

 /**
  * Get a random GIF from the GIPHY API.
  * The div and img tags will be added to the page 
  * using the innerHTML attribute.
  * @param ev 
  */
 function getRndGifInnerHTML(ev){
     function buildImageDiv(src){
         return `<div> <img src="${src}" width="200px" height="200px"></div>`;
     }
 
     ev.preventDefault();
     var options = {
             "method": "GET",
             "headers": {
                 "x-rapidapi-host": "giphy.p.rapidapi.com",
                 "x-rapidapi-key": "edaf9fe2f7mshbacb9325978c8e7p193771jsn904e929e8eb6"
         }
     };
     var url = "https://jsonplaceholder.typicode.com/albums/2/photos";
     fetch(url, options)
         .then( (response) => { return response.json() })
         .then( (json_data) => {
             console.log('sucess...');
             //console.log(json_data);
             var imgLink = json_data.data.images['downsized_large'].url;
             eleDiv = buildImageDiv(imgLink);
             var div = document.getElementById("gif-storage")
             div.innerHTML =  eleDiv + div.innerHTML;
         }).catch( (error) => {
             console.log(error);
         });
 }