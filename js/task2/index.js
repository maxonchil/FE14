let doc = document;



document.addEventListener('DOMContentLoaded', () => {
    let comp_number = Math.floor(Math.random() * 100);
    let counter = 0,
        div = doc.getElementsByClassName('result')[0],
        input = doc.getElementById('input'),
        min = 0;
    max = 100;
    input.value = "";

    function cutInterval(user_num) {

        let first_area = [min, user_num - 1],
            second_area = [user_num + 1, max];
    
        if (comp_number <= user_num - 1) {
            if (first_area[1] - first_area[0] < 5) {
               return div.innerHTML = `<span class="fail">No more hints! You are almost there! Its not ${user_num}</span>`;
            }
    
            div.innerHTML = `<span class="fail">Try again your number is under   ${first_area[0]} and ${first_area[1]}</span<span>`;
            min = first_area[0];
            max = first_area[1];
    
        } else if (comp_number >= user_num + 1) {
            if (second_area[1] - second_area[0] < 5) {
                return div.innerHTML = `<span class="fail">No more hints! You are almost there! Its not ${user_num}</span>`;
            }
    
            div.innerHTML = `<span class="fail">Try again your number is under  ${second_area[0]} and ${second_area[1]}</span>`;
            min = second_area[0];
            max = second_area[1];
    
        }
    };

    doc.getElementsByClassName('button')[0].onclick = () => {
        let user_number = +input.value;

        if (input.value > max || input.value < min) {
            alert(`Please write a a number between ${min} and ${max} `);
            return;
        } else if (input.value === "") {
            alert('Please chosse some number on your mind!');
            return;
        };
        if (user_number === comp_number) {
            counter === 0 ? div.innerHTML = '<span class="success">Congratulations! Нou guessed the number on the first try</span>' : div.innerHTML = `<span class="success">Congratulations! Нou guessed the number in ${counter} attempts</span>`;
            conter = 0;

        } else {
            cutInterval(user_number);
            counter++;
            input.value = '';
        }
    };

})
