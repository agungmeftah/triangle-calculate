const luas = document.getElementById ("luas");

luas.addEventListener ("submit", function(event){
    event.preventDefault()
    console.log("alas", event.target.alas.value)
    console.log("tinggi", event.target.tinggi.value) 

    const nilaiAlas = event.target.alas.value
    const nilaiTinggi = event.target.tinggi.value

    const li2 = luas.querySelector('ul li:nth-child(2)')
    li2.textContent = `L = 1/2 x ${nilaiAlas} x ${nilaiTinggi}`

    const li3 = luas.querySelector('ul li:nth-child(3)')
    li3.textContent = `L = ${1/2 * nilaiAlas * nilaiTinggi}`
})

const keliling = document.getElementById("keliling");

keliling.addEventListener ("submit", function(event){
    event.preventDefault()

    const sisiA = event.target.s1.value
    const sisiB = event.target.s2.value
    const sisiC = event.target.s3.value
    const li2 = keliling.querySelector('ul li:nth-child(2)')
    li2.textContent = ` K = ${sisiA} + ${sisiB} + ${sisiC}`

    const li3 = keliling.querySelector(`ul li:nth-child(3)`)
    li3.textContent =  `K = ${Number(sisiA) + Number(sisiB) + Number(sisiC)}`

    const hasil = keliling.querySelector(`ul`)
    console.log(hasil)
    hasil.style.display="block"
})
 
const resetSegitiga = document.querySelector("#reset-segitiga")
resetSegitiga.addEventListener("click", function(){

const hasilSegitiga = document.querySelector("#hasil-segitiga")
hasilSegitiga.style.display="none"
})


const resetKeliling = document.querySelector("#reset-keliling")
resetKeliling.addEventListener("click", function(){

const hasilKeliling = document.querySelector("#hasil-keliling")
hasilKeliling.style.display="none"
})



