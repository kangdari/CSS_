const inputs = document.querySelectorAll('.input_box input');
const login_btn = document.querySelector('.register_btn');

// id, password 길이 체크하여 로그인 버튼 활성화
const check_input = () => {
  if (
    inputs[0].value.length >= 1 &&
    inputs[1].value.length >= 1 &&
    inputs[2].value.length >= 7 &&
    inputs[3].value.length >= 1
  ) {
    login_btn.disabled = false;
  } else {
    login_btn.disabled = true;
  }
};
inputs.forEach((input) => input.addEventListener('keyup', check_input));

const show_password = document.querySelector('.show_password');

show_password.addEventListener('click', () => {
  if (inputs[2].type === 'password') {
    inputs[2].type = 'text';
    show_password.innerText = '숨기기';
  } else {
    inputs[2].type = 'password';
    show_password.innerText = '비밀번호 표시';
  }
});
