#Bouncer

Bouncer is a jQuery plug-in that allows any developer to easily implement front-end validation for any web application.

##Files
Bouncer consists of two files:


  <ul>
      <li>bouncer.js</li>
      -Contains all of the logic that validates the selected input fields<br>
      -Contains the "validation_array" that will hold all of the input objects that you will create (Example Given Below)<br>
      <li>bouncer.css</li>
      -Contains all the styling for the input tags that will be validated by Bouncer<br>
      -Feel free to edit this file if you wish to apply a different styling to the selected input tags<br>
  </ul>
  
##Example

After linking the HTML page to the bouncer.js and bouncer.css file we need to locate the validation_array inside bouncer.js so that we can begin adding objects for each input that we want validated. Check out the code below to see how you easy it is to begin validation for a specific input field.

```javascript
validation_array = [
  {input_id: 'password',
    max_length: 15,
    min_length: 8,
    capital_letters:true,
    has_numbers:true
  }
]

```

The validation object above would be connected to an input field that had the id of 'password'. After setting the input_id (Which is required) we set three different validation checks that we want for our password input field and voila.. we're done. Now if you go to your form and start typing in the password field you should see the colors change according to status of the validation checks being true or false.Look below to checkout out all of the validation checks that bouncer.js makes available to you. 

Here is another example of the validation_array being populated with objects to check particular input fields.

```javascript
validation_array = [
   {input_id: 'email' 
   },
    {input_id: 'username',
      min_length:6,
      max_length: 15,
      no_special_characters: true,
      has_numbers: true
  },
    {input_id: 'name',
      letters_only: true,
      min_length:2,
      max_length: 20,
  }
]

```
Helpful Tip: When validating an input field for an email all you have to do is give that input field an id of 'email' and then create an object with one key value pair "{input_id: 'email'}". After doing this, bouncer will have automatically run a regular expression to make sure the the format of the email is correct. 

###Bouncer Validation Checks:

<ul>
<li>Input_id: 'input id of the input field you want validated' </li>
<li>max_length: integer </li>
<li>min_length: integer</li>
<li>capital_letters: true (boolean)</li>
<li>has_numbers: true (boolean)</li>
<li>email: 'just enter (input_id: email) and bouncer will automatically check if its a valid email'</li>
<li>no_numbers:true (boolean)</li>
<li>no_special_characters:true (boolean)</li>
<li>letters_only:true (boolean)</li>
</ul>


