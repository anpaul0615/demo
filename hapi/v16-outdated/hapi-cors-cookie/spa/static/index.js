/**
 * Fetch Function
 */
function fetchFunc(url,opt){
    return fetch(url,opt).then(function(response){
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(err){
        console.log(err);
    });
}
/* Make New Session */
function makeSession(){
    var url = 'https://127.0.0.1:8888/sessions';
    var opt = {
        'method': 'POST',
        'credentials': 'include',  // omit, same-origin, include
    };
    fetchFunc(url,opt);
};

/* Touch Session */
function touchSession(){
    var url = 'https://127.0.0.1:8888/sessions/me';
    var opt = {
        'method': 'GET',
        'credentials': 'include',  // omit, same-origin, include
    };
    fetchFunc(url,opt);
};