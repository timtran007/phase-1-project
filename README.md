# On Recall MVP

On Recall is a JavaScript App utilizing an API call for dealing with items that are on recall within the United States.

## On Recall Project Description

Ever wonder what items in your household are on recall by FDA? Users can utilize On Recall as a tool to filter out what items are currently on recall. 

Leveraging the fetch requests to the [FDA's API](https://api.fda.gov/food/enforcement.json?limit=100) for items that are on recall, the application pulls in information based on the state(in abbreviated format i.e. 'CA' for California, 'NY' for New York, etc.)

The application pulls in all items currently on recall and users can filter out by state through the form's input.

After filtering by state, users can cross reference city location to see if they live in the respective city or adjacent to it and can remove products they are not near with a click of a button.


## Usage

```
JavaScript
filter data by state:
products.results.forEach(product => {
        if(product.state === state && product.status ==="Ongoing"){
                console.log(product.state)
                let searchedProductByState = document.createElement('li')
                searchedProductByState.className = 'card'
                searchedProductByState.innerHTML = `
                    <h3>Product Description: ${product.product_description}</h3>
                    <h4>Date of Recall: ${product.recall_initiation_date} </h4>
                    <h4> Status of Recall: ${product.status}</h4>
                    <p> Location: ${product.city}, ${product.state}</p>
                    <p> Product Type: ${product.product_type}</p>
                    <p> Quantities Affected: ${product.product_quantity}</p>
                    <p> Lot Codes & Exp Date: ${product.code_info}</p>
                    <input class="remove-bttn" type="submit" value="Remove from List"/>
                `
                unorderedListLocation.append(searchedProductByState)
            }
    })
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## Credit
Thank you to FDA for providing the API for the data

Thank you to iwek for piecing together the [dropdown list of states](https://gist.github.com/iwek/3190427) in html format.


## Disclaimer
Please keep in mind the disclaimer: "Do not rely on openFDA to make decisions regarding medical care. While we make every effort to ensure that data is accurate, you should assume all results are unvalidated. We may limit or otherwise restrict your access to the API in line with our Terms of Service."

## License
[MIT](https://choosealicense.com/licenses/mit/)