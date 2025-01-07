document.addEventListener('DOMContentLoaded', function() {
  var tabLinks = document.querySelectorAll('.tab-links a');
  var tabs = document.querySelectorAll('.tab');

  for (var i = 0; i < tabLinks.length; i++) {
    tabLinks[i].addEventListener('click', function(event) {
      event.preventDefault();

      // 移除所有标签页的 active 类
      for (var j = 0; j < tabLinks.length; j++) {
        tabLinks[j].parentNode.classList.remove('active');
        tabs[j].classList.remove('active');
      }

      // 添加 active 类到当前标签页
      this.parentNode.classList.add('active');
      document.getElementById(this.getAttribute('href').substring(1)).classList.add('active');
    });
  }
});
