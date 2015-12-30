//input_id
//max_length
//min_length
//require_capital_letters
//require_
//has_numbers
//email
//no_numbers
//user_name_check
//letters_only

///added validation////

//credit_card
//no_letters
(function(global, $){


  var Bouncer = function(validation_array) {
    return new Bouncer.init(validation_array);
  }

  var fail = function($obj) {
    $obj.removeClass('success');
    $obj.addClass('fail');
  }

  var success = function($obj) {
    $obj.removeClass('fail');
    $obj.addClass('success');
  }

  var hasLowerCase = function(str) {
      for(x=0;x<str.length;x++){
          if(str.charAt(x) >= 'A' && str.charAt(x) <= 'Z')
              return true;
            }
      return false;
  }

  var hasNumbers = function(str) {
    var array = str.split('');
    if(!str.match(/[0-9]/i)){
      return true;
    }
    return false;
  }

  var noNumbers = function(str) {
    var array = str.split('');
    if(!str.match(/[0-9]/i)){
      return true;
    }
    return false;
  }

  var noLetters = function(str) {
    var array = str.split('');
    if(!str.match(/[a-zA-Z]/i)){
     return true
    }else{
      console.log('failing the test')
      return false;
    }
  }

  var user_name_validate = function(str){
    if(!/[^a-zA-Z0-9_]/.test(str)) {
      return true;
    }else{
      return false;
    }
  }

  var letters_only_check = function(str){
    if(!/[^a-zA-Z]/.test(str)) {
      return true;
    }else{
      return false;
    }
  }  
  var isValidIdentifier = function (identifier) {

      var sum     = 0,
          alt     = false,
          i       = identifier.length-1,
          num;

      if (identifier.length < 13 || identifier.length > 19){
          return false;
      }

      while (i >= 0){

          //get the next digit
          num = parseInt(identifier.charAt(i), 10);

          //if it's not a valid number, abort
          if (isNaN(num)){
              return false;
          }

          //if it's an alternate number...
          if (alt) {
              num *= 2;
              if (num > 9){
                  num = (num % 10) + 1;
              }
          } 

          //flip the alternate bit
          alt = !alt;

          //add to the rest of the sum
          sum += num;

          //go to next digit
          i--;
      }

      //determine if it's valid
      return (sum % 10 == 0);
  }

  Bouncer.prototype = {
    validate: function(){
      //ADD INPUT FIELD OBJECTS HERE IF YOU WANT THEM TO BE CHECKED
      var validation_array = this.validation_array

      // LISTENS FOR ANY CHANGES MADE TO ANY INPUT FIELD
      $('.bouncer').keyup(function(){
      // GRABS THE ID OF THE INPUT FIELD THAT WAS TRIGGERED
        var id = $(this).attr('id');
      // FOR LOOP THAT CHECKS IF THAT INPUT FIELD WAS IN OUR ARRAY
        var check_array = [];
        for(var i = 0; i < validation_array.length; i++){
          if(id == validation_array[i]['input_id']){
            // CHECK FOR EMAIL

            // previous I don't understand this line of code
            // if(validation_array[i]['email'] == true){
            
            if(validation_array[i]['input_id'] == 'email'){
                var regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if(regEx.test($(this).val())){
                  success($(this));
                  return;
                }else{
                  fail($(this));
                  return;
                }
            }
            if(validation_array[i]['input_id'] == 'credit_card'){
              if(isValidIdentifier($(this).val())){
                success($(this));
                return;
              } else {
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
            if(validation_array[i]['require_capital_letters'] == true){
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

            //MUST ONLY CONTAIN NUMBERS
            if(validation_array[i]['no_letters'] == true){
              var word = $(this).val();
              var check = noLetters(word);
              if(check == true){
                check_array.push('success');
              }else {
                check_array.push('fail');
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

            //MAKES STANDARD CHECK OF USERNAME FIED
            if(validation_array[i]['user_name_check'] == true){
              var word = $(this).val();
              var check = user_name_validate(word);
              if(check == true){
                check_array.push('success');
              }else{
                check_array.push('fail');
              }
            }

            //STRING CAN ONLY BE LETTERS
            if(validation_array[i]['letters_only'] == true){
              var word = $(this).val();
              var check = letters_only_check(word);
              if(check == true){
                check_array.push('success');
              }else {
                check_array.push('fail');
              }
            }

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
    }
  };

  Bouncer.init = function(validation_array) {
    var self = this;
    self.validation_array = validation_array;
  }
  
  Bouncer.init.prototype = Bouncer.prototype;

  global.Bouncer = global.Bounce = Bouncer;


}(window, jQuery));
