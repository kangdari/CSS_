const inputs = document.querySelectorAll('.input_box input');
const show_password = document.querySelector('.show_password');
const login_btn = document.querySelector('.login_btn');

// id, password 길이 체크하여 로그인 버튼 활성화
const check_input = () => {
  if (inputs[1].value.length >= 7 && inputs[0].value.length >= 1) {
    login_btn.disabled = false;
  } else {
    login_btn.disabled = true;
  }
};
inputs.forEach((input) => input.addEventListener('keyup', check_input));

show_password.addEventListener('click', () => {
  if (inputs[1].type === 'password') {
    inputs[1].type = 'text';
    show_password.innerText = '숨기기';
  } else {
    inputs[1].type = 'password';
    show_password.innerText = '비밀번호 표시';
  }
});
