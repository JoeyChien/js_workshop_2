// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


//bootstrap js
import 'bootstrap'
//bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'

import $ from 'jquery'
// $是全域變數
window.$ = $

// import 'tempusdominus-bootstrap-4'
// import 'tempusdominus-bootstrap-4/build/css/tempusdominus-bootstrap-4.css'

import 'select2'
import 'select2/dist/css/select2.css'

import 'sweetalert2'
import Swal from 'sweetalert2'
window.Swal = Swal

$(document).on('turbolinks:load', function () {
  $('.multiselect').select2({
    tags: true,
    tokenSeparators: [',', ' ']
  });
  $('input[type="submit"]').on("click", function(e){
    e.preventDefault();
    let myForm = $(this).parents('form')
    console.log(myForm)
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, do it!'
      }).then((result) => {
        if (result.value) {  
          myForm.submit();
        } else{
          myForm.find('input[type="submit"]').remove('disabled')
        }
    })
  })  
});

