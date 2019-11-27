//Menu button onClick() action


function toggleNav() {
    var element = document.getElementById("side_nav");
    
    if (element.style.opacity == "1" ) {
      
       document.getElementById("side_nav").style.width = "300px";
       document.getElementById("side_nav").style.right = "-300px";
       document.getElementById("side_nav").style.opacity = "0";
    } else {
        document.getElementById("side_nav").style.width = "300px";
        document.getElementById("side_nav").style.right = "0";
        document.getElementById("side_nav").style.opacity = "1";
       
    }
}

(function () {
    const link = document.querySelectorAll('nav > .hover-this');
    const cursor = document.querySelector('.cursor');
    const animateit = function (e) {
          const span = this.querySelector('.nav-wrapper nav span');
          const { offsetX: x, offsetY: y } = e,
          { offsetWidth: width, offsetHeight: height } = this,
          move = 25,
          xMove = x / width * (move * 2) - move,
          yMove = y / height * (move * 2) - move;
          span.style.transform = `translate(${xMove}px, ${yMove}px)`;
          if (e.type === 'mouseleave') span.style.transform = '';
    };
    const editCursor = e => {
          const { clientX: x, clientY: y } = e;
          cursor.style.left = x + 'px';
          cursor.style.top = y + 'px';
    };
    link.forEach(b => b.addEventListener('mousemove', animateit));
    link.forEach(b => b.addEventListener('mouseleave', animateit));
    window.addEventListener('mousemove', editCursor);
})();