const guessNumber = Math.round(Math.random()*100);


document.querySelector("#guess").onclick = function () {
    // const guessNumber = Math.round(Math.random()*100);
    console.log(guessNumber);
    let number = document.querySelector("#number").value;
    if(number>guessNumber){
        // console.log('lớn hơn rồi');
        document.querySelector("#notify").className="alert alert-danger";
        document.querySelector("#notify").innerHTML="Số bạn nhập lớn hơn rồi";
    }
    if(number<guessNumber){
        // console.log('bé hơn rồi');
        document.querySelector("#notify").innerHTML="Số bạn nhập nhỏ hơn rồi";
        document.querySelector("#notify").className="alert alert-danger";
    }
}