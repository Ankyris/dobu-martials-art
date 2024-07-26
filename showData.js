
  function addUserData() {
    // Retrieve data from local storage
    const dataArray = JSON.parse(localStorage.getItem('memberInfos')) || [];

    // Display data in the table
    const tableBody = document.getElementById('tableBody');

    // Clear existing table content
    tableBody.innerHTML = '';

    dataArray.forEach(function(data) {

      const row = document.createElement('tr');

      const nameCell = document.createElement('td');
      const emailCell = document.createElement('td');
      const ageCell = document.createElement('td');
      const phoneCell = document.createElement('td');
      const editCell = document.createElement('td');
      const deleteCell = document.createElement('td');
    
      nameCell.innerHTML = data.name;
      emailCell.innerHTML = data.email;
      ageCell.innerHTML = data.age;
      phoneCell.innerHTML = data.phone;
      editCell.innerHTML = `<i class="fa-solid fa-pen-to-square" data-toggle="modal" data-target="#membershipForm" onclick= "editRow(`+ data.id +`)" ></i>`;
      deleteCell.innerHTML = `<i class="fa-solid fa-trash-can" onclick= "deleteRow(`+ data.id +`)" > </i>`;

      row.appendChild(nameCell);
      row.appendChild(emailCell);
      row.appendChild(ageCell);
      row.appendChild(phoneCell);
      row.appendChild(editCell);
      row.appendChild(deleteCell);

      tableBody.appendChild(row);

    })
    
  }

  function deleteFromLocalStorage(userId) {

    const dataArray = JSON.parse(localStorage.getItem('memberInfos'));
    if (dataArray != null) {
        dataArray.splice(dataArray.findIndex(user => user.id == userId), 1)
        localStorage.setItem('memberInfos', JSON.stringify(dataArray));
    }
  }

  function deleteRow(userId) {
      deleteFromLocalStorage(userId);
      addUserData();
  }

  function editRow(userId) {
    const dataArray = JSON.parse(localStorage.getItem('memberInfos'));

    if (dataArray != null) {
      const userData = dataArray.find(data => data.id === userId);

      document.getElementById('form-name').value = userData.name;
      document.getElementById('form-email').value = userData.email;
      document.getElementById('form-age').value = userData.age;
      document.getElementById('form-phone').value = userData.phone;

      document.getElementById('form1').addEventListener('submit', function(event) {

        const newName = document.getElementById('form-name').value;
        const newEmail = document.getElementById('form-email').value;
        const newPhone = document.getElementById('form-phone').value;
        const newAge = document.getElementById('form-age').value;

        if (newName && newEmail && newAge && newPhone) {
          userData.name  = newName;
          userData.email = newEmail;
          userData.age = newAge;
          userData.phone = newPhone;

          localStorage.setItem("memberInfos", JSON.stringify(dataArray));

          addUserData(); 
        }
      })
      
    }
    
  }

  function closeModal() {
    $('#membershipForm').modal('hide');
  }

  function myAlertBottom() {
    var alertBox = document.querySelector(".myAlert-bottom");
    alertBox.style.display = "block";
    
    setTimeout(function() {
        alertBox.style.display = "none";
    }, 10000);
  }

  // Initial call to populate the table
  addUserData();

