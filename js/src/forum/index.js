<script>
function setClipboardText(event){
      event.preventDefault();
      var node = document.createElement('div');
      node.innerHTML= window.getSelection(0).toString();
      var result = window.getSelection(0).toString();
      if (result.length>21){
                result=result.substring(0,20);
      }
      var htmlData = '<div>diskusipajak.com oleh less summer <br />silakan gunakan menu bagikan di kanan bawah';
      var textData = 'diskusipajak.com oleh less summer <br />silakan gunakan menu bagikan di kanan bawah ' + result;
      if(event.clipboardData){
          event.clipboardData.setData("text/html", htmlData);
          event.clipboardData.setData('text/plain', textData);
      }
      else if(window.clipboardData){
          return window.clipboardData.setData("text", textData);
      }
};
 
document.addEventListener('copy', function(event){
setClipboardText(event);
});
</script>