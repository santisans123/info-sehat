
//---------------HEADER--------------------

//header width
let windowWidth = window.innerWidth;
const dropdownStatus = document.querySelector("nav.header-toggle");
let toggleStatus = false;

if(windowWidth > 767){
    dropdownStatus.removeAttribute("style");
}
if(windowWidth <= 767){
    dropdownStatus.setAttribute("style","display: none");
}

//Header switch

const toggleFunction = () => {
     toggleStatus = !toggleStatus;
     changeStatis();
};

const changeStatis = () => {

  const toggleList = document.querySelector("i.fa-list-ul");
  const toggleList2 = document.querySelector("i.fa-times");
  const buttonNeumorphism = document.querySelector(".header-mobile button");


  if(!toggleStatus){
      dropdownStatus.setAttribute("style","display: none");
      buttonNeumorphism.setAttribute("class","active");
      toggleList2.setAttribute("class","fas fa-list-ul");
  }else{
      dropdownStatus.removeAttribute("style");
      buttonNeumorphism.setAttribute("class","clicked");
      toggleList.setAttribute("class","fas fa-times");
      toggleList.setAttribute("style",
          "      animation-name: rotation;\n" +
          "            animation-duration: 0.75s;\n" +
          "            animation-iteration-count: 1;");
      setTimeout(() => {
          toggleList.removeAttribute("style")
      },1000);
  }
};

//HEADER SWITCH LINK
const getHeader = document.querySelector(".header-toggle");
const linkClick = document.querySelectorAll(".header-toggle a");
const linkClickList = ['#information','#protection','#about'];
let noHeader = null;

const remakeHeaderActive = (index) => {
    linkClick.forEach((el,i) => {
        if(el.classList.contains('active')){
            el.removeAttribute('class');
        }
        if(index === i) el.setAttribute('class','active');
    })
}

const searchIndexHeader = (header) => linkClickList.indexOf(header);

getHeader.addEventListener('click', event => {
    const nameHeader = event.target.getAttribute('href');
    if(nameHeader !== null){
        noHeader = searchIndexHeader(nameHeader);
        remakeHeaderActive(noHeader);
    }
})


//HOBBY

const clickHobby = document.querySelector(".hobby-list");
const buttonHobby = document.querySelectorAll(".hobby-list button");
const hobbyDesc = document.querySelectorAll(".hobby-desc div");
const listHobby = ['coding','networking','design','hiking'];
let noHobby = null;

const getNameHobby = (hobby) => listHobby.indexOf(hobby);
const remakeActive = (index) => {
    buttonHobby.forEach((el,i) => {
        if(el.classList.contains('active')){
            el.classList.remove('active');
        };
        if(index === i) el.classList.add('active');
    })
}
const visibilityContent = (index) => {
    hobbyDesc.forEach((el , i) => {
        if(index !== i ){
            el.removeAttribute('style');
        }
        else{
            el.setAttribute('style','display: block');
        }
    })
}

clickHobby.addEventListener('click', (e) => {
    const nameHobby = e.target.getAttribute('id');
    if(nameHobby !== null){
         noHobby =(getNameHobby(nameHobby));
         remakeActive(noHobby);
         visibilityContent(noHobby);
    }
})


//aside

let toggleAside = false;
const getAside = document.querySelector('aside');
const asideClick = document.querySelector('aside .profile-click');
const iconAside = document.querySelector('aside .profile-click i');

asideClick.addEventListener('click', event => {
  toggleAside = !toggleAside;

  if(toggleAside){
      getAside.setAttribute('style','right: -5%');
      iconAside.classList.remove('fa-angle-double-left');
      iconAside.classList.add('fa-angle-double-right');
  }
  else{
      getAside.removeAttribute('style');
      iconAside.classList.remove('fa-angle-double-right');
      iconAside.classList.add('fa-angle-double-left');
  }
});


