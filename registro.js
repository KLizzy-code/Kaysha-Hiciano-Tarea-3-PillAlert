let records = JSON.parse(localStorage.getItem('medicineRecords')) || [];

const form = document.getElementById('medicineForm');
form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('medicineName').value;
  const date = document.getElementById('medicineDate').value;

  records.push({ name, date });
  localStorage.setItem('medicineRecords', JSON.stringify(records));

  alert('Registrado con éxito');
  form.reset();
});
