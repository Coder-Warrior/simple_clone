document.querySelectorAll('.contact a')[document.querySelectorAll('.contact a').length-1].addEventListener('mouseenter', function (ele) {
  ele.preventDefault();
});

window.onscroll = function () {
    if (window.scrollY >= 700) {
        if (document.querySelectorAll('button').length === 0) {
        document.querySelectorAll('script')[0].before(document.createElement('button'));
        document.querySelectorAll('button')[0].style.cssText = "position: fixed; right: 20px; bottom: 20px; padding: 8px; border-radius: 7px; background-color: #889";
        document.querySelectorAll('button')[0].textContent = 'To Up';
        } else {
        document.querySelectorAll('button')[0].style.display = 'block';
        }
        document.querySelectorAll('button')[0].onclick = function () {
        window.scrollTo ({
            top: 0
        })
        }
    } else {
        if (document.querySelectorAll('button').length !== 0) {
        document.querySelector('button').style.display = 'none';
        }
    }
}