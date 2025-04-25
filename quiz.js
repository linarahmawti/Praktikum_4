function mulaiQuiz() {
    let uts = getAngka("Masukkan nilai UTS:");
    let uas = getAngka("Masukkan nilai UAS:");
    let tugas = getAngka("Masukkan nilai Tugas:");
  
    if (uts === null || uas === null || tugas === null) return;
  
    let values = [uts, uas, tugas];
    let rata = hitungRata(values);
    let { status, grade, warna } = tentukanStatusGrade(rata);
  
    // Simpan ke localStorage
    localStorage.setItem("uts", uts);
    localStorage.setItem("uas", uas);
    localStorage.setItem("tugas", tugas);
    localStorage.setItem("rata", rata);
    localStorage.setItem("status", status);
    localStorage.setItem("grade", grade);
  
    tampilHasil(rata, status, grade, warna);
  }
  
  function getAngka(pesan) {
    let nilai;
    do {
      let input = prompt(pesan);
      if (input === null) return null; // Batal
      nilai = parseFloat(input);
    } while (isNaN(nilai) || nilai < 0 || nilai > 100);
    return nilai;
  }
  
  function hitungRata(valuesArray) {
    let total = valuesArray.reduce((a, b) => a + b, 0);
    return (total / valuesArray.length).toFixed(2);
  }
  
  function tentukanStatusGrade(rata) {
    let status, grade, warna;
  
    if (rata >= 80) {
      status = "Lulus";
      grade = "A";
      warna = "lulus";
    } else if (rata >= 65) {
      status = "Remedial";
      grade = "B";
      warna = "remedial";
    } else {
      status = "Tidak Lulus";
      grade = "C";
      warna = "tidak-lulus";
    }
  
    return { status, grade, warna };
  }
  
  function tampilHasil(rata, status, grade, warna) {
    const hasilDiv = document.getElementById("hasilQuiz");
    hasilDiv.innerHTML = `
      <p>Rata-rata: <strong>${rata}</strong></p>
      <p>Status: <strong class="${warna}">${status}</strong></p>
      <p>Grade: <strong>${grade}</strong></p>
    `;
  }
  
  function ulangQuiz() {
    localStorage.clear();
    document.getElementById("hasilQuiz").innerHTML = "";
  }
  