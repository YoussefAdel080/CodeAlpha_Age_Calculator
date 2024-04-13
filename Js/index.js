const dateInput = document.getElementById('date-input');
const calculateBtn = document.getElementById('calculate-btn');

let currentDate = '';
getCurrentDate();

const dateResults = Array.from(document.getElementsByClassName("date-result"));

calculateBtn.addEventListener('click', (e) => 
{   const enteredDateObj = new Date(dateInput.value);
    const currentDateObj = new Date(currentDate);
    let differenceInDays = Math.round((currentDateObj.getTime() - enteredDateObj.getTime())/(1000* 60 * 60 * 24))
    let years = Math.floor(differenceInDays / 365);
    differenceInDays -= (years*365);
    let months = Math.floor(differenceInDays / 30);
    differenceInDays -= (months * 30);
    let days = Math.floor(differenceInDays);

    for(let i = 0 ; i < dateResults.length ; i++){
        dateResults[i].innerHTML = [years, months, days][i]
    }
}
)

async function getCurrentDate(){
    try {
        const response = await axios.get('http://worldtimeapi.org/api/timezone/Africa/Cairo').then(
            res => 
            {
                currentDate = res.data.datetime.slice(0,10);
            }
        ) }catch{(err => {console.log(err)})};
};