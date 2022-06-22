function ExecuteScript(strId)
{
  switch (strId)
  {
      case "66nkYCqeeaF":
        Script1();
        break;
      case "62ZIMaiuS3p":
        Script2();
        break;
  }
}

function Script1()
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

function Script2()
{
  window.frames[0].frameElement.contentWindow.CreateBook();
}

