// input_id = id of the field that you want validated
// max_length = max length of characters allowed for the input field
// min_length = min length of characters allowed for the input field
// capital_letters = input field must contain a capital letter
// has_numbers = input field must contain a integer
// email = checks if the email is a valid format
// no_numbers = input field cannot contain any numbers
// no_special_characters = input field cannot contain any special characters
// letters_only = input field can only contain letters


var validation_array = [
  {
   input_id: "email"
  },
  {
    input_id: "password",
    min_length:8,
    max_length: 15,
    capital_letters: true,
    has_numbers: true
  },
  {
    input_id: "username",
    min_length:6,
    max_length: 15,
    no_special_characters: true,
    has_numbers: true
  },
  {
    input_id: "first_name",
    min_length:2,
    letters_only: true
  },
  {
    input_id: "last_name",
    min_length:2,
    letters_only: true
  }
];

StartBouncer(validation_array);
