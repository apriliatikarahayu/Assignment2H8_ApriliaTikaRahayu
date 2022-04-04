function myFunction() {
    var x = document.getElementById("name").value;
    document.getElementById("nama").innerHTML = x;
    var x = document.getElementById("program").value;
    document.getElementById("prog").innerHTML = x;
    var x = document.getElementById("avail").value;
    document.getElementById("L1").innerHTML = x;
    var x = document.getElementById("age").value;
    document.getElementById("L2").innerHTML = x;
    var x = document.getElementById("lokasi").value;
    document.getElementById("L3").innerHTML = x;
    var x = document.getElementById("pengalaman").value;
    document.getElementById("L4").innerHTML = x;
    var x = document.getElementById("email").value;
    document.getElementById("L5").innerHTML = x;
    resetForm();
  }

  function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("program").value = "";
    document.getElementById("avail").value = "";
    document.getElementById("age").value = "";
    document.getElementById("lokasi").value = "";
    document.getElementById("pengalaman").value = "";
    document.getElementById("email").value = "";
}

function editData(){
    document.getElementById("name").value = document.getElementById("nama").innerHTML;
    document.getElementById("program").value = document.getElementById("prog").innerHTML;
    document.getElementById("avail").value = document.getElementById("L1").innerHTML;
    document.getElementById("age").value = document.getElementById("L2").innerHTML;
    document.getElementById("lokasi").value = document.getElementById("L3").innerHTML;
    document.getElementById("pengalaman").value = document.getElementById("L4").innerHTML;
    document.getElementById("email").value = document.getElementById("L5").innerHTML;
    
}

function myHidden() {
    var x = document.getElementById('hilang');
    if (x.style.visibility === 'hidden') {
      x.style.visibility = 'visible';
    } else {
      x.style.visibility = 'hidden';
    }
  }