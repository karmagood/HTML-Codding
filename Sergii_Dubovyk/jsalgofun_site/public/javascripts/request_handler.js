$(window).on('load', function (){
    $('#send-request').click(function () {
       const request = new XMLHttpRequest();
       var body = 'algo=' + encodeURIComponent('bubble') + '&data=' + encodeURIComponent("1, 5, 2");
       request.open('POST', '/api_sort', true);
       request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

       request.onreadystatechange = function () {
         if (request.readyState === XMLHttpRequest.DONE && request.status === 200){
             const responseData = JSON.parse(request.responseText);
             console.log("loaded");
             console.log(responseData.result);
             document.getElementById('sort-result').innerHTML = responseData.result;
         }
       };
       request.send(body);
    });
});