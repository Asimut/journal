function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5tgbr0EbOoa":
        Script1();
        break;
      case "6B0yiei4ZKG":
        Script2();
        break;
      case "6OFIYPhbBk9":
        Script3();
        break;
      case "5sTDCOZxbYN":
        Script4();
        break;
      case "648wlEORuxV":
        Script5();
        break;
      case "6Ew3kGORlDk":
        Script6();
        break;
  }
}

function Script1()
{
  window.frames[0].frameElement.contentWindow.CreateBookView();
}

function Script2()
{
  var player = GetPlayer();

var area = document.querySelector('textarea');

area.addEventListener('input', restrictNumber);

function restrictNumber (e) {  
  var newValue = this.value.substr(0, 230).trim();
  //console.log(newValue);
  this.value = newValue;
  
  var qty = this.value.length;
  
  player.SetVar("text_count_2_1",qty);
}
}

function Script3()
{
  window.frames[0].frameElement.contentWindow.CreateBookView();
}

function Script4()
{
  window.frames[0].frameElement.contentWindow.CreateBookView();
}

function Script5()
{
  window.frames[0].frameElement.contentWindow.CreateBookView();
}

function Script6()
{
  window.frames[0].frameElement.contentWindow.CreateBookView();
}

