const inputs = document.querySelectorAll('.input_box input');
const btn = document.querySelector('.btn');
const show_password = document.querySelector('.show_password');

const btn_check = () => {
  if (inputs[0].value !== '' && inputs[1].value !== '') {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
};

inputs.forEach((input) => input.addEventListener('keyup', btn_check));

show_password.addEventListener('click', (e) => {
  if (show_password.classList.contains('fa-eye-slash')) {
    show_password.classList.remove('fa-eye-slash');
    show_password.classList.add('fa-eye');
    inputs[1].type = 'text';
  } else {
    show_password.classList.add('fa-eye-slash');
    show_password.classList.remove('fa-eye');
    inputs[1].type = 'password';
  }
});
