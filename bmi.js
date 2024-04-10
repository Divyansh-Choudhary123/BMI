function abc() {
    let o = parseInt(document.getElementById("o").value);
    let w = parseInt(document.getElementById("w").value);
    let bmi = w / (o ** 2)
        // let res = bmi
    document.getElementById("q").value = bmi
        // alert(bmi)
}

//     let o = document.bmi.kg.value,
//         height = document.bmi.cm.value;
//     document.bmi.value = parseInt((weight) / (height * height));

// }
// alert(abc)