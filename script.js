function expandCard(card){
	card.style.transform ='scale(1.05)'
	card.style.boxShadow = '0 8px 15px rgba(0,0,0,0.3)'
}

function shinkCard(card){
	card.style.transform ='scale(1)'
	card.style.boxShadow = 'none'
}

function expandCard(cardpromo){
	cardpromo.style.transform ='scale(1.05)'
	cardpromo.style.boxShadow = '0 8px 15px rgba(0,0,0,0.3)'
}

function shinkCard(cardpromo){
	cardpromo.style.transform ='scale(1)'
	cardpromo.style.boxShadow = 'none'
}


// Borda no span do header
var spans = document.querySelectorAll(".sobre span");

spans.forEach(function(span) {
    span.addEventListener("mouseover", function() {
        span.style.backgroundColor = "#3c3b3b" 
        span.style.border = "5px solid transparent"
		span.style.borderRadius = "8px"
		span.style.transition = "background-color 0.3s";
    })

    span.addEventListener("mouseout", function() {
        span.style.backgroundColor = ""
        span.style.border = ""
    })
})