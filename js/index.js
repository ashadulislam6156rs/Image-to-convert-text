let ExtractBtnEl = document.querySelector(".Extract-btn");
let inputBtnEl = document.querySelector(".input-btn");
let extractAreaEl = document.querySelector(".extract-area");

ExtractBtnEl.addEventListener('click',()=>{
     Extracttext ();
})


let Extracttext = ()=>{

    let imageInput = inputBtnEl.files[0];

    if(!imageInput){
    extractAreaEl.textContent = `Please Select your image`;
    return 0;
   }

  Tesseract.recognize(
    imageInput,
     'ben+eng', // বাংলা এবং ইংরেজি ভাষা একসাথে
  {
    logger: m => console.log(m) // progress দেখতে চাইলে
  }
  ).then(({data})=>{
    extractAreaEl.innerText = data.text;

  }).catch((error) =>{
    console.error('Error',error);
    extractAreaEl.textContent = error;

  })

}


