function openTab(evt, name) {

    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(name).style.display = "block";
    evt.currentTarget.className += " active";
}

var filmsTitleContainer = document.getElementById("films-title");
var filmsTitleContainerTwo = document.getElementById("films-title-2");
var filmsTitleContainerThree = document.getElementById("films-title-3");
var filmsTitleContainerFour = document.getElementById("films-title-4");
var filmsTitleContainerFive = document.getElementById("films-title-5");
var filmsTitleContainerSix = document.getElementById("films-title-6");
var btnOne = document.getElementById("btn-1");
var btnTwo = document.getElementById("btn-2");
var btnThree = document.getElementById("btn-3");
var btnFour = document.getElementById("btn-4");
var btnFive = document.getElementById("btn-5");
var btnSix = document.getElementById("btn-6");

btnOne.addEventListener("click", function() {
    filmsTitleContainer.innerText = "";
    var request = new XMLHttpRequest();
    request.open('GET', 'https://swapi.co/api/films/');
    request.onload = function() {
        var ourData = JSON.parse(request.responseText);
        console.log(ourData.results[0]);
        console.log(request.responseText);
        renderHTML1(ourData.results);
    };
    
    request.send();
});

function renderHTML1(data) {
    var htmlString = "";
    arr1 = [];

    for (i = 0; i < data.length; i++) {
        arr1.push(data[i].title);
        arr1sorted = arr1.sort();
    }
    console.log(arr1sorted);

    function replace() {
        for (i = 0; i < data.length; i++) {
            htmlString += "<li><a href='#'>" + arr1sorted[i] + "</a></li>";
        }
    }
    replace();

    filmsTitleContainer.insertAdjacentHTML('beforeend', htmlString);
}

btnTwo.addEventListener("click", function() {
    filmsTitleContainerTwo.innerText = "";
    var request2 = new XMLHttpRequest();
    request2.open('GET', 'https://swapi.co/api/people/');
    request2.onload = function() {
        var ourData2 = JSON.parse(request2.responseText);
        console.log(ourData2.results[0]);
        console.log(request2.responseText);
        renderHTML2(ourData2.results);
    };
    
    request2.send();
});

function renderHTML2(data2) {
    var htmlString2 = "";
    console.log(data2[0].name);
    arr2 = [];
    
    for (i = 0; i < data2.length; i++) {
        arr2.push(data2[i].name);
        arr2sorted = arr2.sort();
    }
    console.log(arr2sorted);

    function replace() {
        for (i = 0; i < data2.length; i++) {
            htmlString2 += "<li><a href='#'>" + arr2sorted[i] + "</a></li>";
        }
    }
    replace();

    filmsTitleContainerTwo.insertAdjacentHTML('beforeend', htmlString2);
}

btnThree.addEventListener("click", function() {
    filmsTitleContainerThree.innerText = "";
    var request3 = new XMLHttpRequest();
    request3.open('GET', 'https://swapi.co/api/planets/');
    request3.onload = function() {
        var ourData3 = JSON.parse(request3.responseText);
        console.log(ourData3.results[0]);
        console.log(request3.responseText);
        renderHTML3(ourData3.results);
    };
    
    request3.send();
});

function renderHTML3(data3) {
    var htmlString3 = "";
    arr3 = [];

    for (i = 0; i < data3.length; i++) {
        arr3.push(data3[i].name);
        arr3sorted = arr3.sort();
    }

    function replace() {
        for (i = 0; i < data3.length; i++) {
            htmlString3 += "<li><a href='#'>" + arr3sorted[i] + "</a></li>";
        }
    }
    replace();

    filmsTitleContainerThree.insertAdjacentHTML('beforeend', htmlString3);
}

btnFour.addEventListener("click", function() {
    filmsTitleContainerFour.innerText = "";
    var request4 = new XMLHttpRequest();
    request4.open('GET', 'https://swapi.co/api/species/');
    request4.onload = function() {
        var ourData4 = JSON.parse(request4.responseText);
        console.log(ourData4.results[0]);
        console.log(request4.responseText);
        renderHTML4(ourData4.results);
    };
    
    request4.send();
});

function renderHTML4(data4) {
    var htmlString4 = "";
    arr4 = [];

    for (i = 0; i < data4.length; i++) {
        arr4.push(data4[i].name);
        arr4sorted = arr4.sort();
    }

    function replace() {
        for (i = 0; i < data4.length; i++) {
            htmlString4 += "<li><a href='#'>" + arr4sorted[i] + "</a></li>";
        }
    }
    replace();

    filmsTitleContainerFour.insertAdjacentHTML('beforeend', htmlString4);
}

btnFive.addEventListener("click", function() {
    filmsTitleContainerFive.innerText = "";
    var request5 = new XMLHttpRequest();
    request5.open('GET', 'https://swapi.co/api/starships/');
    request5.onload = function() {
        var ourData5 = JSON.parse(request5.responseText);
        console.log(ourData5.results[0]);
        console.log(request5.responseText);
        renderHTML5(ourData5.results);
    };
    
    request5.send();
});

function renderHTML5(data5) {
    var htmlString5 = "";
    arr5 = [];

    for (i = 0; i < data5.length; i++) {
        arr5.push(data5[i].name);
        arr5sorted = arr5.sort();
    }

    function replace() {
        for (i = 0; i < data5.length; i++) {
            htmlString5 += "<li><a href='#'>" + arr5sorted[i] + "</a></li>";
        }
    }
    replace();

    filmsTitleContainerFive.insertAdjacentHTML('beforeend', htmlString5);
}

btnSix.addEventListener("click", function() {
    filmsTitleContainerSix.innerText = "";
    var request6 = new XMLHttpRequest();
    request6.open('GET', 'https://swapi.co/api/vehicles/');
    request6.onload = function() {
        var ourData6 = JSON.parse(request6.responseText);
        console.log(ourData6.results[0]);
        console.log(request6.responseText);
        renderHTML6(ourData6.results);
    };
    
    request6.send();
});

function renderHTML6(data6) {
    var htmlString6 = "";
    arr6 = [];

    for (i = 0; i < data6.length; i++) {
        arr6.push(data6[i].name);
        arr6sorted = arr6.sort();
    }

    function replace() {
        for (i = 0; i < data6.length; i++) {
            htmlString6 += "<li><a href='#'>" + arr6sorted[i] + "</a></li>";
        }
    }
    replace();

    filmsTitleContainerSix.insertAdjacentHTML('beforeend', htmlString6);
}

function searchFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    ul = document.getElementsByClassName('ul-content');
    li = document.getElementsByTagName('li');

    for(i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName('a')[0];
        if(a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        }

        else {
            li[i].style.display = "none";
        }
    }
}









// $(document).ready(function(){
    //     $('#searchInput').on('keyup', function() {
        //         var input = document.getElementById("input");
        //         input.value = input.value.toUpperCase();
        //     });
        // });
                                // jQuery(function(){
                                
                                //     var arr = [];
                                
                                //     $('.ul-content li').each(function(){
                                //         arr.push(this);
                                //     })
                                
                                //     return console.log(arr);   
                                // });