# On Recall

On Recall is a JavaScript App utilizing an API call for dealing with items that are on recall within the United States.

## On Recall Project Description

Ever wonder what items in your household are on recall by FDA? Users can utilize On Recall as a tool to filter out what items are currently on recall. 

Leveraging the fetch requests to the [FDA's API](https://api.fda.gov/food/enforcement.json?limit=100) for items that are on recall, the application pulls in information based on your city and state(in abbreviated format i.e. 'CA' for California, 'NY' for New York, etc.)

The application pulls in the 5 most recent items on recall upon the loading of the application and users can filter out by city and/or state through the form's input.


## Usage



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## Credit
Thank you to FDA for providing the API for the data

## Disclaimer
Please keep in mind the disclaimer: "Do not rely on openFDA to make decisions regarding medical care. While we make every effort to ensure that data is accurate, you should assume all results are unvalidated. We may limit or otherwise restrict your access to the API in line with our Terms of Service."

## License
[MIT](https://choosealicense.com/licenses/mit/)