//-------------------------------------------------------------------
// 요소들
//-------------------------------------------------------------------
const header = document.querySelector('header');
const navMenu = document.querySelector('.nav__menu');
const contactBtn = document.querySelector('.home__contact');
const home = document.querySelector('#home');
const arrowUp = document.querySelector('.arrow-up');
const toggle = document.querySelector('.nav__toggle');

//-------------------------------------------------------------------
// 최상단 네비게이션의 메뉴를 누르면 해당 섹셕으로 이동한다.
//-------------------------------------------------------------------
const moveToSection = () => {
  navMenu.addEventListener('click', event => {
    const dataset = event.target.dataset;
    if (dataset == null || dataset.key == null) {
      return;
    }
    
    goThere(`#${(dataset.key)}`);
    navMenu.classList.remove('on');
  });
};

//-------------------------------------------------------------------
// 스크롤하면 투명했던 header 가 background-color 를 갖는다.
//-------------------------------------------------------------------
const changeNavBgColor = () => {
  document.addEventListener('scroll', event => {
    const headerHeight = header.getBoundingClientRect().height;
    if (window.scrollY > (headerHeight / 2)) {
      header.classList.add('on');
    } else {
      header.classList.remove('on');
    }
  });
};

//-------------------------------------------------------------------
// home 섹션의 contact me 버튼을 클릭하면 contact 섹션으로 이동한다.
//-------------------------------------------------------------------
const moveToContact = () => {
  contactBtn.addEventListener('click', event => {
    goThere('#contact');
  });
};

//-------------------------------------------------------------------
// home 섹션이 화면에서 사라지면 점점 투명해진다.
//-------------------------------------------------------------------
const transparentHome = () => {
  document.addEventListener('scroll', event => {
    const homeHeight = home.getBoundingClientRect().height;
    const opacity = (homeHeight - window.scrollY) / homeHeight;
    home.style.opacity = `${opacity}`;
  });
};

//-------------------------------------------------------------------
// 좌측하단 화살표를 클릭하면 home 섹션으로 이동한다.
//-------------------------------------------------------------------
const moveToHome = () => {
  arrowUp.addEventListener('click', event => {
    goThere('#home');
  });
};

//-------------------------------------------------------------------
// home 섹션에 진입하면 좌측하단 화살표가 사라진다.
//-------------------------------------------------------------------
const disappearArrow = () => {
  document.addEventListener('scroll', event => {
    const homeHeight = home.getBoundingClientRect().height;
    if (window.scrollY > homeHeight) {
      arrowUp.classList.add('on');
    } else {
      arrowUp.classList.remove('on');
    }
  });
};

//-------------------------------------------------------------------
// toggle 버튼을 클릭하면 섹션 이동 메뉴를 보여준다.
//-------------------------------------------------------------------
toggle.addEventListener('click', event => {
  navMenu.classList.toggle('on');
});

//-------------------------------------------------------------------
// skills 의 언어 숙련도 수치를 bar 의 길이로 표현한다.
//-------------------------------------------------------------------
const values = document.querySelectorAll('.skill__element');
values.forEach(m => {
  const level = m.querySelector('.skill__level');
  const value = m.querySelector('.skill__value');
  value.style.width = level.innerHTML;
});

// 사용자 정의 함수
const goThere = (there) => {
  document
    .querySelector(there)
    .scrollIntoView({behavior: "smooth", block: "start"});
};

moveToSection();
moveToContact();
moveToHome();
changeNavBgColor();
transparentHome();
disappearArrow();
