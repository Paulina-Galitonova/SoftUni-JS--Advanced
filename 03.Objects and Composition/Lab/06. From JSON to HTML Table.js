function fromJSONToHTMLTable(input){
    let arr=JSON.parse(input);


    let output ="<table>\n";
    let firstObj=arr[0];
    output +=" <tr>";

    for (const key in firstObj){
        output  += `<th>${escapeHtml(key)}</th>`
    }

    output +=   '</tr>\n'


    for (const obj of arr){
        output += ' <tr>';

        for (const key in obj){
            output += `<td>${escapeHtml(obj[key].toString())}</td>`;

        }
        output +="</tr>\n"
    }


    output +="</table>";

    function escapeHtml(value) {
        let entityMap = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            ' ': '&nbsp;',
        };
        return value.toString().replace(/[&<> "]/g, (char) => entityMap[char]);
    }
    

    return output
    




}

console.log(fromJSONToHTMLTable(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`
));