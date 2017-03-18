$(document).ready(function() {	
	$("#myModal").modal('show');
	
	var tabFromSql = ['zmienna'];	
	
	
	$.ajax ({		// Pobieranie haslel z bazy
	   url: 'json.php',
	   dataType: 'json',
	   method: 'GET',
	   data: {
			action: 'hasla',
	   },
		success: function( data ) {
			if( data.posts ) {
				for( var i in data.posts ) {
					tabFromSql.push( data.posts[ i ].haslo ); // pushowanie hasel do tablicy
				}
			}
			game();		// wywołanie funkcji game
		}
	});
	
	function game() {		

		var tabPassword = tabFromSql[(Math.random() * tabFromSql.length) | 0].split(''); // ['z' 'm' 'i' 'e' 'n' 'n' 'a']		
		var missed = 0;  
		var count = 0;
				
		$('.letter-button').click(function() {  // zapisanie w zmiennej kliknietej litery,
			var letter = $(this).text();
				$(this).remove();				//  usunięcie klikniętego buttona (litery)	

			$('.letter').each(function() {
				if ($(this).attr('data-letter').toLowerCase() === letter.toLowerCase()) {
					$(this).text(letter);
				}		
			});
			
			
			function checkAvailability(arr, val) {		// funkcja sprawdzająca czy litera jest w tablicy
				return arr.some(function(arrVal) {
					return val.toLowerCase() === arrVal.toLowerCase();	
				});
			}		
			
			if ( checkAvailability(tabPassword, letter) === true) {	 // jeżeli tak, usuwam litere z tablicy			
				var removeItem = letter.toLowerCase();   		 
					tabPassword = $.grep(tabPassword, function(value) {
						return value != removeItem;
					});						
						if(!tabPassword.length){   // sprawdź czy tablica jest pusta
							$("#myModal2").modal('show');
								$('.letter-button').unbind("click");
						}					
			} else {		// nie - zmniejsz ilosc szans, narysuj wisielca					
				printHangman( ++missed );	
				console.log('dupa')				
					count++;
					
				if (count == 7){  // dozwolona ilość pomyłek
					$("#myModal3").modal('show');					
						$('.letter-button').unbind("click");
				};						
			}	
		});
				
		tabPassword.forEach(function(letter) {
				var $letter = $('<span>', { class: 'letter', 'data-letter': letter });
				$('#answer-container').append($letter);
		});
	}
	 
});
	 
