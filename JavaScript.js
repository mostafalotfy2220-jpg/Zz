let records = JSON.parse(localStorage.getItem("records")) || [];

function toggleReason() {
  let status = document.getElementById("status").value;
  document.getElementById("reasonBox").style.display =
    status === "غايب" ? "block" : "none";
}

function addRecord() {
  let date = document.getElementById("date").value;
  let name = document.getElementById("name").value;
  let distribution = document.getElementById("distribution").value;
  let status = document.getElementById("status").value;
  let reason = document.getElementById("reason").value;

  if (!date || !name) {
    alert("من فضلك ادخل التاريخ والاسم");
    return;
  }

  let penalty = "";
  if (status === "غايب") {
    penalty = "خدمة + خصم يوم إجازة";
    if (!reason) reason = "عدم احترام الطابور";
  } else {
    reason = "-";
    penalty = "-";
  }

  let record = { date, name, distribution, status, reason, penalty };
  records.push(record);
  localStorage.setItem("records", JSON.stringify(records));

  displayRecords();
  clearForm();
}

function displayRecords() {
  let table = document.getElementById("tableBody");
  table.innerHTML = "";

  records.forEach(r => {
    table.innerHTML += `
      <tr>
        <td>${r.date}</td>
        <td>${r.name}</td>
        <td>${r.distribution}</td>
        <td>${r.status}</td>
        <td>${r.reason}</td>
        <td>${r.penalty}</td>
      </tr>
    `;
  });
}
