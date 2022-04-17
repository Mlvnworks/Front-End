$(document).ready(()=>{
    
// PASSWORD TOGGLE
    $('form').on('submit',e =>{
        e.preventDefault()
    })
    let state=false;

    setTimeout(function(){
        $('#password').attr('type','password');

        
    },1000)
    $('#pword-toggle').on('click',function(){
        
    
        if(state){
            $('#password').attr('type','text');
            state=false;
            $('#pword-toggle').html(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
            <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
            <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
            <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
          </svg>`)
        }else{
            
            $('#password').attr('type','password');
            state=true;
            $('#pword-toggle').html(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
          </svg>`)
        }
    })
    
// // STARTS WITH UPPERCASE
//     let rule1=false;
//     $('#password').on('input',function(pWord){
//         if(pWord.target.value[0] =='A'||
//         pWord.target.value[0] == 'B' ||
//         pWord.target.value[0] == 'C' ||
//         pWord.target.value[0] == 'E' ||
//         pWord.target.value[0] == 'F' ||
//         pWord.target.value[0] == 'G' ||
//         pWord.target.value[0] == 'H' ||
//         pWord.target.value[0] == 'I' ||
//         pWord.target.value[0] == 'J' ||
//         pWord.target.value[0] == 'K' ||
//         pWord.target.value[0] == 'L' ||
//         pWord.target.value[0] == 'M' ||
//         pWord.target.value[0] == 'N' ||
//         pWord.target.value[0] == 'O' ||
//         pWord.target.value[0] == 'P' ||
//         pWord.target.value[0] == 'Q' ||
//         pWord.target.value[0] == 'R' ||
//         pWord.target.value[0] == 'S' ||
//         pWord.target.value[0] == 'T' ||
//         pWord.target.value[0] == 'U' ||
//         pWord.target.value[0] == 'V' ||
//         pWord.target.value[0] == 'W' ||
//         pWord.target.value[0] == 'X' ||
//         pWord.target.value[0] == 'Z' 
        
//         ){

//             $('#msg li:nth-child(1)').css({
//                 color:'green',
//                 listStyle: 'none'
//             })
//             rule1=true;
//         }else{
//             rule1=false;

//             $('#msg li:nth-child(1)').css({
//                 color:'rgb(145, 9, 9)',
//                 listStyle: 'disc'
//             })
//         }
//     })
    
    
// //CONTAINS SYMBOL
//     let rule2=false;
//     $('#password').on('input',function(pWord){
//         if(
//             pWord.target.value.includes('@')||
//             pWord.target.value.includes('$')||
//             pWord.target.value.includes('#')||
//             pWord.target.value.includes('&')||
//             pWord.target.value.includes('*')||
//             pWord.target.value.includes('%')

//         ){

//             $('#msg li:nth-child(2)').css({
//                 color:'green',
//                 listStyle: 'none'
//             })
//             rule2=true;
//         }else{
//             rule2=false;
//             $('#msg li:nth-child(2)').css({
//                 color:'rgb(145, 9, 9)',
//                 listStyle: 'disc'
//             })
//         }
//     })
// //CONTAINS NUMBER
//     let rule3=false;
//     $('#password').on('input',function(pWord){
//         if(
//             pWord.target.value.includes('1') ||
//                pWord.target.value.includes('2') ||
//                pWord.target.value.includes('3') ||
//                pWord.target.value.includes('4') ||
//                pWord.target.value.includes('5') ||
//                pWord.target.value.includes('6') ||
//                pWord.target.value.includes('7') ||
//                pWord.target.value.includes('8') ||
//                pWord.target.value.includes('9') ||
//                pWord.target.value.includes('0') 
//         ){
//             $('#msg li:nth-child(3)').css({
//                 color:'green',
//                 listStyle: 'none'
//             })
//             rule3=true;
//         }else{
//             rule3=false;
//             $('#msg li:nth-child(3)').css({
//                 color:'rgb(145, 9, 9)',
//                 listStyle: 'disc'
//             })
//         }
    
//     })
// //MORE THAN 7 CHARACTERS
//     let rule4=false;
//     $('#password').on('keyup',function(pWord){
//         if(pWord.target.value.length > 7){
//             $('#msg li:last-child').css({
//                 color:'green',
//                 listStyle:'none'
//             })
//             rule4=true;
//         }else{
//             rule4=false;
//             $('#msg li:last-child').css({
//                 color:'rgb(145, 9, 9)',
//                 listStyle:'disc'
//             })
//         }

//     })
// //ON-SUBMIT
//     $('#myForm').on('submit',(e)=>{
//         e.preventDefault();
//         if(rule1 == true && rule2 == true && rule3 == true && rule4 == true){
//             $('#log-in').attr('href','../Home page/Myfamilymanager_homepages.html.html')
//         }else{
//             console.log('false')
//         }
//     })
//REMEMBER ME
   const remBtn=document.querySelector('#check-box');
   const label=document.querySelector('#btn-label');
   const emData=document.querySelector('#email')
   const pasData=document.querySelector('#password');
   
    emData.value=localStorage.getItem('email');
    pasData.value=localStorage.getItem('pasword')
   remBtn.addEventListener('click',(e)=>{
      if(e.target.checked == true){
           localStorage.setItem('email',emData.value)
           localStorage.setItem('pasword',pasData.value)
            
      }
   })
   
   if(emData.value.includes('@') && emData.value.includes('.com')){

    emData.classList=`input form-control form-control-lg is-valid`;
    }else{
    emData.classList=`input form-control form-control-lg is-invalid`
    }
   emData.addEventListener('input',(e)=>{
        if(e.target.value.includes('@') && e.target.value.includes('.com')){

                e.target.classList=`input form-control form-control-lg is-valid`;
        }else{
                e.target.classList=`input form-control form-control-lg is-invalid`
        }
   })
   
   
   

})





        





 

