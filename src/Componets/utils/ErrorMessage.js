// src/utils/alerts.js
import Swal from 'sweetalert2';
import '../../style/globle.css'

// Success Alert
export const showSuccessAlert = (message) => {
  Swal.fire({
    icon: 'success',
    title: 'Success!',
    text: message,
    confirmButtonText: 'OK',
  });
};

// Error Alert
export const showErrorAlert = (message) => {
  Swal.fire({
    icon: 'error',
    title: 'Error!',
    text: message,
    confirmButtonText: 'OK',
  });
};
