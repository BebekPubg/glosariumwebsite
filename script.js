const searchButton = document.getElementById("search-btn");
const inputWord = document.getElementById("inp-word");
const resultContainer = document.getElementById("result");

// Daftar istilah dalam glosarium
const glossaryData = [
    { term: "Assumptions", definition: "Merupakan asumsi atau analisis terkait kemungkinan positif terkait project apabila diimplementasikan nanti, dilihat dari sistem ataupun end user terkait penggunaan project." },
    { term: "Project Charter", definition: "Merupakan dokumen perencanaan project yang dapat digunakan sebagai parameter pengambilan keputusan untuk pengerjaan project dan keberhasilan perencanaan project." },
    { term: "Estimated Costs", definition: "Merupakan estimasi, analisis serta perkiraan biaya yang dibutuhkan untuk melakukan perencanaan atau implementasi project yang akan dibuat." },
];
searchButton.addEventListener("click", search);

function search() {
    const searchTerm = inputWord.value.toLowerCase();
    
    // Bersihkan konten sebelumnya
    resultContainer.innerHTML = "";

    // Cari istilah yang cocok dengan kata kunci
    const results = glossaryData.filter(item => item.term.toLowerCase().includes(searchTerm));

    // Tampilkan hasil pencarian
    if (results.length > 0) {
        results.forEach(item => {
            const wordContainer = document.createElement("div");
            wordContainer.classList.add("word");

            const definitionElement = document.createElement("p");
            definitionElement.classList.add("word-meaning");
            definitionElement.innerText = item.definition;

            wordContainer.appendChild(definitionElement);
            resultContainer.appendChild(wordContainer);
        });
    } else {
        const errorElement = document.createElement("div");
        errorElement.classList.add("error");
        errorElement.innerText = "Tidak ada hasil ditemukan.";

        resultContainer.appendChild(errorElement);
    }
}
