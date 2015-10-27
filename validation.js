//input_id
//min_length
//capital_letters
//has_numbers
//email
//min_length
//no_numbers

$(document).ready(function(){

  var validation_array = [
    {
      input_id: 'password',
      min_length:3,
      max_length: 6,
      capital_letters: true

    },
    {
      input_id: 'username',
      min_length:6,
      max_length: 15,
      capital_letters: true,
      has_numbers: true

    }

  ];

  // LISTENS FOR ANY CHANGES MADE TO ANY INPUT FIELD
  $('input').keyup(function(){
  // GRABS THE ID OF THE INPUT FIELD THAT WAS TRIGGERED
    var id = $(this).attr('id');

  // FOR LOOP THAT CHECKS IF THAT INPUT FIELD WAS IN OUR ARRAY
    var check_array = [];
    for(var i = 0; i < validation_array.length; i++){


      if(id == validation_array[i]['input_id']){


        // CHECK FOR EMAIL
        if(validation_array[i]['email'] == true){
            var regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(regEx.test($(this).val())){
              success($(this));
              return;
            }else{
              fail($(this));
              return;
            }
        }

        // MIN LENGTH CHECK
        if(validation_array[i]['min_length']){
          var word = $(this).val();
          if(word.length < validation_array[i]['min_length']){
            check_array.push('fail');
          }else if(word.length >= validation_array[i]['min_length']){
            check_array.push('success');
          }
        }

        // MAX LENGTH CHECK
        if(validation_array[i]['max_length']){
          var word = $(this).val();
          if(word.length > validation_array[i]['max_length']){
            check_array.push('fail');
          }else if(word.length <= validation_array[i]['max_length']){
            check_array.push('success');
          }
        }

        // MUST HAVE CAPITAL LETTER CHECK
        if(validation_array[i]['capital_letters'] == true){
          var word = $(this).val();
          var capitals = hasLowerCase(word);
          if(capitals == true){
            check_array.push('success');
          }else{
            check_array.push('fail');
          }
        }

        // MUST HAVE A NUMBER CHECK
        if(validation_array[i]['has_numbers'] == true){
          var word = $(this).val();
          var numbers = hasNumbers(word);
          console.log('numbers', numbers);
          if(numbers == true){
            check_array.push('fail');
          }else{
            check_array.push('success');
          }
        }

        // MUST ONLY CONTAIN LETTERS CHECK
        if(validation_array[i]['no_numbers'] == true){
          var word = $(this).val();
          var numbers = noNumbers(word);
          console.log('numbers', numbers);
          if(numbers == true){
            check_array.push('success');
          }else{
            check_array.push('fail');
          }
        }


        console.log(check_array);
        // SEARCHING THROUGH THE CHECK ARRAY TO SEE IF THERE WERE ANY ERRORS
        for(var i = 0; i < check_array.length;i++){
          if(check_array[i] == 'fail'){
            fail($(this));
            return;
          }
        }

        // THIS WILL ONLY BE HIT IF THE CHECK_ARRAY DOESNT CONTAIN ANY FALSE STRINGS
        success($(this));
        return;

      }


    }

  })




});



function fail($obj) {
  $obj.removeClass('success');
  $obj.addClass('fail');
}

function success($obj) {
  $obj.removeClass('fail');
  $obj.addClass('success');
}

function hasLowerCase(str) {
    for(x=0;x<str.length;x++){
        if(str.charAt(x) >= 'A' && str.charAt(x) <= 'Z')
            return true;
          }
    return false;
}

function hasNumbers(str) {
  var array = str.split('');
  // for(var i = 0; i < array.length; i++){
  //   if(parseInt(array[i]) != NaN){
  //     return false;
  //   }
  // }
    console.log('answer',str.match(/[0-9]/i))
  if(!str.match(/[0-9]/i)){
    return true;
  }
  return false;

}

function noNumbers(str) {
  var array = str.split('');
  // for(var i = 0; i < array.length; i++){
  //   if(parseInt(array[i]) != NaN){
  //     return false;
  //   }
  // }
    console.log('answer',str.match(/[0-9]/i))
  if(!str.match(/[0-9]/i)){
    return true;
  }
  return false;


}
