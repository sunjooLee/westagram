const aAlert = document.querySelector('.alert-a'),
    idInput = document.querySelector('.id-check'),
    pwInput = document.querySelector('.pw-check'),
    btn = document.querySelector('.btn');



function onSubmit(form) {

    if ((form.id.value === "sunjoo") && (form.pw.value === "1234hi")) {
        alert("로그인 성공!");
    } else {
        aAlert.innerHTML = "로그인 실패, 다시 시도해주세요.";
    }
}


//Event bubbling

function userInfoCheck() {

    idInput.addEventListener("keypress", () => {

        pwInput.addEventListener("keypress", () => btn.style.background = "#0095f6");

    });

}

userInfoCheck();
