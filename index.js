const SCRIPT_URL =
    'https://script.google.com/macros/s/AKfycbxbDsUYP4_3MCaOKxSJmKbUrhSTgS58ADrK4oW6N-xOYmwpIEGX2lcVJhIjoktpNBW0eQ/exec';

let userName = document.getElementById('name');
let phoneNum = document.getElementById('phone');
let email = document.getElementById('email');
let wantedDate = document.getElementById('date');
let place = document.getElementById('place');
let money = document.getElementById('money');
let content = document.getElementById('content');
let saveBtn = document.getElementById('submit-btn');

const isLoading = (flag) => {
    let bodyTag = document.getElementById('main');

    if (flag) {
        bodyTag.classList.add('loading');
    } else {
        bodyTag.classList.remove('loading');
    }
};

const saveData = () => {
    if (userName.value === '') {
        alert('이름을 입력하세요.');
        return;
    }
    if (phoneNum.value === '') {
        alert('휴대폰 번호를 입력하세요.');
        return;
    }
    if (email.value === '') {
        alert('이메일을 입력하세요.');
        return;
    }
    if (wantedDate.value === '') {
        alert('일자를 입력하세요.');
        return;
    }
    if (place.value === '') {
        alert('장소를 입력하세요.');
        return;
    }
    if (money.value === '') {
        alert('예산 금액을 입력하세요.');
        return;
    }
    if (content.value === '') {
        alert('행사 내용 및 문의 사항을 입력하세요.');
        return;
    }

    sendData(userName.value, phoneNum.value, email.value, wantedDate.value, place.value, money.value, content.value);
};

const sendData = async (data1, data2, data3, data4, data5, data6, data7) => {
    try {
        fetch(
            SCRIPT_URL +
                `?이름=${data1}&연락처=${
                    "'" + data2
                }&이메일=${data3}&일자=${data4}&장소=${data5}&예산=${data6}&문의사항=${data7}`
        );
        userName.value = ' ';
        phoneNum.value = ' ';
        email.value = ' ';
        wantedDate.value = ' ';
        place.value = ' ';
        money.value = ' ';
        content.value = ' ';
        alert('문의 등록 완료');
    } catch (error) {
        alert('다시 시도해주세요');
        console.log(`error : ${error}`);
    }
};

saveBtn.addEventListener('click', saveData);
