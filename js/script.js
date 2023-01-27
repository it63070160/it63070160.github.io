var listText = {
  "myHTMLCarousel-inner": {
    "detail" : [
      {'slideID': "Solar", 'name' : "Solar Rooftop Landing Page", 'description':"โปรเจกต์วิชา Multimedia Technology ทำร่วมกับ Greenpeace Thailand"}
    ]
  },
  "myReactCarousel-inner": {
    "detail" : [
      {'slideID': "RANS", 'name':"Road Risk Areas Notification System",'description':"แอปพลิเคชันทางโทรศัพท์สำหรับแจ้งเตือนจุดเสี่ยงบนท้องถนนเมื่อผู้ใช้เข้าใกล้จุดเสี่ยง"}
    ]
  },
  "myJavaCarousel-inner": {
    "detail" : [
      {'slideID': "bankSim", 'name':"Bank Simulation",'description':"จำลองระบบธนาคารด้วยภาษา Java"},
      {'slideID': "bookStore", 'name':"Bookstore Simulation",'description':"จำลองระบบซื้อขายหนังสือออนไลน์ด้วยภาษา Java"}
    ]
  },
  "myPythonCarousel-inner": {
    "detail" : [
      {'slideID': "snakeGame", 'name':"Snake Game",'description':"สร้างเกมด้วย Python"}
    ]
  },
}

function nextText(info){
  // var element = document.querySelector('#'+info.id+' > div.carousel-item.active');
  // var elementAll = document.querySelectorAll('#'+info.id+' .carousel-item').length;
  var detailFilter = listText[info.parentID].detail.filter((value)=>{
    return value.slideID == info.slideID
  })
  document.querySelector('#'+info.parentID+'_expName').innerHTML = detailFilter[0].name
  document.querySelector('#'+info.parentID+'_expDesc').innerHTML = detailFilter[0].description
}

function prevText(info){
  var detailFilter = listText[info.parentID].detail.filter((value)=>{
    return value.slideID == info.slideID
  })
  document.querySelector('#'+info.parentID+'_expName').innerHTML = detailFilter[0].name
  document.querySelector('#'+info.parentID+'_expDesc').innerHTML = detailFilter[0].description
}

var navBtn = document.getElementsByClassName('nav-btn')
var navTextBG = document.getElementsByClassName("navTextBG")
var navText = document.getElementsByClassName("navText")
var detailText = document.getElementsByClassName("detail_text")
var activeNav;
var lastActiveNav = 0;

window.onscroll = function(){
  // if(window.pageYOffset >= 1){
  //   document.getElementById("top-nav").classList.add("fixed-top")
  // }else{
  //   if(document.getElementById("top-nav").classList.contains("fixed-top")){
  //     document.getElementById("top-nav").classList.remove("fixed-top")
  //   }
  // }
  for(var i=0; i<navBtn.length; i++){
    if(window.pageYOffset >= detailText[i].offsetTop-200){
      activeNav = i
    }else{
      break;
    }
  }
  navBtn[lastActiveNav].classList.remove("active")
  navTextBG[lastActiveNav].classList.remove("open")
  navText[lastActiveNav].classList.remove("open")
  navBtn[activeNav].classList.add("active")
  navTextBG[activeNav].classList.add("open")
  navText[activeNav].classList.add("open")
  lastActiveNav = activeNav
}

function navToCarousel(to){
  window.scrollTo(0, document.getElementsByClassName('detail_text')[to].offsetTop)
}

const myCarousel = document.getElementsByClassName('carousel')
for(var i=0; i<myCarousel.length; i++){
  myCarousel[i].addEventListener('slide.bs.carousel', event => {
    if(event.direct == 'right'){
      prevText({'parentID':event.relatedTarget.parentElement.id, 'slideID':event.relatedTarget.id})
    }else{
      nextText({'parentID':event.relatedTarget.parentElement.id, 'slideID':event.relatedTarget.id})
    }
  })
}