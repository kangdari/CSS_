const fileds = document.querySelectorAll('.text_tb input');
const btn = document.querySelector('.btn');
const eye = document.querySelector('.show_password');

const btn_check = () => {
  if (fileds[0].value != '' && fileds[1].value != '') {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
};

fileds[0].addEventListener('keyup', btn_check);
fileds[1].addEventListener('keyup', btn_check);

eye.addEventListener('click', () => {
  if (eye.classList.contains('fa-eye-slash')) {
    eye.classList.remove('fa-eye-slash');
    eye.classList.add('fa-eye');
    fileds[1].type = 'text';
  } else {
    eye.classList.add('fa-eye-slash');
    eye.classList.remove('fa-eye');
    fileds[1].type = 'password';
  }
});
