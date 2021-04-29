
/*For create form*/

document.getElementById('show-element').onclick = function() {
    document.getElementById('party').required = false;
    document.getElementById('first-name').required = false;
    document.getElementById('last-name').required = false;
    document.getElementById('address').required = false;
    document.getElementById('date').required = false;
    document.getElementById('message').required = false;
    var element = document.getElementById('to-show');
    if (element.className == 'hide') {
      element.className = 'show';
      document.getElementsByTagName('body')[0].className = 'on';
      document.getElementById('show-element').className = 'active';
    } else {
      element.className = 'hide';
      document.getElementsByTagName('body')[0].className = 'off';
      document.getElementById('show-element').className = '';
    }
}

