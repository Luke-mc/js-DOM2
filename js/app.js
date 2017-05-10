/*You will need to refer to the index.html page to complete the exercises below. Using DOM, please make the necessary changes to the website.

Also don't forget to run your live-server for this assignment.*/

//1. Kapiolani Coffee Shop
/*Despite being the cat's meow, Kapiolani Coffee Shop's current rating is n/a. Let's keep the hungry fans happy by changing the current ranking to:

Rating: 5 Stars*/

var rating = document.getElementById('rating1').innerHTML = "Rating: 5 stars";




//2. Sunrise Restaurant
/*No rise and shine for the Sunrise Restaurant, as their price and address needs some serious updating. Bring in some sunshine by changing the price and address to the following:

Price: $$$
Adress: 525 Kapahulu Ave, Honolulu, HI 96815*/

document.getElementById('price2').innerHTML = 'Price: $$$';


document.getElementById('addy2').innerHTML = 'Adress: 525 Kapahulu Ave, Honolulu, HI 96815';





//3. Ramen Nakamura
/*Literally, where did the time go? Ramen Nakamura is missing the hours section! This mistake is timeless.

You will need to create a new div element with an id of "hours3". Inside this div element, give it the following info:

Hours: 6pm - 12am Sun - Sat

Append this div element to the div id "text3"*/

var thisDiv = document.getElementById('text3');

var hours = document.createElement('div')

hours.setAttribute('id','hours3');

hours.innerHTML = 'Hours: 6pm - 12am Sun - Sat';

thisDiv.appendChild(hours);


//4. Kam Bowl
/*Kam Bowl got no spare time to update their info and business is suffering! Help them regain their kingpin status again.

Create a new div element with an id of "price4". Inside this div element, give it the following info:

Price: $$$

Append this element to the div with the id of 
"text4"*/

var thisDiv = document.getElementById('text4');

var price = document.createElement('div');

price.id = "price4";

price.innerHTML = "Price: $$$";

thisDiv.appendChild(price);

/*Create a new div element with an id of "addy4". Inside this div element, give it the following info:

Address: 1620 N. School St, Honolulu, HI 96817

Append this element to the div with the id of 
"text4"*/

var addy = document.createElement('div');

addy.id  = "addy4";

addy.innerHTML = 'Address: 1620 N. School St, Honolulu, HI 96817';

thisDiv.appendChild(addy);

/*Create a new div element with an id of "hours4". Inside this div element, give it the following info:

Hours: 9am - 10pm Sun - Sat

Append this element to the div with the id of 
"text4"
*/

var hours4 = document.createElement('div');

hours4.id = "hours4";

hours4.innerHTML = 'Hours: 9am - 10pm Sun - Sat';

thisDiv.appendChild(hours4);


/*Create a paragraph element with an id of "update4". Inside this paragraph element, give it the following info:

I'd leave a blank space for this oxtail soup!

Append this element to the div id of "comment4"*/

var comment = document.getElementById('comment4')

var update = document.createElement('p');

update.id = "update4";

update.innerHTML = "I'd leave a blank space for this oxtail soup!";

comment.appendChild(update);

//5. The Death Star Cafe
/*The empire strikes back with a new and improved oxtail soup offering. Help the dark side win back customers by executing the following commands:*/

/*Create the div elements with the following id's:

"name5"
"rating5"
"price5"
"addy5"
"hours5"

Add the following info for each specific div id:

name5: 5. The Death Star Cafe
rating5: Rating: 2 Stars
price5: Price: $$
addy5: Address: A galaxy far, far away.
hours5: Hours: We never close.

Append the div elements to the div id "text5"
*/

var current = document.getElementById('text5');



var div = document.createElement('div');

			div.id = "name5";

			div.innerHTML =  '5. The Death Star Cafe';

			current.appendChild(div);



var div2 = document.createElement('div');

			div2.id = "rating5";

			div2.innerHTML = 'Rating: 2 stars';

			current.appendChild(div2);



var div3 = document.createElement('div');

			div3.id = "price5";

			div3.innerHTML = 'Price: $$';

			current.appendChild(div3);



var div4 = document.createElement('div');

			div4.id = "addy5";

			div4.innerHTML = 'Address: A galaxy far, far away.';

			current.appendChild(div4);



var div5 = document.createElement('div');

			div5.id = "hours5";

			div5.innerHTML = 'Hours: We never close';

			current.appendChild(div5);








