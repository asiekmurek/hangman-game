var canvas = document.getElementById("myCanvas");
	var context = canvas.getContext("2d");

	function printHangman( stage ) {
		context.lineWidth = 10;
		switch( stage ) {
			case 1: {
				console.log(1);
				context.strokeStyle = '#ff1a1a';
				context.beginPath();
				context.moveTo(150, 400);
				context.lineTo(150, 265);
				context.stroke();
				context.closePath();
				break;
			}
			case 2: {
				console.log(2);
				context.strokeStyle = '#ff1a1a';
				context.beginPath();
				context.moveTo(148, 355);
				context.lineTo(126, 400);
				context.stroke();
				context.closePath();
				break;
			}
			case 3: {
				context.strokeStyle = '#ff1a1a';
				context.beginPath();
				context.moveTo(147, 355);
				context.lineTo(173, 384);
				context.stroke();
				context.closePath();
				break;
			}
			case 4: {
				context.strokeStyle = '#ff1a1a';
				context.beginPath();
				context.moveTo(150, 264);
				context.lineTo(236, 265);
				context.stroke();
				context.closePath();
				break;
			}
			case 5: {
				context.strokeStyle = '#ff1a1a';
				context.beginPath();
				context.moveTo(150, 292);
				context.lineTo(177, 266);
				context.stroke();
				context.closePath();
				break;
			}
			case 6: {
				context.strokeStyle = '#ff1a1a';
				context.beginPath();
				context.moveTo(224, 265);
				context.lineTo(225, 292);
				context.stroke();
				context.closePath();
				break;
			}
			case 7: {
				context.strokeStyle = '#ff1a1a';
				context.save();
				context.translate(222, 302.5);
				context.scale(0.8888888888888888, 1);
				context.beginPath();
				context.arc(0, 0, 12, 0, 6.283185307179586, false);
				context.stroke();
				context.closePath();
				context.restore();
				context.strokeStyle = '#ff1a1a';
				context.beginPath();
				context.moveTo(220, 315);
				context.lineTo(220, 348);
				context.stroke();
				
				context.closePath();
				context.strokeStyle = '#ff1a1a';
				context.beginPath();
				context.moveTo(218, 318);
				context.lineTo(209, 330);
				context.stroke();
				
				context.closePath();
				context.strokeStyle = '#ff1a1a';
				context.beginPath();
				context.moveTo(221, 317);
				context.lineTo(236, 330);
				context.stroke();
				
				context.closePath();
				context.strokeStyle = '#ff1a1a';
				context.beginPath();
				context.moveTo(218, 344);
				context.lineTo(207, 356);
				context.stroke();
				
				context.closePath();
				context.strokeStyle = '#ff1a1a';
				context.beginPath();
				context.moveTo(220, 345);
				context.lineTo(230, 355);
				context.stroke();
				context.closePath();
				break;
			}
		}
	}	