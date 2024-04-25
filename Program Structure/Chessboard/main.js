for (let y = 0; y < 8; y++) {
    let line = "";
    for (let x = 0; x < 4; x++) {
        if (y % 2 == 0) {
            line += " #";
        } else {
            line += "# ";
        }
    }
    console.log(line);
}