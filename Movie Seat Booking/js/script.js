const container = document.querySelector('.booking-seats-container')
const asientos = document.querySelectorAll('.seats.asientos:not(occupied)')
const count = document.getElementById('count')
const total = document.getElementById('total')

//update total and count

function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.seats.asientos.selected')
    const selectedSeatsCount = selectedSeats.length
    console.log(selectedSeatsCount)
}

container.addEventListener('click', (e) =>{
    if(e.target.classList.contains('asientos') && !e.target.classList.contains('occupied')){
        //console.log(e.target)
        e.target.classList.toggle('selected')
    }
    updateSelectedCount()
})

//asientos2