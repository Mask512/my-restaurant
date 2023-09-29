import Swal from 'sweetalert2';

const showAlertError = (message) => {
  Swal.fire({
    icon: 'error',
    title: 'Sorry',
    text: message,
    timer: 1500,
    timerProgressBar: true,
    background: '#fcecda',
  });
};
const showAlertSuccess = (message) => {
  Swal.fire({
    icon: 'success',
    title: message,
    showConfirmButton: false,
    timerProgressBar: true,
    background: '#fcecda',
    timer: 1500,
  });
};

export { showAlertError, showAlertSuccess };
