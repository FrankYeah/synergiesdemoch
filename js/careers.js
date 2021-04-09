// career page

var careerScience = $('#careerScience')[0];
var careerPM = $('#careerPM')[0];
var careerSale = $('#careerSale')[0];

var newData;

$.ajax({
    url: "jobs/work.json",
    success: function( result ) {
        reqListener(result);
    },
    error: function(){
        $('#careerJobBgDiv')[0].style.display = 'none';
    },
    cache: false
  });

function reqListener (result) {
    newData = result;
    for(var i=0; i<newData.data.list.length; i++){

        switch (newData.data.list[i].category) {
            case '研發與數據科學':
                $('.career-no-job')[0].style.display = 'none';
                createEl('div', 'careerHeadS'+i, 'career-inside-box', '', 'careerScience');
                createAEl('a', 'careerS'+i, newData.data.list[i].link, '_blank', 'career-inside-link', '', 'careerHeadS'+i)
                createEl('p', '', 'career-inside-name', newData.data.list[i].name, 'careerS'+i);
                createEl('div', 'careerTagS'+i, 'career-inside-tag', '', 'careerS'+i);
                createEl('p', '', '', newData.data.list[i].education, 'careerTagS'+i);
                createEl('div', '', 'career-f3-width', '', 'careerTagS'+i);
                createEl('p', '', '', newData.data.list[i].experience, 'careerTagS'+i);
                createEl('div', 'careerTextPlaceS'+i, 'career-text-place', '', 'careerS'+i);
                createEl('p', '', 'career-inside-text', newData.data.list[i].description.substring(0,120)+'...', 'careerTextPlaceS'+i);
                createEl('p', '', 'career-inside-place', '台北市中正區', 'careerTextPlaceS'+i);
            break;
         
            case '產品與專案':
                $('.career-no-job')[1].style.display = 'none';
                createEl('div', 'careerHeadP'+i, 'career-inside-box', '', 'careerPM');
                createAEl('a', 'careerP'+i, newData.data.list[i].link, '_blank', 'career-inside-link', '', 'careerHeadP'+i)
                createEl('p', '', 'career-inside-name', newData.data.list[i].name, 'careerP'+i);
                createEl('div', 'careerTagP'+i, 'career-inside-tag', '', 'careerP'+i);
                createEl('p', '', '', newData.data.list[i].education, 'careerTagP'+i);
                createEl('div', '', 'career-f3-width', '', 'careerTagP'+i);
                createEl('p', '', '', newData.data.list[i].experience, 'careerTagP'+i);
                createEl('div', 'careerTextPlaceP'+i, 'career-text-place', '', 'careerP'+i);
                createEl('p', '', 'career-inside-text', newData.data.list[i].description.substring(0,120)+'...', 'careerTextPlaceP'+i);
                createEl('p', '', 'career-inside-place', '台北市中正區', 'careerTextPlaceP'+i);
            break;
         
            case '業務與行銷':
                $('.career-no-job')[2].style.display = 'none';
                createEl('div', 'careerHeadM'+i, 'career-inside-box', '', 'careerSale');
                createAEl('a', 'careerM'+i, newData.data.list[i].link, '_blank', 'career-inside-link', '', 'careerHeadM'+i)
                createEl('p', '', 'career-inside-name', newData.data.list[i].name, 'careerM'+i);
                createEl('div', 'careerTagM'+i, 'career-inside-tag', '', 'careerM'+i);
                createEl('p', '', '', newData.data.list[i].education, 'careerTagM'+i);
                createEl('div', '', 'career-f3-width', '', 'careerTagM'+i);
                createEl('p', '', '', newData.data.list[i].experience, 'careerTagM'+i);
                createEl('div', 'careerTextPlaceM'+i, 'career-text-place', '', 'careerM'+i);
                createEl('p', '', 'career-inside-text', newData.data.list[i].description.substring(0,120)+'...', 'careerTextPlaceM'+i);
                createEl('p', '', 'career-inside-place', '台北市中正區', 'careerTextPlaceM'+i);
            break;
        }
    
    }


    // check the article tag
    for(var i=0; i<newData.data.list.length*2; i++){
        if($('.career-inside-tag').find('p')[i].textContent == ''){
            $('.career-inside-tag').find('p')[i].style.display = 'none';
            $('.career-inside-tag').find('div')[Math.floor(i/2)].style.display = 'none';
        }
    }

    // hover change title color
    $(".career-inside-box").mouseover(function(){
        $(this).find('.career-inside-name')[0].style.color = '#006464';
    })
    $(".career-inside-box").mouseleave(function(){
        $(this).find('.career-inside-name')[0].style.color = '#0F9696';
    })
    
}
  
