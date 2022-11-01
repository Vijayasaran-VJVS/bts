var i = 0;
			var txt = 'BTS also known as the Bangtan Boys, is a seven-member South Korean boy band formed by Big Hit Entertainment. The name subsequently became a backronym for Beyond the Scene in July 2017. On June 12, 2013, they performed the song "No More Dream" from their initial album 2 Cool 4 Skool to commemorate their debut on June 13, 2013. They won several New Artist of the Year awards for the track "No More Dream", including at the 2013 Melon Music Awards and Golden Disc Awards and the 2014 Seoul Music Awards. The band continued to gain prominence with their subsequent albums Dark & Wild (2014), The Most Beautiful Moment in Life, Part 2 (2015) and The Most Beautiful Moment in Life: Young Forever (2016), with the latter two entering the U.S. Billboard 200. The Most Beautiful Moment in Life: Young Forever went on to win the Album of the Year award at the 2016 Melon Music Awards.;'
			var speed = 50;
			
			
			function typeWriter() {
			  if (i < txt.length) {
				document.getElementById("demo").innerHTML += txt.charAt(i);
				i++;
				setTimeout(typeWriter, speed);
			  }
			}

			
			var i = 0;
			function move() {
			  if (i == 0) {
				i = 1;
				var elem = document.getElementById("aBar");
				var width = 1;
				var id = setInterval(frame, 10);
				function frame() {
				  if (width >= 100) {
					clearInterval(id);
					i = 0;
				  } else {
					width++;
					elem.style.width = width + "%";
				  }
				}
			  }
			}
			
