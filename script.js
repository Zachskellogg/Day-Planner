$(document).ready(function() {

  currentTime = moment().format('h');
  var update = function() {
    document.getElementById("time").innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
  }
  setInterval(update, 1000);
  
  
  $('.btn-outline-secondary').on('click', function() {
    var inputText = $(this).siblings('input').val();
    var saveID = $(this).attr('id');
    localStorage.setItem(saveID, inputText);
  });
  
  $('.9T').val(localStorage.getItem('9'));
  $('.10T').val(localStorage.getItem('10'));
  $('.11T').val(localStorage.getItem('11'));
  $('.12T').val(localStorage.getItem('12'));
  $('.13T').val(localStorage.getItem('13'));
  $('.14T').val(localStorage.getItem('14'));
  $('.15T').val(localStorage.getItem('15'));
  $('.16T').val(localStorage.getItem('16'));
  $('.17T').val(localStorage.getItem('17'));
  
  $('.clearButton').on('click', function() {
    localStorage.clear();
    $('input').val('').empty();
  })
  
  var classUpdate = function () {
    var timeC = moment().format('h');
    console.log(timeC);
    if (timeC === Number($(this).attr('id'))) {
      $(this).siblings('input').css("background-color", 'red')
      console.log('id');
    }
    
  }
  $('.btn-ouline-secondary').each(classUpdate());
});

