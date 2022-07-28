


const $input = $("input[name*='owner-search']");
const $userform = $("#all-cars");
const $ownerSearch = $("#owner-search");


/// - - - QUERY ALL CARS
$userform.submit(function (event) {
    event.preventDefault();
    $.get("/cars", (data) => {
        const result = JSON.stringify(data);
        document.write(result);
        //console.log(data);
    });
});

/// - - - OWNER QUERY
$ownerSearch.submit(function (event) {
    event.preventDefault();
    const input = $input.val();
    console.log("input: ", input);
    $.get(`/owners/${input}`, (data) => {
        const result = JSON.stringify(data);
        console.log(data);
        document.write(result);
        //console.log(data);
    });
});




    // let $result = $(`<div class="result"></div>`);
    // $row.html(`${data}`);


// fetch('http://example.com/movies.json')
//   .then((response) => response.json())
//   .then((data) => console.log(data));