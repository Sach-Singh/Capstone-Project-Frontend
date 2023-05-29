function setupSavingsTable() {
    const table = document.getElementById('tableSavings')


    apiFetchAllSavings(table)
}

setupSavingsTable()
let k=1;
function propulateSavingsData(table, invoices) {
    // Sort invoices by date in descending order
    invoices.sort((a, b) => new Date(b.invDt) - new Date(a.invDt));
  
  
    for (const invoice of invoices) {
      const { id, category, goal, currAmt, target } = invoice;
  
    //   // Check if the checkbox is checked
    //   if (financeType !== 'INVESTMENT') {
    //     continue; // Skip the row if it's not an investment and the checkbox is checked
    //   }
  
      const row = table.insertRow();
      row.insertCell(0).innerHTML = k++;
      row.insertCell(1).innerHTML = category;
      row.insertCell(2).innerHTML = goal;
      row.insertCell(3).innerHTML = currAmt;
      row.insertCell(4).innerHTML = target;
      row.insertCell(5).innerHTML = `<a class='ms-2 btn-danger btn' onclick='showConfirmDeleteModal(${id})'>Delete</a>`;
  
    }
  }
  

function apiFetchAllSavings(table) {
    axios.get('http://localhost:8080/savings/')
        .then(res => {
            const { data } = res
            console.log(data)  
            const { sts, msg, bd } = data

            propulateSavingsData(table, bd)
        })
        .catch(err => console.log(err))
}





function showConfirmDeleteModal(id) {
    console.log('clicked ' + id)
    const myModalEl = document.getElementById('deleteModal');
    const modal = new bootstrap.Modal(myModalEl)
    modal.show()

    const btDl = document.getElementById('btDl')
    btDl.onclick = () => {
        apiCallDeleteInvoice(id, modal)
    }
}


function apiCallDeleteSavings(id, modal) {
    const url = `http://localhost:8080/savings/${id}`
    location.reload();

    axios.delete(url)
        .then(res => res.data) // you converted complete response in to our business reponse
        // .then( data => console.log(data.msg) ) // this line can be written in destructured form as below

        .then( ({ sts, msg, bd }) =>  modal.hide() )
        .catch(console.log)

}


