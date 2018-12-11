function renderEmployees() {
    var the_table = document.getElementById('data_list').getElementsByTagName('tbody')[0];
    the_table
    employees.forEach(function() {

    });
}

function loadData() {
    loadCountries();
    loadEmployees();
}

function loadCountries() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange=function()
    {
        if(xhr.readyState == 4)
        {
            countries = JSON.parse(xhr.responseText);
        } 
    }; 

    xhr.open("GET", "dummy_data/countries_data.json" , true);
    xhr.send(null); 
}

function loadEmployees() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange=function()
    {
        if(xhr.readyState == 4)
        {
            employees = JSON.parse(xhr.responseText);
        } 
    }; 

    xhr.open("GET", "dummy_data/employees_data.json" , true);
    xhr.send(null); 
}

function addButtonToggle() {
    // hide form view
    document.getElementsByClassName('form_view')[0].classList.add('hidden')

    // show form add
    document.getElementById('form_add').parentNode.classList.remove('hidden')
}

function loadEmployee() {
    // hide form view
    document.getElementsByClassName('form_view')[0].classList.remove('hidden')

    // show form add
    document.getElementById('form_add').parentNode.classList.add('hidden')
}