function calculateBMI() {
  var weight = document.getElementById('weight').value;
  var height = document.getElementById('height').value;

  if (weight > 0 && height > 0) {
      var bmi = weight / ((height / 100) * (height / 100));
      bmi = bmi.toFixed(1);

      var category = '';
      var message = '';
      if (bmi < 18.5) {
          category = 'kekurangan berat badan';
          message = 'Anda berada dalam kategori kekurangan berat badan. Penting untuk mendapatkan asupan makanan yang cukup dan berkonsultasi dengan ahli gizi.';
      } else if (bmi >= 18.5 && bmi <= 24.9) {
          category = 'berat badan ideal';
          message = 'Anda berada dalam kategori berat badan ideal. Pertahankan gaya hidup sehat!';
      } else if (bmi >= 25 && bmi <= 29.9) {
          category = 'berat badan lebih';
          message = 'Anda berada dalam kategori berat badan lebih. Pertimbangkan untuk menjaga pola makan dan rutin berolahraga.';
      } else {
          category = 'kegemukan (obesitas)';
          message = 'Anda berada dalam kategori kegemukan. Sangat dianjurkan untuk berkonsultasi dengan dokter atau ahli gizi.';
      }

      document.getElementById('bmiValue').innerText = bmi;
      document.getElementById('bmiCategory').innerText = category;
      document.getElementById('bmiMessage').innerText = message;

      document.getElementById('bmiFormSection').style.display = 'none';
      document.getElementById('bmiResultSection').style.display = 'block';
  } else {
      alert('Masukkan nilai yang valid untuk berat badan dan tinggi badan.');
  }
}

function goBack() {
  document.getElementById('bmiForm').reset();
  document.getElementById('bmiFormSection').style.display = 'block';
  document.getElementById('bmiResultSection').style.display = 'none';
}
