# Angular Schema Form for Select 4.0.x

## How to install
```sh
$ bower install angular-schema-select2
```
## Example of use
Angular Schema Form
```json
{
	"key": "testselect",
    "title": "Test Select2 Ajax",
    "description": "",
	"type": "select2",
	"options": {
         "ajax": {
           "url": "{{base_url}}/testselectajax",
           "dataType": "json"
         },
         "minimumInputLength": 4
       },
       "dependOf": "institution_id",
       "readonly": false 
}
```
###### List of available options for Select2 https://select2.org/configuration/options-api  
Angular Schema Data
```json
{
	"testselectajax": "5",
	"testselectajax_text": "Select2 Default Description for option with id=5"
}
```
Select2 Ajax Response Example
```json
{  
	"results": [  
	{  
		"id":1,  
		"text":"Description of option 1"  
	},
	{  
		"id":2,  
		"text":"Description of option 2"  
	},
	{  
		"id":3,  
		"text":"Description of option 3"  
	},
	{  
		"id":4,  
		"text":"Description of option 4"  
	},
	{  
		"id":5,  
		"text":"Description of option 5"  
	}
}
```


## Requirements / Tested on
- Angular 1.5.5
- Angular Schema Form 0.8.13
- Select 4.0.5

## Author
- Fernando Velcic