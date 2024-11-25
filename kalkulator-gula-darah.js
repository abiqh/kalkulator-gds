<script>
  function checkBloodSugar() {
    const glucoseLevel = parseFloat(document.getElementById("glucoseInput").value);
    const resultDiv = document.getElementById("result");

    if (isNaN(glucoseLevel) || glucoseLevel <= 0) {
      resultDiv.textContent = "Masukkan nilai yang valid!";
      resultDiv.className = "result";
      return;
    }

    if (glucoseLevel < 140) {
      resultDiv.textContent = "Gula darah Anda normal.";
      resultDiv.className = "result normal";
    } else if (glucoseLevel >= 140 && glucoseLevel <= 199) {
      resultDiv.textContent = "Anda dalam kategori pradiabetes.";
      resultDiv.className = "result pre-diabetes";
    } else {
      resultDiv.textContent = "Anda dalam kategori diabetes.";
      resultDiv.className = "result diabetes";
    }
  }
</script>
