//object format
var json_obj=[
                {
                "name":"janu",
                "dept":"eee",
                "sub_marks": [90,96,89,95]
               },
               {
                "name":"boomi",
                 "dept":"eee",
                 "sub_marks":[98,97,94,90]
               }
]
    console.log(json_obj)
    console.log(JSON.stringify(json_obj));
    console.log(`${typeof(json_obj)}`);

    //string format
    var json_str='[{"name":"janu","age":23},{"name":"boomi","age":23},{"name":"viboo","age":23}]'
    console.log(typeof(json_str));
    console.log(JSON.parse(json_str));
    
   