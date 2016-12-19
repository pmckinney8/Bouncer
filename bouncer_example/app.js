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
