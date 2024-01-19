function fromJSONToHTMLTable(input){
    let arr=JSON.parse(input);


    let output ="<table>\n";
    let firstObj=arr[0];
    output +=" <tr>";

    for (const key in firstObj){
        output  += `<th>${key}</th>`
    }

    output +=   '</tr>\n'


    for (const obj of arr){
        output += ' <tr>';

        for (const key in obj){
            output += `<td>${obj[key]}</td>`;

        }
        output +="</tr>\n"
    }


    output +="</table>";

    function escapeHTML(text) {
        return encodeURIComponent(text).replace(/%20/g, '+').replace(/%3D/g, '=').replace(/%3A/g, ':').replace(/%2F/g, '/');
      }

    return output
    




}

console.log(fromJSONToHTMLTable(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`
));