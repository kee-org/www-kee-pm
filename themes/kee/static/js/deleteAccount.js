const form = document.querySelector('#deleteAccountForm');

async function sendDeleteRequest(event) {
    document.querySelector('#deleteAccountButton').disabled = true;
    document.querySelector('#result').innerText = "";
    event.stopPropagation();
    event.preventDefault();
    const formData = new FormData(form);
  
  const searchParams = new URLSearchParams();
  for (const pair of formData) {
    searchParams.append(pair[0], pair[1]);
  }
  try {
  const response = await fetch('https://id.kee.pm/deleteAccountStart', {
    method: 'POST',
    body: searchParams.toString(),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  });
  if (response.ok) {
  reportResult("OK. Please check your email for the next step.");
  } else {
    try {
        const message = (await response.json())["error"];
        reportResult("There has been a problem with the fetch operation: " + message);
    } catch (e) {
        reportResult("There has been a problem with the fetch operation: " + response.status);
    }
  }
  } catch (error) {
    reportResult("There has been a problem with the fetch operation: " + error);
  }
  document.querySelector('#deleteAccountButton').disabled = false;
  }
  
  function reportResult(msg) {
    console.log(msg);
    document.querySelector('#result').innerText = msg;
  }
  
form.addEventListener('submit', sendDeleteRequest);
