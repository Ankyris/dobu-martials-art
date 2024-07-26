document.getElementById('form1').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const id = Date.now();
    const name = document.getElementById('form-name').value;
    const email = document.getElementById('form-email').value;
    const age = document.getElementById('form-phone').value;
    const phone = document.getElementById('form-age').value;

    // Store data in local storage
    const data = { id, name, email, age, phone };
    const dataArray = JSON.parse(localStorage.getItem('memberInfos')) || [];

    dataArray.push(data);

    document.getElementById('alertText').innerHTML = name
    document.getElementById('smallText').innerHTML = email
    
    localStorage.setItem('memberInfos', JSON.stringify(dataArray));

    closeModal();

    document.getElementById('form-name').value = ''
    document.getElementById('form-email').value = ''
    document.getElementById('form-phone').value = ''
    document.getElementById('form-age').value = ''

    myAlertBottom();

});

function closeModal() {
    $('#membershipForm').modal('hide');
}

function myAlertBottom(){
    $(".myAlert-bottom").show();
    setTimeout(function(){
      $(".myAlert-bottom").hide(); 
    }, 10000);
}