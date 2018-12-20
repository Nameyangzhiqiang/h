<script type="text/javascript">
			var pro=document.getElementById('pro');
			var bth=document.getElementById('bth');
			bth.onclick=function(){
				if(bth.innerHTML=="展开"){
					pro.style.height="241px"
					pro.style.overflow="visible";
					bth.innerHTML="收起";
				}else{
					pro.style.height="200px"
					pro.style.overflow="hidden";
					bth.innerHTML="展开"
				}
			}
</script>