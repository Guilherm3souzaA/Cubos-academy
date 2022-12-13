function imrpirmirData(dia, mes, ano) {
    let diaString = `${dia}`.padStart(2, '0');
    let mesString = `${mes}`.padStart(2, '0');
    console.log(`${diaString}/${mesString}/${ano}`)
}


imrpirmirData(1, 5, 2022);
imrpirmirData(01, 05, 2022);
imrpirmirData(11, 3, 2022);
imrpirmirData(2, 9, 2022);
imrpirmirData(5, 5, 2022);