function setupTable() {
    const table = document.getElementById('tableInvoice')


    apiFetchAllInvoices(table)
}

setupTable()
let i=1;
function propulateActualData(table, invoices) {

    // sort invoices by date in descending order
    invoices.sort((a, b) => new Date(b.invDt) - new Date(a.invDt));

    for(const invoice of invoices) {


        const { id, financeType, tag, invDt, amt } = invoice

        // if (invDt !== '2023-03-24') {
        //     continue;
        // }


        const row = table.insertRow()

        row.insertCell(0).innerHTML = i++;
        row.insertCell(1).innerHTML = financeType
        row.insertCell(2).innerHTML = tag
        row.insertCell(3).innerHTML = invDt
        row.insertCell(4).innerHTML = amt
        row.insertCell(5).innerHTML = `
            <a class='ms-2 btn-danger btn' onclick='showConfirmDeleteModal(${id})'>Delete</a>`
            if (financeType === 'INCOME') {
                row.classList.add('income-row')
            } else if (financeType === 'EXPENSES') {
                row.classList.add('expense-row')
            }
    }
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

function apiFetchAllInvoices(table) {
    axios.get('http://localhost:8080/finance/user-finances')
        .then(res => {
            const { data } = res
            console.log(data)  
            const { sts, msg, bd } = data

            propulateActualData(table, bd)
        })
        .catch(err => console.log(err))
}




function apiCallDeleteInvoice(id, modal) {
    const url = `http://localhost:8080/finance/delete/${id}`
    location.reload();

    axios.delete(url)
        .then(res => res.data) // you converted complete response in to our business reponse
        // .then( data => console.log(data.msg) ) // this line can be written in destructured form as below

        .then( ({ sts, msg, bd }) =>  modal.hide() )
        .catch(console.log)

}

  