function createAEl(elType, elId, elHref, elTarget, elClass, elContent, elChild){
    var newElement = document.createElement(elType);
    newElement.id = elId; 
    newElement.href = elHref;
    newElement.target = elTarget;
    newElement.className = elClass;
    newElement.textContent = elContent;
    $('#'+elChild)[0].appendChild(newElement);
}

function createEl(elType, elId, elClass, elContent, elChild){
    var newElement = document.createElement(elType);
    newElement.id = elId; 
    newElement.className = elClass;
    newElement.textContent = elContent;
    $('#'+elChild)[0].appendChild(newElement);
}

var careerSelectAll = $('#careerSelectAll')[0];
var careerSelectAllTwo = $('#careerSelectAllTwo')[0];
var careerSelectScience = $('#careerSelectScience')[0];
var careerSelectPM = $('#careerSelectPM')[0];
var careerSelectSale = $('#careerSelectSale')[0];
var careerSelectScienceTwo = $('#careerSelectScienceTwo')[0];
var careerSelectPMTwo = $('#careerSelectPMTwo')[0];
var careerSelectSaleTwo = $('#careerSelectSaleTwo')[0];
var careerJobBox = $('#careerJobBox')[0];

careerSelectAll.onclick = function(){
    careerScience.classList.remove('career-display-none');
    careerPM.classList.remove('career-display-none');
    careerSale.classList.remove('career-display-none');
    careerSelectAll.classList.add('career-thick-line');
    careerSelectScience.classList.remove('career-thick-line');
    careerSelectPM.classList.remove('career-thick-line');
    careerSelectSale.classList.remove('career-thick-line');
}

careerSelectAllTwo.onclick = function(){
    careerScience.classList.remove('career-display-none');
    careerPM.classList.remove('career-display-none');
    careerSale.classList.remove('career-display-none');
    careerJobBox.dataset.isActive = 'false';
    $('.career-select-thick-line')[0].textContent = this.textContent;
}

careerSelectScience.onclick = function(){
    careerScience.classList.remove('career-display-none');
    careerPM.classList.add('career-display-none');
    careerSale.classList.add('career-display-none');
    careerSelectAll.classList.remove('career-thick-line');
    careerSelectScience.classList.add('career-thick-line');
    careerSelectPM.classList.remove('career-thick-line');
    careerSelectSale.classList.remove('career-thick-line');
}

careerSelectScienceTwo.onclick = function(){
    careerScience.classList.remove('career-display-none');
    careerPM.classList.add('career-display-none');
    careerSale.classList.add('career-display-none');
    careerJobBox.dataset.isActive = 'false';
    $('.career-select-thick-line')[0].textContent = this.textContent;
}

careerSelectPM.onclick = function(){
    careerScience.classList.add('career-display-none');
    careerPM.classList.remove('career-display-none');
    careerSale.classList.add('career-display-none');
    careerSelectAll.classList.remove('career-thick-line');
    careerSelectScience.classList.remove('career-thick-line');
    careerSelectPM.classList.add('career-thick-line');
    careerSelectSale.classList.remove('career-thick-line');
}

careerSelectPMTwo.onclick = function(){
    careerScience.classList.add('career-display-none');
    careerPM.classList.remove('career-display-none');
    careerSale.classList.add('career-display-none');
    careerJobBox.dataset.isActive = 'false';
    $('.career-select-thick-line')[0].textContent = this.textContent;
}

careerSelectSale.onclick = function(){
    careerScience.classList.add('career-display-none');
    careerPM.classList.add('career-display-none');
    careerSale.classList.remove('career-display-none');
    careerSelectAll.classList.remove('career-thick-line');
    careerSelectScience.classList.remove('career-thick-line');
    careerSelectPM.classList.remove('career-thick-line');
    careerSelectSale.classList.add('career-thick-line');
}

careerSelectSaleTwo.onclick = function(){
    careerScience.classList.add('career-display-none');
    careerPM.classList.add('career-display-none');
    careerSale.classList.remove('career-display-none');
    careerJobBox.dataset.isActive = 'false';
    $('.career-select-thick-line')[0].textContent = this.textContent;
}

// select jobs
careerJobBox.dataset.isActive = 'false';

function dropSelectBox(){
    switch (careerJobBox.dataset.isActive) {
        case 'true':
            careerJobBox.dataset.isActive = 'false';
        break;
        
        case 'false':
            careerJobBox.dataset.isActive = 'true';
        break;
    }
}


$(document).click(function(e){
    var _con = $('#careerEllipsis');   
    if(!_con.is(e.target) && _con.has(e.target).length === 0){ 
        switch (careerJobBox.dataset.isActive) {
            case 'true':
                careerJobBox.dataset.isActive = 'false';
            break;
        }
    }
});

