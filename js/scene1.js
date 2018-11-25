function scene1() {

  // Setup Stage
  const stage = document.querySelector('#stage');
  const meadow = document.querySelector('#grassy-field');
  const meadowImgSrc = meadow.getAttribute('src');
  const stageImg = stage.querySelector('#stage img');
  stageImg.setAttribute('src', meadowImgSrc);

  // Setup Cast

  // Arya
  const arya = document.querySelector('#arya');
  arya.style.position = 'absolute';
  arya.style.height = '15%';
  arya.style.top = '22%';
  arya.style.left = '40%';
  stage.append(arya);

  // Bran
  const bran = document.querySelector('#bran');
  bran.style.position = 'absolute';
  bran.style.height = '15%';
  bran.style.top = '55%';
  bran.style.left = '80%';
  stage.append(bran);

  // Setup Props

  // Mushroom
  const mushroom = document.querySelector('#mushroom');
  mushroom.style.position = 'absolute';
  mushroom.style.height = '10%';
  mushroom.style.top = '75%';
  mushroom.style.left = '40%';
  stage.append(mushroom);


  // Action!

  // Bran moves to mushroom
  frame(() => {
    bran.style.left = '70%';
  });

  frame(() => {
    bran.style.left = '60%';
  });

  frame(() => {
    bran.style.left = '50%';
  });

  frame(() => {
    bran.style.top  = '65%';
    bran.style.left = '40%';
  });

  // Bran eats mushroom
  frame(() => {
    mushroom.style.display = 'none';
  });

  // Bran grows bigger
  frame(() => {
    bran.style.height  = '17%';
  });

  frame(() => {
    bran.style.height = '20%';
  });

  frame(() => {
    bran.style.height = '25%';
    bran.style.top    = '60%';
    bran.style.left   = '37%';
  });

  frame(() => {
    bran.style.height = '30%';
    bran.style.top    = '55%';
    bran.style.left   = '36%';
  });

  // Bran chases Arya
  frame(() => {
    arya.style.left = '35%';
    bran.style.top  = '54%';
    bran.style.left = '37%';
  });

  frame(() => {
    arya.style.left = '30%';
    bran.style.top  = '52%';
  });

  frame(() => {
    arya.style.left = '25%';
    bran.style.top  = '50%';
  });

  // how can we DRY this up?
  frame(() => { branChasesArya() });
  frame(() => { branChasesArya() });
  frame(() => { branChasesArya() });
  frame(() => { branChasesArya() });
  frame(() => { branChasesArya() });
  frame(() => { branChasesArya() });
  frame(() => { branChasesArya() });

  function branChasesArya() {
    bran.style.left = (parseInt(bran.style.left) - 10) + '%';
    bran.style.top  = (parseInt(bran.style.top)  - 5)  + '%';
    arya.style.left = (parseInt(arya.style.left) - 10) + '%';
  }

}
