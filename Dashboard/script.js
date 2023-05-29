function setupTables() {
  const invoiceTable = document.getElementById('tableInvoice');
  const investmentTable = document.getElementById('InvestmentTable');

  apiFetchAllInvoices(invoiceTable, '');
  apiFetchAllInvoices(investmentTable, 'INVESTMENT');
}

setupTables();

let i = 1;
let j = 1;

function propulateActualData(table, invoices) {
  // Sort invoices by date in descending order
  invoices.sort((a, b) => new Date(b.invDt) - new Date(a.invDt));

  for (const invoice of invoices) {
    const { id, financeType, tag, invDt, amt } = invoice;

    const row = table.insertRow();
    row.insertCell(0).innerHTML = (table.id === 'tableInvoice') ? i++ : j++;
    row.insertCell(1).innerHTML = financeType;
    row.insertCell(2).innerHTML = tag;
    row.insertCell(3).innerHTML = invDt;
    row.insertCell(4).innerHTML = amt;
    row.insertCell(5).innerHTML = `<a class='ms-2 btn-danger btn' onclick='showConfirmDeleteModal(${id})'>Delete</a>`;

    if (table.id === 'tableInvoice') {
      if (financeType === 'INCOME') {
        row.classList.add('income-row');
      } else if (financeType === 'EXPENSES') {
        row.classList.add('expense-row');
      }
    }
  }
}

function apiFetchAllInvoices(table, financeType = '') {
  axios.get('http://localhost:8080/finance/user-finances')
    .then(res => {
      const { data } = res;
      console.log(data);
      const { sts, msg, bd } = data;

      const filteredInvoices = financeType ? bd.filter(invoice => invoice.financeType === financeType) : bd;

      propulateActualData(table, filteredInvoices);
    })
    .catch(err => console.log(err));
}

function showConfirmDeleteModal(id) {
  console.log('clicked ' + id);
  const myModalEl = document.getElementById('deleteModal');
  const modal = new bootstrap.Modal(myModalEl);
  modal.show();

  const btDl = document.getElementById('btDl');
  btDl.onclick = () => {
    apiCallDeleteInvoice(id, modal);
  }
}

function apiCallDeleteInvoice(id, modal) {
  const url = `http://localhost:8080/finance/delete/${id}`;
  location.reload();

  axios.delete(url)
    .then(res => res.data)
    .then(({ sts, msg, bd }) => modal.hide())
    .catch(console.log);
}
